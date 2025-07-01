function Button() {
  //   const handleClick = () => alert("Ouch!");

  //   const handleClick2 = (name) => alert(`${name} stop clicking`);
  let count = 0;
  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} clicked me ${count} time/s`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };

  const handleClick = (e) => {
    e.target.textContent = "ouch";
  };
  return (
    <>
      {/* <button onClick={() => handleClick("Viraj")}>Click Me</button> */}
      <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
      {/* <br /> */}
      {/* <button onClick={() => handleClick2("Viraj")}>Click Me 2</button> */}
    </>
  );
}
export default Button;
