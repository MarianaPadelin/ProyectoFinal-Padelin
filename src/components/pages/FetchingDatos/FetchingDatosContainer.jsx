import { useState, useEffect } from "react";
import FetchingDatosPresentacional from "./FetchingDatosPresentacional";

const FetchingDatosContainer = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createUser = () => {
    let datosNuevos = {
      name: "mariana",
      userName: "lala",
      email: "lala@gmail.com",
    };

    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(datosNuevos),
    });

    promise
      .then((res) => res.json())
      .then((datosNuevos) => console.log("Se creó nuevo usuario", datosNuevos))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <FetchingDatosPresentacional users={users} createUser={createUser} />
    </div>
  );
};

export default FetchingDatosContainer;
