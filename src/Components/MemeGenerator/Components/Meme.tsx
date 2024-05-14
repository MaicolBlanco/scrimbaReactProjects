import React from "react";
import "../Styles/Meme.css";
import memesData from "./memesData";

const Meme = (): JSX.Element => {
  const [memeImage, setMemeImage] = React.useState("");

  const handleClick = () => {
    const memesArray = memesData.data.memes;
    // console.log(memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // console.log(randomNumber);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main className="meme-main">
      <div className="meme-form">
        <label className="meme-form--label">
          Top text
          <input
            type="text"
            placeholder="Shut up"
            className="meme-form--input"
          />
        </label>
        <label className="meme-form--label">
          Bottom text
          <input
            type="text"
            placeholder="And take my money"
            className="meme-form--input"
          />
        </label>
        <button className="meme-form--button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="Imagenes creadas aleatoriamente para memes" className="meme-meme--image" />
    </main>
  );
};

export default Meme;
