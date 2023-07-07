import React from 'react';
import Button from '../base/Button';

interface SubmissionFormProps {
  heading: string;
  subheading: string;
}

export default function SubmissionForm({ heading, subheading }: SubmissionFormProps): React.ReactElement<SubmissionFormProps> {
  return (
    <section>
      <h2>{heading}</h2>
      <h5>{subheading}</h5>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="country">Country </label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
      </form>
      <Button />
    </section>
  );
}
