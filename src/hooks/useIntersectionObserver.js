import { useEffect } from 'react';

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

export function useSlideUpObserver(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('visible');
        } else {
          target.classList.remove('visible');
        }
      });
    }, DEFAULT_OPTIONS);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [ref]);
}

export function useFadeInObserver(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('io-animation');
        } else {
          target.classList.remove('io-animation');
        }
      });
    }, DEFAULT_OPTIONS);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [ref]);
}

export function useInViewObserver(ref, onIntersect, threshold = 0.5) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [ref, onIntersect, threshold]);
}

export function useRevealOnScroll(containerRef, selector = '[data-reveal]') {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('is-visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [containerRef, selector]);
}
