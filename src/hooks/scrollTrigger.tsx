import { useRef, useEffect, useState, RefObject } from 'react';

const useScrollTrigger = (
  threshold = 0.1
): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          setVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollTrigger;
