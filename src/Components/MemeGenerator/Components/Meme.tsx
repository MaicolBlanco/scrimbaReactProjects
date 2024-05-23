import React from "react";
import "../Styles/Meme.css";
import memesData from "./memesData";

const Meme = (): JSX.Element => {
  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    // console.log(memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    setMeme({ ...meme, randomImage: url });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {name ,value} = event.target;
    setMeme({...meme, [name]:value})
    //console.log(meme);
  }

  return (
    <main className="meme-main">
      <div className="meme-form">
        <label className="meme-form--label">
          Top text
          <input
            type="text"
            placeholder="Shut up"
            className="meme-form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
        </label>
        <label className="meme-form--label">
          Bottom text
          <input
            type="text"
            placeholder="And take my money"
            className="meme-form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button className="meme-form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="Imagenes creadas aleatoriamente para memes"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
