import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IAirtableBaseProps {
  /** Airtable Base ID */
  airtableBaseId: string;
  /** Layout type */
  layout?: 'card' | '';
  /** View Controls */
  viewControls?: 'on' | 'off';
}

export const AirtableBase: FunctionComponent<IAirtableBaseProps> = ({
  airtableBaseId,
  layout = '',
  viewControls = 'on',
}: IAirtableBaseProps) => {
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          data-testid="airtable-base"
          title={`airtable-${airtableBaseId}`}
          src={`https://airtable.com/embed/${airtableBaseId}?backgroundColor=green&${
            !layout ? `` : `layout=${layout}&`
          }viewControls=${viewControls}`}
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
          frameBorder="0"
        />
      </div>
    </GeneralObserver>
  );
};
