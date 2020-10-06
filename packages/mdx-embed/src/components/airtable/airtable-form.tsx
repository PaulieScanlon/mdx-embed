import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IAirtableFormProps {
  /** Airtable Form ID */
  airtableFormId: string;
}

export const AirtableForm: FunctionComponent<IAirtableFormProps> = ({ airtableFormId }: IAirtableFormProps) => {
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          data-testid="airtable-form"
          title={`airtable-${airtableFormId}`}
          src={`https://airtable.com/embed/${airtableFormId}?backgroundColor=green`}
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
          frameBorder="0"
        />
      </div>
    </GeneralObserver>
  );
};
