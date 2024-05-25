import React from "react";
import "../Styles/Meme.css";

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

const MemeApi = (): JSX.Element => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState<Meme[]>([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  //console.log(allMemes);
  
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
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

export default MemeApi;
