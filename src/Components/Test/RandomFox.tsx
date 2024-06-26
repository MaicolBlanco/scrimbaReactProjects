//import React from 'react';
import { useRef, useEffect, useState } from "react";
// interface Props {
//   image: string;
// }
type LazyImageProps = { src: string };

type ImageNative = React.ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection -> console.log
        if (entry.isIntersecting) {
          console.log("Hey Intersection!!");
          setCurrentSrc(src);
        }
      });
    });

    // observe node
    if (node.current) {
      observer.observe(node.current);
    }

    // desconect
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img
      ref={node}
      src={currentSrc}
      // onClick={imgProps.onClick}
      {...imgProps}
    />
  );
};
