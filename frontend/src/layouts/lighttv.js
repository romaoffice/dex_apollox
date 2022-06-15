import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const SCRIPT_ID = 'tradingview-widget-script';
const CONTAINER_ID = 'tradingview-widget';

export default class TradingViewWidget extends PureComponent {
  static propTypes = {
    symbol: PropTypes.string.isRequired,
  };

  

  componentDidMount = () => {
    this.appendScript(this.initWidget);
  }

  componentDidUpdate = () => {
    this.cleanWidget();
    this.initWidget();
  };

  canUseDOM = () => !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  appendScript = (onload) => {
    if (!this.canUseDOM()) {
      onload();
      return;
    }

    if (this.scriptExists()) {
      /* global TradingView */
      if (typeof TradingView === 'undefined') {
        this.updateOnloadListener(onload);
        return;
      }
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  getScriptElement = () =>
    document.getElementById(SCRIPT_ID);

  scriptExists = () =>
    this.getScriptElement() !== null;

  updateOnloadListener = (onload) => {
    const script = this.getScriptElement();
    const oldOnload = script.onload;
    return script.onload = () => {
      oldOnload();
      onload();
    };
  };

  initWidget = () => {
    console.log('init mobile')
    /* global TradingView */
    if (typeof TradingView === 'undefined' || !document.getElementById("wdg")) {
      console.log("Not ready.")
      return;
    }
    const { widgetType, ...widgetConfig } = this.props;

    new TradingView.MediumWidget(
    {
    "symbols": [
      [
        "BINANCE:"+widgetConfig.symbol+"|1D"
      ]
      ],
      "chartOnly": true,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": true,
      "showVolume": false,
      "hideDateRanges": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "noTimeScale": false,
      "valuesTracking": "1",
      "chartType": "bars",
      "fontColor": "#787b86",
      "gridLineColor": "rgba(240, 243, 250, 0.06)",
      "upColor": "#22ab94",
      "downColor": "#f7525f",
      "container_id": "wdg"
    })
    
    // /* global TradingView */
    // new TradingView[widgetType](config);
  };

  cleanWidget = () => {
    if (!this.canUseDOM()) return;
    document.getElementById("wdg").innerHTML = '';
  };

  getStyle = () => {
    if (!this.props.autosize) return {};
    return {
      width: '100%',
      height: '100%'
    };
  };

  render = () => <article id="wdg" style={this.getStyle()} />
}