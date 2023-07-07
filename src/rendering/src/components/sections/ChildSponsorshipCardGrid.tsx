import React from 'react';
import ChildSponsorshipCard from '../composite/ChildSponsorshipCard';

interface ChildSponsorshipCardGridProps {
  heading: string;
  subheading: string;
  childSponsorshipCards: {
    name: string;
    age: number;
    birthday: string;
    location: string;
    customButtonText?: string;
  }[];
}

export default function ChildSponsorshipCardGrid({ heading, subheading, childSponsorshipCards }: ChildSponsorshipCardGridProps): React.ReactElement<ChildSponsorshipCardGridProps> {
  return (
    <section>
      <h2>{heading}</h2>
      <h5>{subheading}</h5>
      <div className="t-flex">
        {childSponsorshipCards.map((card, index) => (
          <ChildSponsorshipCard key={index} name={card.name} age={card.age} birthday={card.birthday} location={card.location} customButtonText={card.customButtonText} />
        ))}
      </div>
    </section>
  );
}
