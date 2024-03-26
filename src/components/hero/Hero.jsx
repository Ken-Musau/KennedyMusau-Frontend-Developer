import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="textContainer">
          <h1>
            The Best <br /> Delicious Food
          </h1>
          <p>That meets your needs</p>
        </div>
        <div className="imageContainer">
          <img src="/foodhero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
