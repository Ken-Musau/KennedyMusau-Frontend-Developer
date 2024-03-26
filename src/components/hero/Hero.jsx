import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="textContainer">
          <h1>
            The Best <br /> Delicious Food
          </h1>
          <p>
            Healthy fresh food that meets your needs. At the convenience of your
            fingertips.
          </p>
          <div>
            <button className="btn-cta">ORDER NOW</button>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/foodhero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
