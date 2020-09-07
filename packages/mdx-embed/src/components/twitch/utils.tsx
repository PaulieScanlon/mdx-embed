import { isEmptyString } from '../../utils';

export function constructTwitchURL(twitchId?: string, channel?: string, collection?: string, baseUrl?: string) {
  const srcBlocks = [baseUrl];

  if (twitchId !== undefined) {
    srcBlocks.push(`&video=v${twitchId}`);
  } else if (!isEmptyString(channel)) {
    srcBlocks.push(`&channel=${channel}`);
  } else if (!isEmptyString(collection)) {
    srcBlocks.push(`&collection=${collection}`);
  }

  return srcBlocks.join('');
}
