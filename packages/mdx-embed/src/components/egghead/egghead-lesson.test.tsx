import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { EggheadLesson } from './';

describe('<EggheadLesson />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const lessonId = 'gatsby-set-up-a-gatsby-site-to-use-mdx-with-gatsby-plugin-mdx-with-a-default-layout';
    render(<EggheadLesson lessonId={lessonId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('egghead-lesson')).toBeDefined();
  });
});
