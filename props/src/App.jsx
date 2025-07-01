import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Batman" age="" isStudent={true} />
      <Student name="Flash" age={42} isStudent={false} />
      <Student name="Superman" age={50} isStudent={false} />
      <Student name="Robin" age={30} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
