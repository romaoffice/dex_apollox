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
            <div className="navbar-desktop">
              <ul className="navbar-nav navbar-nav-desktop desktop-only">
                
                <li className="nav-item nav-item-bnb">
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-bnb"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="img-bsc mr-1"
                        src="./assets/images/bsc-logo.svg"
                      />
                      BNB
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">
                        <img
                          className="img-bsc mr-1"
                          src="./assets/images/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.webp"
                        />
                        Ethereum
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <img
                          className="img-bsc mr-1"
                          src="./assets/images/bsc-logo.svg"
                        />
                        BNB Chain
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item nav-item-connect-wallet">
                  <a className="nav-link btn btn-light btn-connect-wallet" href="#">
                    Connect Wallet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-setting-btn px-0" href="#">
                    <img src="./assets/images/setting.svg" />
                  </a>
                </li>
              </ul>
            </div>
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