import ConnectWallet from "./connectwallet";

function HeaderMobile(){

  return (
    <div className="header-mobile">
    <nav className="navbar navbar-expand-lg bg-light navbar-dark nav-header bg-dark">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/bluetidelogoa-1.png" />
        </a>
        <div className="navbar-mobile">
          <ConnectWallet/>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav navbar-nav-desktop">
          <li className="nav-item cex-dex-item">
            <div className="cex-dex w-100">
              <button type="button" className="btn btn-cex btn-block">
                CEX
              </button>
              <button type="button" className="btn btn-dex btn-block">
                DEX
              </button>
            </div>
          </li>
          <li className="nav-item item-border-top">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/api-document.svg"
                className="img-mobile-dropdown mr-2"
              />
              API Document
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link spot-new-item" href="#">
              <img
                src="./assets/images/guide.svg"
                className="img-mobile-dropdown mr-2"
              />
              Guide
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/guide.svg"
                className="img-mobile-dropdown mr-2"
              />
              Audit Report
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown">
              <img
                src="./assets/images/buy-crypto.svg"
                className="img-mobile-dropdown mr-2"
              />
              Buy Crypto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/broker-program.svg"
                className="img-mobile-dropdown mr-2"
              />
              Broker Program
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/referral.svg"
                className="img-mobile-dropdown mr-2"
              />
              Referral
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/cex.svg"
                className="img-mobile-dropdown mr-2"
              />
              CEX
            </a>
          </li>
          <li className="nav-item item-border-top">
            <a className="nav-link" href="#">
              <img
                src="./assets/images/english.svg"
                className="img-mobile-dropdown mr-2"
              />
              English
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}
export default HeaderMobile;