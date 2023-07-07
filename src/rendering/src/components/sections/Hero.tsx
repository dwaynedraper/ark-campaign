import React from 'react';
import { Text, LinkField, Image, ImageField, Field, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from '@/styles/Hero.module.scss';
import classNames from 'classnames';
import LinkButton from 'components/base/LinkButton';

interface Fields {
  heading: Field<string>;
  cta: LinkField;
  ctaText: Field<string>;
  bgImage: ImageField;
}

type HeroProps = {
  fields: Fields;
  params: ComponentParams;
};

function capitalize(s: string) {
  if (s === undefined) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * The Hero contains an image, and a CTA heading and button. The image and heading can
 * be positioned, and the CTA text can be colored dark or light.
 *
 * Prop values:
 *  - headingPosition: 'left' | 'center' | 'right'; <-- position of CTA heading text
 *  - imagePosition: 'left' | 'full' | 'right'; <-- full is equiv to cover
 *  - headingColor: 'dark' | 'light'; <-- color of CTA heading text
 *
 * @param {string} heading - The text to display in the heading
 * @returns A Hero element with an image and a CTA
 */
const Hero = (props: HeroProps): React.ReactElement => {
  const { headingPosition, imagePosition, headingColor } = props.params || {};
  const { heading, cta, ctaText, bgImage } = props.fields;
  const imageClass = styles[`image${capitalize(imagePosition)}`];
  const headingText = styles[`heading${capitalize(headingColor)}`];
  const ctaAlignment = styles[`cta${capitalize(headingPosition)}`];

  return (
    <section className={`${styles.hero} ${imageClass} t-relative t-flex t-flex-col`}>
      <div
        className={classNames({
          't-absolute t-z-[-1] t-left-0 t-right-0 t-top-0 t-bottom-0': !imagePosition || imagePosition === 'full',
          't-block lg:t-absolute lg:t-z-[-1] lg:t-left-0 lg:t-top-0 lg:t-bottom-0 lg:t-overflow-hidden': imagePosition === 'left',
          't-block lg:t-absolute lg:t-z-[-1] lg:t-right-0 lg:t-top-0 lg:t-bottom-0 lg:t-overflow-hidden': imagePosition === 'right',
        })}
      >
        <Image
          field={bgImage}
          className={classNames({
            't-absolute t-top-0 t-bottom-0 t-left-0 t-right-0 t-object-cover t-object-center': !imagePosition || imagePosition === 'full',
            't-w-full lg:t-h-full t-object-contain': imagePosition !== 'full',
            't-object-left': imagePosition === 'left',
            't-object-right': imagePosition === 'right',
          })}
        />
      </div>
      <div
        className={classNames({
          't-container t-mx-auto t-flex t-flex-row': true,
          // content layout
          't-justify-start lg:t-justify-start': imagePosition === 'right' || (imagePosition === 'full' && (!headingPosition || headingPosition === 'left')),
          't-justify-start lg:t-justify-center': imagePosition === 'full' && headingPosition === 'center',
          't-justify-start lg:t-justify-end': imagePosition === 'left' || (imagePosition === 'full' && (!headingPosition || headingPosition === 'right')),
          // content padding
          't-py-[80px] xl:t-py-[120px] 2xl:t-py-[160px]': imagePosition === 'full',
          't-py-[40px] lg:t-py-[80px] xl:t-py-[120px] 2xl:t-py-[160px]': imagePosition !== 'full',
        })}
      >
        <div
          className={classNames({
            't-w-full lg:t-w-1/2': true,
            [styles.cta]: !!styles.cta,
            [ctaAlignment]: !!ctaAlignment,
          })}
        >
          <h1 className={`${headingText} ${styles.heading}`}>
            <Text field={heading} />
          </h1>
          <LinkButton field={cta} data-text={ctaText.value} variant="yellow" arrow centered>
            {ctaText.value}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
