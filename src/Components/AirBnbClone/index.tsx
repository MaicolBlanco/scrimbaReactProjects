import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data";
import "./Styles/Card.css";

const AirBnbClone = () => {
  // console.log(data);
  const cards = data.map((item) => {
    // console.log("rating" + card.stats.rating);
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        description={item.description}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
        location={item.location}
      />
    );
  });

  return (
    <div style={{ marginTop: 30 }}>
      <Navbar />
      <Hero />
      {/* <Card
        img={"https://clonebnb-experience.vercel.app/images/katie-zaferes.png"}
        rating={"5.0"}
        reviewCount={6}
        country={"USA"}
        title={"Life Lessons with Katie Zaferes"}
        price={136}
      /> */}
      <section className="airnbn-cards-list">{cards}</section>
      {/* {data.map((item) => (
        <Card
          key={item.id}
          img={item.coverImg}
          description={item.description}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
        />
      ))} */}
    </div>
  );
};

export default AirBnbClone;
