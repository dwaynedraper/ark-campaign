import Image from 'next/image';
import React from 'react';
import styles from '@/styles/BaseCard.module.scss';

interface BaseCardProps {
  daysWaiting?: number;
  imageSource?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function BaseCard({ daysWaiting, imageSource, children, className }: BaseCardProps): React.ReactElement {
  return (
    <div className={`${styles.card} ${className}`}>
      {daysWaiting && <div className="card-banner">{`Waiting ${daysWaiting} days`}</div>}
      {imageSource && (
        <div>
          <Image className={styles['card-img']} alt="card image" height={150} width={200} src={`${imageSource}`} />
        </div>
      )}
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
}
