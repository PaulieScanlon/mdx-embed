import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';

export interface IReplitProps {
  /**
   * The url to the repl
   */
  repl: string;
  /** Height for the iFrame. Defaults to 500px */
  height?: number;
  /**
   * The mode of the rendering. Defaults to 'embed'
   */
  mode?: 'embed' | 'lite';
}

export const Replit: FunctionComponent<IReplitProps> = ({ repl, height = 500, mode = 'embed' }: IReplitProps) => {
  const url = repl.startsWith('http') ? repl : `https://repl.it/${repl}`;
  const query = mode === 'embed' ? '?embed=true' : '?lite=true';

  return (
    <GeneralObserver height={height}>
      <iframe data-testid={'replit-' + mode} frameBorder="0" width="100%" height={height} src={url + query} />
    </GeneralObserver>
  );
};
