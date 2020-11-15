import React, { useState, useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
}

const AppImage: React.FC<Props> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && placeholderRef.current) {
      const observer = new IntersectionObserver(
        ([{ intersectionRatio }]): void => {
          if (intersectionRatio > 0) setIsLoading(true);
        }
      );

      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [isLoading, placeholderRef]);

  return isLoading ? (
    <div className="app-image h-40 flex-grow">
      <img
        className="app-image__image h-full min-w-full object-cover align-bottom"
        src={src}
        alt={alt}
      />
    </div>
  ) : (
    <div className="app-image__placeholder" ref={placeholderRef} />
  );
};

export default AppImage;
