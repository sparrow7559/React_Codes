import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Viraj");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
