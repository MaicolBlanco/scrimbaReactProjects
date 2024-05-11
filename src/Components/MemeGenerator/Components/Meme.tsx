import "../Styles/Meme.css";

const Meme = (): JSX.Element => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <main className="meme-main">
      <form className="meme-form">
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
      </form>
      <button className="meme-form--button" onClick={handleClick}>
        Get a new meme image 🖼
      </button>
    </main>
  );
};

export default Meme;
