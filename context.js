const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5">
        <div
          className={classes()}
          style={{ minWidth: "18rem", maxWidth: "20rem" }}
        >
          <div className="card-header">{props.header}</div>
          <div className="card-body">
            {props.title && <h5 className="card-title">{props.title}</h5>}
            {props.text && <p className="card-text">{props.text}</p>}
            {props.balance && (
              <h4>
                Balance: ${props.balance}
                <br />
              </h4>
            )}
            {props.body}
            {props.status && (
              <div style={{ color: "red" }} id="createStatus">
                {props.status}
              </div>
            )}
            {props.allData && (
              <>
                Name: {props.allData[0]}
                <br />
                Email: {props.allData[1]}
                <br />
                Balance: ${props.allData[2]}
                <br />
                Deposit Amount: {props.allData[3]}
                <br />
                Withdraw Amount: -{props.allData[4]}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
