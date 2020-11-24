import { tikTokClassNames, handleTikTokLoad } from './utils';

describe('handleTikTokLoad', () => {
  test('it calls createScriptTag when tiktok class names are found', () => {
    const tiktokDiv = document.createElement('div');
    tiktokDiv.setAttribute('class', tikTokClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(tiktokDiv);

    expect(handleTikTokLoad().status).toEqual('createScriptTag');
  });
});
