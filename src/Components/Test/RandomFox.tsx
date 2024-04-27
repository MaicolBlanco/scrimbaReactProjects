// generate a random function between 1 and 123
const random = (): number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;
  
  return <img width={300} height="auto" src={image} style={{ borderRadius: 15 }}/>;
};
