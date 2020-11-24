import { flickrClassNames, handleFlickrLoad } from './utils';

describe('handleFlickrLoad', () => {
  test('it calls createScriptTag when flickr class names are found', () => {
    const flickrDiv = document.createElement('div');
    flickrDiv.setAttribute('class', flickrClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(flickrDiv);

    expect(handleFlickrLoad().status).toEqual('createScriptTag');
  });
});
