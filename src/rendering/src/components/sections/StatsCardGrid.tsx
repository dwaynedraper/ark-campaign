import React from 'react';
import { ComponentRendering, Field, Placeholder, Text, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from '@/styles/StatsCardGrid.module.scss';

interface Fields {
  headline: Field<string>;
  subheadline: Field<string>;
}

type StatsCardGridProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  fields: Fields;
};

const StatsCardGrid = (props: StatsCardGridProps): JSX.Element => {
  return (
    <section className="spaced">
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <Text field={props.fields.headline} />
        </h1>
        <p className={styles.subheading}>
          <Text field={props.fields.subheadline} />
        </p>
        <div className={styles.cardGrid}>
          <Placeholder name="stats-card" rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};

export default StatsCardGrid;
