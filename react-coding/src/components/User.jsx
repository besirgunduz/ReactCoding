function User({ name, surname, isLoggedIn, age, friends }) {
  return (
    <div>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız"}</h1>
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
}

export default User;
