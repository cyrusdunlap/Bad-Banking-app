function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand lg navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Home Page"
        >
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/CreateAccount/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Create a new account"
              >
                Create Account
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#/deposit/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Deposit Page"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#/withdraw/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Withdraw Page"
              >
                Withdraw
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#/alldata/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="User Data"
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
