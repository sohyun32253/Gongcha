import React from 'react';

const LazyImage = React.forwardRef(function LazyImage({ eager = false, ...props }, ref) {
  return (
    <img
    style={{  }}
      ref={ref}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
    />
  );
});

export default LazyImage;
