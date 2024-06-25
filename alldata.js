function AllData(props) {
  const ctx = React.useContext(UserContext);
  let users = ctx.users;

  function userInfo(users) {
    return [
      users.name,
      users.email,
      users.balance,
      users.depositAmount,
      users.withdrawAmount,
    ];
  }

  return (
    <>
      {users.map((users) => (
        <Card
          bgcolor="warning"
          txtcolor="black"
          key={users.id}
          header="Account Information"
          allData={userInfo(users)}
        />
      ))}
    </>
  );
}
