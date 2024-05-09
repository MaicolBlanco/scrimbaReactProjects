import "../Styles/Card.css";

interface CardProps {
  img: string;
  description: string;
  rating: string | number;
  reviewCount: number;
  country: string;
  title: string;
  price: number;
  openSpots: number;
  location: string;
}

const Card = (props: CardProps): JSX.Element => {
  // console.log(props);
  const {
    img,
    description,
    rating,
    reviewCount,
    country,
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
      <img src={img} alt={description} />
      <div className="airbnb-card--stats">
        <img
          src="https://pngfre.com/wp-content/uploads/star-png-image-pngfre-44.png"
          alt="star icon."
        />
        <span>{rating}</span>
        <span className="star--card">({reviewCount}) • </span>
        <span className="star--card">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="airbnb-bold">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
