import React from 'react';
import Button from '../base/Button';
import BaseCard from '../base/BaseCard';
import styles from '@/styles/ChildSponsorshipCard.module.scss';

interface ChildSponsorshipCardProps {
  name: string;
  age: number;
  birthday: string;
  location: string;
  customButtonText?: string;
}

export default function ChildSponsorshipCard({ name, age, birthday, location, customButtonText = 'Choose Me' }: ChildSponsorshipCardProps): React.ReactElement<ChildSponsorshipCardProps> {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <BaseCard imageSource="https://images.unsplash.com/photo-1516821440248-f497afaf1b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8MTA4MHgxOTIwfHx8fHx8MTY4NzczNzIyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080">
        <h3 className={styles['card-name']}>{name}</h3>
        <div className={styles['card-text']}>
          <strong>Age&nbsp;</strong>
          {age}
        </div>
        <div className={styles['card-text']}>
          <strong>Birthday&nbsp;</strong>
          {birthday}
        </div>
        <div className={styles['card-text']}>
          <strong>Location&nbsp;</strong>
          {location}
        </div>
        <Button buttonText={customButtonText} fullWidth />
      </BaseCard>
    </div>
  );
}
