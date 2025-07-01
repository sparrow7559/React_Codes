// import { proptypes } from "prop-types";
function List(props) {
  const category = props.category;
  const itemList = props.items;

  //   fruits.sort((a,b)=>
  //     a.name.localeCompare(b.name);
  //   ) //ALPHABETICAL

  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL

  //   fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
  //   fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

  //   const lowCalFruits = fruits.filter((fruits) => fruits.calories < 50);
  //   const highCalFruits = fruits.filter((fruits) => fruits.calories >= 50);
  //   const listItems = highCalFruits.map((highCalFruits) => (
  //     <li key={highCalFruits.id}>
  //       {highCalFruits.name}: &nbsp;
  //       <b>{highCalFruits.calories}</b>
  //     </li>
  //   ));

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
// List.propTypes = {
//   category: PropTypes.string,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       calories: PropTypes.number,
//     })
//   ),
// };

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
