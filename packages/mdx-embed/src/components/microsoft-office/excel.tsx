import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IExcelProps {
  /** Excel ID */
  resid: string;
  /** Auth Key */
  authkey: string;
  /** Allow Typing */
  allowTyping?: boolean;
  /** Set Active Cell */
  activeCell?: string;
  /** Set Active Cell */
  item: string;
  wdHideGridlines?: boolean;
  wdDownloadButton?: boolean;
  wdInConfigurator?: boolean;
}

export const Excel: FunctionComponent<IExcelProps> = ({
  resid,
  authkey,
  allowTyping,
  activeCell,
  item,
  wdHideGridlines,
  wdDownloadButton,
  wdInConfigurator,
}: IExcelProps) => {
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          width="200"
          height="100"
          frameBorder="0"
          scrolling="no"
          src={`https://onedrive.live.com/embed?resid=${resid}&authkey=${authkey}&em=2&AllowTyping=${allowTyping}&ActiveCell=${activeCell}&Item=${item}&wdHideGridlines=${wdHideGridlines}&wdDownloadButton=${wdDownloadButton}&wdInConfigurator=${wdInConfigurator}`}
        />
      </div>
    </GeneralObserver>
  );
};
