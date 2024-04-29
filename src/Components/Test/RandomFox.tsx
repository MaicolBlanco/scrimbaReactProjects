// interface Props {
//   image: string;
// }
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    <img width={300} height="auto" src={image} style={{ borderRadius: 15 }} />
  );
};
