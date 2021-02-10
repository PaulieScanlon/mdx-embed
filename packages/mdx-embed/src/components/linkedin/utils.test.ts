import { linkedInClassNames, handleLinkedInLoad } from './utils';

describe('handleLinkedInLoad', () => {
  test('it calls createScriptTag when LinkedIn class names are found', () => {
    const linkedInDiv = document.createElement('div');
    linkedInDiv.setAttribute('class', linkedInClassNames.split(',').join(' ').replace(/\./g, ' '));
    document.body.appendChild(linkedInDiv);

    expect(handleLinkedInLoad().status).toEqual('createScriptTag');
  });
});
