const FetchingDatosPresentacional = ({users, createUser}) => {
  return (
    <div>{users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <button onClick={createUser}>Crear usuario</button>
          </div>
        );
    })}</div>
  )
}

export default FetchingDatosPresentacional