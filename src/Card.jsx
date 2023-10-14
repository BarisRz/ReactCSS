import star from "./assets/star-regular.svg";
function Card() {
  return (
    <>
      <div className="container">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0f/90/cc/0f90ccce-c3c3-93f8-4776-422566d47557/191018104702.jpg/296x296bb.webp"
          alt="album rozes"
        />
        <div className="album">
          <h1>Rozes</h1>
          <h2>Under the Grave</h2>
          <h3>(2016)</h3>
        </div>
        <div className="rating">
          <p>Rate this album</p>
          <div className="etoile">
            <img src={star} alt="etoiles de pour noter l'album" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
