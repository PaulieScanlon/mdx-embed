import React, { FunctionComponent, useRef, useEffect, useState, RefObject } from 'react';

interface GeneralObserverProps {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
}

export const GeneralObserver: FunctionComponent<GeneralObserverProps> = ({ children, onEnter, height = 0 }) => {
  const ref = useRef<HTMLElement>(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true);
          onEnter && onEnter();
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0,
      },
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} data-testid="general-observer">
      {isChildVisible ? children : <div style={{ height, width: '100%' }} />}
    </div>
  );
};
