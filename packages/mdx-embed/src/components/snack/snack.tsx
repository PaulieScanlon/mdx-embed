import React, { FunctionComponent } from 'react';
import { createScriptTag } from '../../utils';
import { GeneralObserver } from '../general-observer';

const scriptUrl = 'https://snack.expo.io/embed.js';

export interface ISnackProps {
  /** The usename and snack id */
  snackId: string;
  /** Platform */
  platform?: 'web' | 'android' | 'ios' | 'mydevice';
  /** The snack theme */
  theme?: 'light' | 'dark';
}

export const Snack: FunctionComponent<ISnackProps> = ({ snackId, platform = 'web', theme = 'light' }: ISnackProps) => {
  const handleScriptLoad = () => {
    createScriptTag(scriptUrl, null);
  };
  return (
    <GeneralObserver onEnter={handleScriptLoad}>
      <div
        className="snack-mdx-embed"
        data-testid="snack"
        data-snack-id={snackId}
        data-snack-platform={platform}
        data-snack-preview="true"
        data-snack-theme={theme}
        style={{
          overflow: 'hidden',
          background: '#F9F9F9',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          height: '505px',
          width: '100%',
        }}
      ></div>
    </GeneralObserver>
  );
};
