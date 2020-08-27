import React, { FunctionComponent, useRef, useEffect, useState, RefObject } from 'react';

interface GeneralObserverProps {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
}

export const GeneralObserver: FunctionComponent<GeneralObserverProps> = ({ children, onEnter }) => {
  const ref = useRef<HTMLElement>(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChildVisible(true);
          onEnter && onEnter();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      },
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return <div ref={ref as RefObject<HTMLDivElement>}>{isChildVisible ? children : null}</div>;
};
