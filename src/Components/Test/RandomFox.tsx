//import React from 'react';
import { useRef } from "react";
// interface Props {
//   image: string;
// }
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  return (
    <img
      ref={node}
      width={320}
      height="auto"
      src={image}
      style={{ borderRadius: 15 }}
    />
  );
};
