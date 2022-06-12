import TradeMain from "./trademain"

function TradePanel() {
  return (
    <>
          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog btc-usdt-modal footer-modal modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Place Order</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="dropdown-menu-btc-usdt btc-usdt-modal-content">
                  <TradeMain/>
                  </div>
                </div>
              </div>
            </div>
          </div>        
          
          <div className="col-lg-4 col-xl d-lg-block d-none place-order-container">
            <div className="row h-100">
              <div className="col-12 section-place-order">
                <div className="row row-place-order">
                  <div className="col-12">
                    <div style={{ fontSize: 17, fontWeight: 500 }}>
                      Place Order
                    </div>
                    <TradeMain/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
    </>)
}

export default TradePanel;