import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface Fields {
  eyebrow: Field<string>;
  headline: Field<string>;
  body: Field<string>;
  image: ImageField;
}

type StatsCardProps = {
  fields: Fields;
};

const StatsCard = (props: StatsCardProps): JSX.Element => {
  return (
    <div className="t-flex t-flex-col t-items-center t-space-y-8 md:t-space-x-0">
      <Image field={props.fields.image} height={200} width={200} className="t-p-4 t-object-contain t-object-center t-h-[200px] t-w-[200px]" />
      <div className="t-flex t-flex-col t-items-center t-mt-4">
        <p className="t-text-3xl t-uppercase t-font-bold t-text-center">
          <Text field={props.fields.eyebrow} />
        </p>
        <p className="t-text-7xl t-text-primary t-font-bold t-mt-4">
          <Text field={props.fields.headline} />
        </p>
        <p className="t-text-center t-mt-4 t-max-w-sm">
          <Text field={props.fields.body} />
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
