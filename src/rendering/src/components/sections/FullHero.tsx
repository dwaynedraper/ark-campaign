import React from 'react';
import { ComponentParams, Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkButton from '@/components/base/LinkButton';
import styles from '@/styles/FullHero.module.scss';
import classNames from 'classnames';

interface Fields {
  heading: Field<string>;
  cta: LinkField;
  ctaText: Field<string>;
  bgImage: ImageField;
}

type FullHeroProps = {
  fields: Fields;
  params: ComponentParams;
};

const FullHero = (props: FullHeroProps): JSX.Element => {
  const { heading, cta, ctaText, bgImage } = props.fields || {};
  const { headingColor, headingPosition } = props.params;

  const heroStyle = {
    backgroundImage: `url(${bgImage?.value?.src})`,
  };

  return (
    <section
      className={classNames('spaced', {
        [styles.hero]: true,
      })}
      style={heroStyle}
    >
      {/* container */}
      <div
        className={classNames('t-flex', {
          [styles.container]: true,
          [styles.containerCenter]: headingPosition === 'center',
          [styles.containerRight]: headingPosition === 'right',
          [styles.containerLeft]: headingPosition === 'left',
        })}
      >
        {/* CTA container */}
        <div
          className={classNames({
            [styles.cta]: true,
            [styles.ctaLeft]: headingPosition === 'left',
            [styles.ctaCenter]: headingPosition === 'center',
            [styles.ctaRight]: headingPosition === 'right',
          })}
        >
          {/* heading */}
          <h1
            className={classNames({
              [styles.heading]: true,
              [styles.headingCenter]: headingPosition === 'center',
              [styles.headingDark]: headingColor === 'dark',
              [styles.headingLight]: headingColor === 'light',
            })}
          >
            <Text field={heading} />
          </h1>
          <LinkButton field={cta} data-text={ctaText.value} variant="yellow" arrow centered={headingPosition === 'center'}>
            {ctaText.value}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default FullHero;
