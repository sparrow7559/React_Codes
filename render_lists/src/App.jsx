import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "orange", calories: 75 },
    { id: 4, name: "coconut", calories: 25 },
    { id: 5, name: "watermelon", calories: 20 },
  ];
  const coffee = [
    { id: 6, name: "French Press", calories: 10 },
    { id: 7, name: "Origami", calories: 15 },
    { id: 8, name: "Chemex", calories: 7.5 },
    { id: 9, name: "Moka Pot", calories: 30 },
    { id: 10, name: "kittle", calories: 14 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {/* {coffee.length > 0 && <List items={coffee} category=" " />} */}
      {coffee.length > 0 && <List items={coffee} category="Coffee" />}
    </>
  );
}

export default App;
