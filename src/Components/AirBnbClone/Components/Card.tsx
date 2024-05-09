import "../Styles/Card.css";

interface CardProps {
  coverImg: string;
  description: string;
  stats: {
    rating: number | string;
    reviewCount: number;
};
  title: string;
  price: number;
  openSpots: number;
  location: string;
}

const Card = (props: CardProps): JSX.Element => {
  //console.log(props);
  const {
    coverImg,
    description,
    stats: {
      rating,
      reviewCount,
    },
    location,
    title,
    price
  } = props;

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="airbnb-card">
      {badgeText ? <div className="airbnb-card--badge">{badgeText}</div> : null}
      {/* Otra forma de hacerlo es con operador logico */}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      <img src={coverImg} alt={description} />
      <div className="airbnb-card--stats">
        <img
          src="https://pngfre.com/wp-content/uploads/star-png-image-pngfre-44.png"
          alt="star icon."
        />
        <span>{rating}</span>
        <span className="star--card">({reviewCount}) • </span>
        <span className="star--card">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="airbnb-bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
