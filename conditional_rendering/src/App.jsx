import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Viraj" />
      <UserGreeting isLoggedIn={false} username="Vir" />
      <UserGreeting />
    </>
  );
}

export default App;
