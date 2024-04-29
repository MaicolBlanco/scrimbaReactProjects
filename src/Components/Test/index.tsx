import { useState } from "react";
import { RandomFox } from "./RandomFox";

// generate a random function between 1 and 123
const random = (): number => Math.floor(Math.random() * 123) + 1;

// generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImagenItem = { id: string; url: string };

const Test = (): JSX.Element => {
  //const [images, setImages] = useState<{id:string, url:string}[]>([
  const [images, setImages] = useState<ImagenItem[]>([
    //const [images, setImages] = useState<Array<ImagenItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <main>
      <h1>Test</h1>
      {images.map(({ id, url }) => (
        <div key={id} style={{ padding: 4 }}>
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
};

export { Test };
