import React from 'react';
import { ComponentParams, Field, Image, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkButton from '@/components/base/LinkButton';
import styles from '@/styles/SplitHero.module.scss';
import classNames from 'classnames';

interface Fields {
  heading: Field<string>;
  cta: LinkField;
  ctaText: Field<string>;
  bgImage: ImageField;
}

interface SplitHeroProps {
  fields: Fields;
  params: ComponentParams;
}

function capitalize(s: string) {
  if (s === undefined) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function SplitHero(props: SplitHeroProps): React.ReactElement {
  const { headingPosition, imagePosition, headingColor } = props.params || {};
  const { heading, cta, ctaText, bgImage } = props.fields;
  const headingText = styles[`heading${capitalize(headingColor)}`];

  return (
    <section className={`t-relative t-flex t-flex-col`}>
      {/* image container (for positioning) */}
      <div
        className={classNames({
          't-block t-relative md:t-absolute md:t-z-[-1] md:t-top-0 md:t-bottom-0 md:t-overflow-hidden': imagePosition !== 'full',
          'md:t-left-0 md:t-right-[60%]': imagePosition === 'left',
          'md:t-right-0 md:t-left-[60%]': imagePosition === 'right',
        })}
      >
        <Image field={bgImage} className="t-max-h-[218px] md:t-max-h-full t-object-center t-object-cover md:t-h-full md:t-w-full" />
      </div>
      {/* content container */}
      <div
        className={classNames({
          't-container t-mx-auto t-flex t-flex-row t-justify-start': true,
          // content layout
          'md:t-justify-start': imagePosition === 'right' || (imagePosition === 'full' && (!headingPosition || headingPosition === 'left')),
          'md:t-justify-center': imagePosition === 'full' && headingPosition === 'center',
          'md:t-justify-end': imagePosition === 'left' || (imagePosition === 'full' && (!headingPosition || headingPosition === 'right')),
          // content padding
          't-py-[40px] md:t-py-[80px] xl:t-py-[120px] 2xl:t-py-[160px]': imagePosition !== 'full',
        })}
      >
        {/* CTA wrapper */}
        <div
          className={classNames({
            't-flex t-flex-col t-w-full md:t-w-[60%] t-px-4 md:t-px-0': true,
            'md:t-ml-10': imagePosition === 'left',
            'md:t-mr-10': imagePosition === 'right',
          })}
        >
          {/* heading */}
          <h1 className={`${headingText} ${styles.heading}`}>
            <Text field={heading} />
          </h1>
          {/* button */}
          <LinkButton field={cta} data-text={ctaText.value} variant="yellow" arrow centered={imagePosition === 'full' && headingPosition === 'center'}>
            {ctaText.value}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
