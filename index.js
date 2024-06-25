function Spa() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                id: 0,
                name: "Peter Parker",
                email: "peter@mit.edu",
                password: "secret123",
                balance: 1000,
                depositAmount: 0,
                withdrawAmount: 0,
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" exact component={CreateAccount} />
          <Route path="/deposit/" exact component={Deposit} />
          <Route path="/withdraw/" exact component={Withdraw} />
          <Route path="/AllData/" exact component={AllData} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
