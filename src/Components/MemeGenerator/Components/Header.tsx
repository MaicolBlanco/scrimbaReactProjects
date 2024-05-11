import "../Styles/Header.css"

const Header = (): JSX.Element => {
  return(
    <header className="meme-header">
      <img src="../../../../public/img/Logo.png" className="meme-header--image"/>
      <h4 className="meme-header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;