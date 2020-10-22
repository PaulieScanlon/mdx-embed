import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IExcelProps {
  /** Excel ID */
  resid: string;
  /** Auth Key */
  authkey: string;
  /** Allow Typing */
  allowTyping?: 'True' | 'False';
  /** Allow Interactivity */
  allowInteractivity?: 'True' | 'False';
  /** Set Active Cell */
  activeCell?: string;
  /** Set Active Cell */
  item: string;
  /** Show Grid Lines */
  hideGridlines?: 'True' | 'False';
  /** Add Doenload Button */
  downloadButton?: 'True' | 'False';
  /** Set Active Cell */
  inConfigurator?: 'True' | 'False';
  /** Set Width */
  width?: number;
  /** Set Height */
  height?: number;
}

export const Excel: FunctionComponent<IExcelProps> = ({
  resid,
  authkey,
  allowTyping = 'False',
  allowInteractivity = 'False',
  activeCell,
  item,
  hideGridlines = 'False',
  downloadButton = 'False',
  inConfigurator = 'False',
  width = 400,
  height = 300,
}: IExcelProps) => {
  // bundle src params for ease of use
  const params = [
    `resid=${resid}`,
    `authkey=${authkey}`,
    `em=2`,
    allowTyping ? `AllowTyping=${allowTyping}` : null,
    allowInteractivity ? `wdAllowInteractivity=${allowInteractivity}` : null,
    activeCell ? `ActiveCell=${activeCell}` : null,
    item ? `Item=${item}` : null,
    hideGridlines ? `wdHideGridlines=${hideGridlines}` : null,
    downloadButton ? `wdDownloadButton=${downloadButton}` : null,
    inConfigurator ? `wdInConfigurator=${inConfigurator}` : null,
  ];

  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          src={`https://onedrive.live.com/embed?${params.join(`&`).replace(/\&+/g, '&')}`}
        />
      </div>
    </GeneralObserver>
  );
};
