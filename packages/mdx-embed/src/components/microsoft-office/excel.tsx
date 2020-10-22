import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IExcelProps {
  /** Excel ID */
  resid: string;
  /** Auth Key */
  authkey: string;
  /** Let people type into cells (their changes will not be saved) */
  allowTyping?: 'True' | 'False';
  /** Let people sort and filter */
  allowInteractivity?: 'True' | 'False';
  /** Set Active Cell */
  activeCell?: string;
  /** Set Active Cell */
  item: string;
  /** Show Grid Lines */
  hideGridlines?: 'True' | 'False';
  /** Hide row and column headers */
  hideHeaders?: 'True' | 'False';
  /** Add Download Button */
  downloadButton?: 'True' | 'False';
  /** Set Width */
  width?: number;
  /** Set Height */
  height?: number;
}

export const Excel: FunctionComponent<IExcelProps> = ({
  resid,
  authkey,
  allowTyping = 'True',
  allowInteractivity = 'False',
  activeCell = 'A1',
  item,
  hideGridlines = 'False',
  hideHeaders = 'False',
  downloadButton = 'True',
  width = 400,
  height = 300,
}: IExcelProps) => {
  // bundle src params for ease of use
  const params = [
    `resid=${resid}`,
    `authkey=${authkey}`,
    `em=2`,
    `wdInConfigurator=True`,
    allowTyping ? `AllowTyping=${allowTyping}` : null,
    allowInteractivity ? `wdAllowInteractivity=${allowInteractivity}` : null,
    activeCell ? `ActiveCell=${activeCell}` : null,
    item ? `Item=${item}` : null,
    hideGridlines ? `wdHideGridlines=${hideGridlines}` : null,
    hideHeaders ? `wdHideHeaders=${hideHeaders}` : null,
    downloadButton ? `wdDownloadButton=${downloadButton}` : null,
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
