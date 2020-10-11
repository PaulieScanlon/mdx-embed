import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { SimplecastEpisode } from '.';

describe('<SimplecastEpisode />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const episodeId = '905d603d-a7e4-4142-9bc3-16012312cc46';
    render(<SimplecastEpisode episodeId={episodeId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('simplecast-episode')).toBeDefined();
  });
});
