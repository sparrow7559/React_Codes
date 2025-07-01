import profilepic from "./assets/unnamed.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="Profile Picture" />
      <h2 className="card-title">Viraj</h2>
      <p className="card-text">Studying Btech</p>
    </div>
  );
}

export default Card;
