import ConnectWallet from "./connectwallet";
function HeaderDesktop(){

  return (
    <div className="header-desktop">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/bluetidelogoa.png" />
        </a>
        <nav className="navbar navbar-expand-lg bg-light navbar-dark nav-header bg-dark px-0">
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav navbar-nav-desktop d-lg-none d-xl-flex">
              <li className="nav-item cex-dex-item">
                <div className="cex-dex">
                  <button type="button" className="btn btn-cex">
                    CEX
                  </button>
                  <button type="button" className="btn btn-dex">
                    DEX
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Futures
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link spot-new-item" href="#">
                  Spot <span className="spot-new">New</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Grid
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Game
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rewards
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Staking
                  </a>
                  <a className="dropdown-item" href="#">
                    Trade Rewards
                  </a>
                  <a className="dropdown-item" href="#">
                    Leaderboard
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Governance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Staking
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    API Document
                  </a>
                  <a className="dropdown-item" href="#">
                    Guide
                  </a>
                  <a className="dropdown-item" href="#">
                    Audit Report
                  </a>
                  <a className="dropdown-item" href="#">
                    Buy Crypto
                  </a>
                  <a className="dropdown-item" href="#">
                    Broker Program
                  </a>
                  <a className="dropdown-item" href="#">
                    Referral
                  </a>
                  <a className="dropdown-item" href="#">
                    CEX
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="navbar-container">
            <ConnectWallet/>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </div>
  )
}
export default HeaderDesktop;