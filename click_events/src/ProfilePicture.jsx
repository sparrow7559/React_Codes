function ProfilePicture() {
  const imageURL = "./src/assets/unnamed.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageURL} />;
}

export default ProfilePicture;
