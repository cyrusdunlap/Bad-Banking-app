function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  let data = React.useContext(UserContext);
  let dataen = data.users.length;
  let balance = data.users[dataen - 1].balance;
  let name = data.users[dataen - 1].name;

  function validate(amount) {
    if (amount < 0) {
      setStatus("Error: Can't withdraw negative numbers");
      setTimeout(() => setStatus(""), 2000);
      return false;
    }
    if (amount === 0) {
      setStatus("Error: Can't withdraw zero");
      setTimeout(() => setStatus(""), 2000);
      return false;
    }
    if (!amount == isNaN()) {
      setStatus("Error: Not a Number");
      setTimeout(() => setStatus(""), 2000);
      return false;
    }
    if (amount > balance) {
      setStatus("Error: Overdraft not Allowed!");
      setTimeout(() => setStatus(""), 2000);
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    if (!validate(amount, "amount")) return;
    let dep = balance - Number(amount);
    data.users[data.users.length - 1].balance = dep;
    data.users[data.users.length - 1].withdrawAmount = Number(amount);

    setShow(false);
    return;
  };

  function clearForm() {
    setShow(true);
    setIsDisabled(true);
  }

  const handleChange = (event) => {
    setIsDisabled(false);
    setAmount(Number(event.target.value));
  };

  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Withdraw"
      text={name}
      balance={balance}
      status={status}
      body={
        show ? (
          <>
            <br />
            Withdraw
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter Amount"
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h5>Successful Withdraw</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make Another Withdraw
            </button>
          </>
        )
      }
    />
  );
}
