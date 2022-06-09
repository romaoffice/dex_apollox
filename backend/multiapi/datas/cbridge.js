exports.BRIDGEPAIR = ["WETH","USDC","USDT"];

exports.CBRDIGEADDRESS = {
  "1":"0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
  "56":"0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
  "137":"0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
  "42161":"0x1619DE6B6B20eD217a58d00f37B9d47C7663feca",
  "43114":"0xef3c714c9425a8F3697A9C969Dc1af30ba82e5d4"
}
exports.chainRPC = {
  "1":"https://api.mycryptoapi.com/eth",
  "56":"https://bsc-dataseed.binance.org/",
  "137":"https://polygon-rpc.com",
  "42161":"https://arb1.arbitrum.io/rpc",
  "43114":"https://api.avax.network/ext/bc/C/rpc"
}
exports.CBRIDGETOKENS = {
  "err": null,
  "chains": [
    {
      "id": 1,
      "name": "Ethereum Mainnet",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/ETH.png",
      "block_delay": 8,
      "gas_token_symbol": "ETH",
      "explore_url": "https://etherscan.io/",
      "contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 5
    },
    {
      "id": 10,
      "name": "Optimism",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/OP.png",
      "block_delay": 1,
      "gas_token_symbol": "ETH",
      "explore_url": "https://optimistic.etherscan.io/",
      "contract_addr": "0x9D39Fc627A6d9d9F8C831c16995b209548cc3401",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 44,
      "name": "Crab Smart Chain",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/crab.png",
      "block_delay": 8,
      "gas_token_symbol": "CRAB",
      "explore_url": "https://subview.xyz/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 56,
      "name": "BNB Chain",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/BNB-chain.png",
      "block_delay": 20,
      "gas_token_symbol": "BNB",
      "explore_url": "https://bscscan.com/",
      "contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0.2
    },
    {
      "id": 128,
      "name": "Heco",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/heco.png",
      "block_delay": 12,
      "gas_token_symbol": "HT",
      "explore_url": "https://hecoinfo.com/",
      "contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 137,
      "name": "Polygon",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Polygon.png",
      "block_delay": 120,
      "gas_token_symbol": "MATIC",
      "explore_url": "https://polygonscan.com/",
      "contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 250,
      "name": "Fantom",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Fantom.png",
      "block_delay": 30,
      "gas_token_symbol": "FTM",
      "explore_url": "https://ftmscan.com/",
      "contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 288,
      "name": "Boba Network",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/boba.png",
      "block_delay": 1,
      "gas_token_symbol": "ETH",
      "explore_url": "https://blockexplorer.boba.network/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 336,
      "name": "Shiden",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/shiden.png",
      "block_delay": 6,
      "gas_token_symbol": "SDN",
      "explore_url": "https://shiden.subscan.io/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 592,
      "name": "Astar",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Astar.png",
      "block_delay": 6,
      "gas_token_symbol": "ASTR",
      "explore_url": "https://blockscout.com/astar/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "5000000000000000",
      "drop_gas_cost_amt": "21000000000000",
      "drop_gas_balance_alert": "500000000000000000",
      "suggested_gas_cost": "129568",
      "flat_usd_fee": 0
    },
    {
      "id": 1088,
      "name": "Metis Mainnet",
      "icon": "https://get.celer.app/cbridge-icons/metis.png",
      "block_delay": 1,
      "gas_token_symbol": "Metis",
      "explore_url": "https://andromeda-explorer.metis.io/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 1284,
      "name": "Moonbeam",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/moonbeam.png",
      "block_delay": 6,
      "gas_token_symbol": "GLMR",
      "explore_url": "https://moonbeam.moonscan.io/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "40000000000000000",
      "drop_gas_cost_amt": "2100000000000000",
      "drop_gas_balance_alert": "1000000000000000000",
      "suggested_gas_cost": "129579",
      "flat_usd_fee": 0
    },
    {
      "id": 1285,
      "name": "Moonriver",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/moonriver.png",
      "block_delay": 6,
      "gas_token_symbol": "MOVR",
      "explore_url": "https://moonriver.moonscan.io/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "2000000000000000",
      "drop_gas_cost_amt": "21000000000000",
      "drop_gas_balance_alert": "500000000000000000",
      "suggested_gas_cost": "129579",
      "flat_usd_fee": 0
    },
    {
      "id": 42161,
      "name": "Arbitrum",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/arbitrum.png",
      "block_delay": 1,
      "gas_token_symbol": "ETH",
      "explore_url": "https://arbiscan.io/",
      "contract_addr": "0x1619DE6B6B20eD217a58d00f37B9d47C7663feca",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 43114,
      "name": "Avalanche",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Avalanche.png",
      "block_delay": 15,
      "gas_token_symbol": "AVAX",
      "explore_url": "https://snowtrace.io/",
      "contract_addr": "0xef3c714c9425a8F3697A9C969Dc1af30ba82e5d4",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 1313161554,
      "name": "Aurora",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Aurora.png",
      "block_delay": 30,
      "gas_token_symbol": "AETH",
      "explore_url": "https://explorer.mainnet.aurora.dev/",
      "contract_addr": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
      "drop_gas_amt": "0",
      "drop_gas_cost_amt": "0",
      "drop_gas_balance_alert": "0",
      "suggested_gas_cost": "0",
      "flat_usd_fee": 0
    },
    {
      "id": 1666600000,
      "name": "Harmony",
      "icon": "https://get.celer.app/cbridge-icons/chain-icon/Harmony.png",
      "block_delay": 15,
      "gas_token_symbol": "ONE",
      "explore_url": "https://explorer.harmony.one/",
      "contract_addr": "0x78a21C1D3ED53A82d4247b9Ee5bF001f4620Ceec",
      "drop_gas_amt": "100000000000000000",
      "drop_gas_cost_amt": "210000000000000",
      "drop_gas_balance_alert": "10000000000000000000",
      "suggested_gas_cost": "157019",
      "flat_usd_fee": 0
    }
  ],
  "chain_token": {
    "1": {
      "token": [
        {
          "token": {
            "symbol": "ANML",
            "address": "0x38B0e3A59183814957D83dF2a97492AED1F003e2",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Animal Concerts Token",
          "icon": "https://get.celer.app/cbridge-icons/ANML.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BMI",
            "address": "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Bridge Mutual",
          "icon": "https://get.celer.app/cbridge-icons/BMI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BOBA",
            "address": "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Boba Token",
          "icon": "https://get.celer.app/cbridge-icons/chain-icon/boba.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BUSD",
            "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Binance USD",
          "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "CEC",
            "address": "0x9e564eb5550E1A9b1448D916fd85a8d876661bdC",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Chemix Ecosystem Coin",
          "icon": "https://get.celer.app/cbridge-icons/CEC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DF",
            "address": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce",
          "icon": "https://get.celer.app/cbridge-icons/DF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DODO",
            "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "DODO Bird",
          "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "EUX",
            "address": "0xb986F3a2d91d3704Dc974A24FB735dCc5E3C1E70",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce EUR",
          "icon": "https://get.celer.app/cbridge-icons/EUX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "GOVI",
            "address": "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "CVI Finance",
          "icon": "https://get.celer.app/cbridge-icons/GOVI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "HUH",
            "address": "0x86D49fbD3B6f989d641E700a15599d3b165002AB",
            "decimal": 9,
            "xfer_disabled": false
          },
          "name": "HUH Token",
          "icon": "https://get.celer.app/cbridge-icons/HUH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "IMX",
            "address": "0x7b35Ce522CB72e4077BaeB96Cb923A5529764a00",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPEG",
            "address": "0x4BFcE5A1aCC3B847AFa9579bA91DA33b08e66fb7",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPEG",
          "icon": "https://get.celer.app/cbridge-icons/JPEG.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "KROM",
            "address": "0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Kromatika",
          "icon": "https://get.celer.app/cbridge-icons/KROM.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "LYRA",
            "address": "0x01BA67AAC7f75f647D94220Cc98FB30FCc5105Bf",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Lyra Token",
          "icon": "https://get.celer.app/cbridge-icons/LYRA.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "MASK",
            "address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Mask Network",
          "icon": "https://get.celer.app/cbridge-icons/MASK.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "MCB",
            "address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "MCDEX Token",
          "icon": "https://get.celer.app/cbridge-icons/MCB.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "Metis",
            "address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Metis",
          "icon": "https://get.celer.app/cbridge-icons/metis.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ONSTON",
            "address": "0x47b9F01B16E9C9cb99191DCA68c9cc5bF6403957",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Onston",
          "icon": "https://get.celer.app/cbridge-icons/ONSTON.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERL",
            "address": "0xeca82185adCE47f39c684352B0439f030f860318",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "PERL.eco",
          "icon": "https://get.celer.app/cbridge-icons/PERL.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERP",
            "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Perpetual Protocol",
          "icon": "https://get.celer.app/cbridge-icons/PERP.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "REEF",
            "address": "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Reef Finance",
          "icon": "https://get.celer.app/cbridge-icons/REEF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "RING",
            "address": "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Darwinia Native Token",
          "icon": "https://get.celer.app/cbridge-icons/RING.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "SHI",
            "address": "0xaD996A45fd2373ed0B10Efa4A8eCB9de445A4302",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Shirtum",
          "icon": "https://get.celer.app/cbridge-icons/SHI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "STND",
            "address": "0x9040e237C3bF18347bb00957Dc22167D0f2b999d",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Standard Protocol",
          "icon": "https://get.celer.app/cbridge-icons/STND.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "THALES",
            "address": "0x8947da500Eb47F82df21143D0C01A29862a8C3c5",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Thales",
          "icon": "https://get.celer.app/cbridge-icons/THALES.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "TORN",
            "address": "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Tornado Cash",
          "icon": "https://get.celer.app/cbridge-icons/TORN.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USX",
            "address": "0x0a5E677a6A24b2F1A2Bf4F3bFfC443231d2fDEc8",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce USD",
          "icon": "https://get.celer.app/cbridge-icons/USX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "XTK",
            "address": "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "xToken",
          "icon": "https://get.celer.app/cbridge-icons/XTK.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iUSD",
            "address": "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "iZUMi Bond USD",
          "icon": "https://get.celer.app/cbridge-icons/iUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iZi",
            "address": "0x9ad37205d608B8b219e6a2573f922094CEc5c200",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Izumi Finance",
          "icon": "https://get.celer.app/cbridge-icons/IZI.png",
          "inbound_lmt": ""
        }
      ]
    },
    "10": {
      "token": [
        {
          "token": {
            "symbol": "DF",
            "address": "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce",
          "icon": "https://get.celer.app/cbridge-icons/DF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "KROM",
            "address": "0xF98dCd95217E15E05d8638da4c91125E59590B07",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Kromatika",
          "icon": "https://get.celer.app/cbridge-icons/KROM.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "LYRA",
            "address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Lyra Token",
          "icon": "https://get.celer.app/cbridge-icons/LYRA.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERP",
            "address": "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Perpetual Protocol",
          "icon": "https://get.celer.app/cbridge-icons/PERP.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "THALES",
            "address": "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Thales",
          "icon": "https://get.celer.app/cbridge-icons/THALES.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USX",
            "address": "0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce USD",
          "icon": "https://get.celer.app/cbridge-icons/USX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x4200000000000000000000000000000000000006",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        }
      ]
    },
    "44": {
      "token": [
        {
          "token": {
            "symbol": "RING",
            "address": "0x7399Ea6C9d35124d893B8d9808930e9d3F211501",
            "decimal": 9,
            "xfer_disabled": false
          },
          "name": "Darwinia Native Token",
          "icon": "https://get.celer.app/cbridge-icons/RING.png",
          "inbound_lmt": ""
        }
      ]
    },
    "56": {
      "token": [
        {
          "token": {
            "symbol": "ANML",
            "address": "0x06FDA0758c17416726f77Cb11305EAC94C074Ec0",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Animal Concerts Token",
          "icon": "https://get.celer.app/cbridge-icons/ANML.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ASVA",
            "address": "0xF7b6d7E3434cB9441982F9534E6998C43eEF144a",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Asva Finance",
          "icon": "https://get.celer.app/cbridge-icons/ASVA.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BMI",
            "address": "0x3e1b4Ff4AE3Ab8f0Cb40a34a6ad3fC817F7dA2b6",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Bridge Mutual",
          "icon": "https://get.celer.app/cbridge-icons/BMI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BUSD",
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Binance USD",
          "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "CEC",
            "address": "0x957c49A76b3e008637cA1Cce23188A8cE884911e",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Chemix Ecosystem Coin",
          "icon": "https://get.celer.app/cbridge-icons/CEC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DF",
            "address": "0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce",
          "icon": "https://get.celer.app/cbridge-icons/DF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DODO",
            "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "DODO Bird",
          "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DOMI",
            "address": "0xBBCA42c60b5290F2c48871A596492F93fF0Ddc82",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Domi",
          "icon": "https://get.celer.app/cbridge-icons/Domi.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "EUX",
            "address": "0x367c17D19fCd0f7746764455497D63c8e8b2BbA3",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce EUR",
          "icon": "https://get.celer.app/cbridge-icons/EUX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "HUH",
            "address": "0xc15e89f2149bCC0cBd5FB204C9e77fe878f1e9b2",
            "decimal": 9,
            "xfer_disabled": false
          },
          "name": "HUH Token",
          "icon": "https://get.celer.app/cbridge-icons/HUH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPEG",
            "address": "0x4BFcE5A1aCC3B847AFa9579bA91DA33b08e66fb7",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPEG",
          "icon": "https://get.celer.app/cbridge-icons/JPEG.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "MASK",
            "address": "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Mask Network",
          "icon": "https://get.celer.app/cbridge-icons/MASK.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "MCB",
            "address": "0x5fE80d2CD054645b9419657d3d10d26391780A7B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "MCDEX Token",
          "icon": "https://get.celer.app/cbridge-icons/MCB.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERL",
            "address": "0x0F9E4D49f25de22c2202aF916B681FBB3790497B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "PERL.eco",
          "icon": "https://get.celer.app/cbridge-icons/PERL.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERP",
            "address": "0x4e7f408be2d4E9D60F49A64B89Bb619c84C7c6F5",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Perpetual Protocol",
          "icon": "https://get.celer.app/cbridge-icons/PERP.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "REEF",
            "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Reef Finance",
          "icon": "https://get.celer.app/cbridge-icons/REEF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "SHI",
            "address": "0x7269d98Af4aA705e0B1A5D8512FadB4d45817d5a",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Shirtum",
          "icon": "https://get.celer.app/cbridge-icons/SHI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "TORN",
            "address": "0x1bA8D3C4c219B124d351F603060663BD1bcd9bbF",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Tornado Cash",
          "icon": "https://get.celer.app/cbridge-icons/TORN.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Binance-Peg USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0x55d398326f99059fF775485246999027B3197955",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Binance-Peg BSC-USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USX",
            "address": "0xB5102CeE1528Ce2C760893034A4603663495fD72",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce USD",
          "icon": "https://get.celer.app/cbridge-icons/USX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Binance-Peg Ethereum Token",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iUSD",
            "address": "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "iZUMi Bond USD",
          "icon": "https://get.celer.app/cbridge-icons/iUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iZi",
            "address": "0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Izumi Finance",
          "icon": "https://get.celer.app/cbridge-icons/IZI.png",
          "inbound_lmt": ""
        }
      ]
    },
    "128": {
      "token": [
        {
          "token": {
            "symbol": "RING",
            "address": "0x15e65456310ecb216B51EfBd8a1dBf753353DcF9",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Darwinia Native Token",
          "icon": "https://get.celer.app/cbridge-icons/RING.png",
          "inbound_lmt": ""
        }
      ]
    },
    "137": {
      "token": [
        {
          "token": {
            "symbol": "ANML",
            "address": "0xEcc4176B90613Ed78185f01bd1E42C5640C4F09d",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Animal Concerts Token",
          "icon": "https://get.celer.app/cbridge-icons/ANML.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ASVA",
            "address": "0xE7E0bA6f84D843d17Cb8410810Bf3E8Bcda0caA1",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Asva Finance",
          "icon": "https://get.celer.app/cbridge-icons/ASVA.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "BMI",
            "address": "0x3e1b4Ff4AE3Ab8f0Cb40a34a6ad3fC817F7dA2b6",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Bridge Mutual",
          "icon": "https://get.celer.app/cbridge-icons/BMI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DF",
            "address": "0x08C15FA26E519A78a666D19CE5C646D55047e0a3",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce",
          "icon": "https://get.celer.app/cbridge-icons/DF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ESW",
            "address": "0xd2A2a353D28e4833FAFfC882f6649c9c884a7D8f",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "EmiSwap",
          "icon": "https://get.celer.app/cbridge-icons/ESW.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "EUX",
            "address": "0x448BBbDB706cD0a6AB74fA3d1157e7A33Dd3A4a8",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce EUR",
          "icon": "https://get.celer.app/cbridge-icons/EUX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "GOVI",
            "address": "0x43Df9c0a1156c96cEa98737b511ac89D0e2A1F46",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "CVI Finance",
          "icon": "https://get.celer.app/cbridge-icons/GOVI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "HUH",
            "address": "0x08648471B5AAd25fEEeb853d6829048f3Fc37786",
            "decimal": 9,
            "xfer_disabled": false
          },
          "name": "HUH Token",
          "icon": "https://get.celer.app/cbridge-icons/HUH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "IMX",
            "address": "0x60bB3D364B765C497C8cE50AE0Ae3f0882c5bD05",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPYC",
            "address": "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPY Coin",
          "icon": "https://get.celer.app/cbridge-icons/JPYC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "KROM",
            "address": "0x14Af1F2f02DCcB1e43402339099A05a5E363b83c",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Kromatika",
          "icon": "https://get.celer.app/cbridge-icons/KROM.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ONSTON",
            "address": "0xA4Ce4a467E51aEfEc683a649C3F14427f104667f",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Onston",
          "icon": "https://get.celer.app/cbridge-icons/ONSTON.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "RING",
            "address": "0x9C1C23E60B72Bc88a043bf64aFdb16A02540Ae8f",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Darwinia Native Token",
          "icon": "https://get.celer.app/cbridge-icons/RING.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "THALES",
            "address": "0x692C44990E4F408ba0917f5c78A83160c1557237",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Thales",
          "icon": "https://get.celer.app/cbridge-icons/THALES.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USX",
            "address": "0xCf66EB3D546F0415b368d98A95EAF56DeD7aA752",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce USD",
          "icon": "https://get.celer.app/cbridge-icons/USX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iUSD",
            "address": "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "iZUMi Bond USD",
          "icon": "https://get.celer.app/cbridge-icons/iUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iZi",
            "address": "0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Izumi Finance",
          "icon": "https://get.celer.app/cbridge-icons/IZI.png",
          "inbound_lmt": ""
        }
      ]
    },
    "250": {
      "token": [
        {
          "token": {
            "symbol": "IMX",
            "address": "0xeA38F1CCF77Bf43F352636241b05dd8f6F5f52B2",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Frapped USDT",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x74b23882a30290451A17c44f4F05243b6b58C76d",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        }
      ]
    },
    "288": {
      "token": [
        {
          "token": {
            "symbol": "BOBA",
            "address": "0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Boba Token",
          "icon": "https://get.celer.app/cbridge-icons/chain-icon/boba.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        }
      ]
    },
    "336": {
      "token": [
        {
          "token": {
            "symbol": "ESW",
            "address": "0xb4BcA5955F26d2fA6B57842655d7aCf2380Ac854",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "EmiSwap",
          "icon": "https://get.celer.app/cbridge-icons/ESW.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PKEX",
            "address": "0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "PolkaEx",
          "icon": "https://get.celer.app/cbridge-icons/PKEX.png",
          "inbound_lmt": ""
        }
      ]
    },
    "592": {
      "token": [
        {
          "token": {
            "symbol": "ESW",
            "address": "0xb361DAD0Cc1a03404b650A69d9a5ADB5aF8A531F",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "EmiSwap",
          "icon": "https://get.celer.app/cbridge-icons/ESW.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPYC",
            "address": "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPY Coin",
          "icon": "https://get.celer.app/cbridge-icons/JPYC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PKEX",
            "address": "0x1fE622E91e54D6AD00B01917351Ea6081426764A",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "PolkaEx",
          "icon": "https://get.celer.app/cbridge-icons/PKEX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        }
      ]
    },
    "1088": {
      "token": [
        {
          "token": {
            "symbol": "Metis",
            "address": "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Metis",
          "icon": "https://get.celer.app/cbridge-icons/metis.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "STND",
            "address": "0xc12caC7090baa48Ec750CceeC57C80768F6ee58E",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Standard Protocol",
          "icon": "https://get.celer.app/cbridge-icons/STND.png",
          "inbound_lmt": ""
        }
      ]
    },
    "1284": {
      "token": [
        {
          "token": {
            "symbol": "ZLK",
            "address": "0x3Fd9b6C9A24E09F67b7b706d72864aEbb439100C",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Zenlink Network Token",
          "icon": "https://get.celer.app/cbridge-icons/ZLK.png",
          "inbound_lmt": ""
        }
      ]
    },
    "1285": {
      "token": [
        {
          "token": {
            "symbol": "IMX",
            "address": "0x900f1Ec5819FA087d368877cD03B265Bf1802667",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ZLK",
            "address": "0x0f47ba9d9Bde3442b42175e51d6A367928A1173B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Zenlink Network Token",
          "icon": "https://get.celer.app/cbridge-icons/ZLK.png",
          "inbound_lmt": ""
        }
      ]
    },
    "42161": {
      "token": [
        {
          "token": {
            "symbol": "DF",
            "address": "0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce",
          "icon": "https://get.celer.app/cbridge-icons/DF.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "DODO",
            "address": "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "DODO Bird",
          "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "EUX",
            "address": "0xC2125882318d04D266720B598d620f28222F3ABd",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce EUR",
          "icon": "https://get.celer.app/cbridge-icons/EUX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "GOVI",
            "address": "0x07E49d5dE43DDA6162Fa28D24d5935C151875283",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "CVI Finance",
          "icon": "https://get.celer.app/cbridge-icons/GOVI.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "IMX",
            "address": "0x9c67eE39e3C4954396b9142010653F17257dd39C",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "KROM",
            "address": "0x55fF62567f09906A85183b866dF84bf599a4bf70",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Kromatika",
          "icon": "https://get.celer.app/cbridge-icons/KROM.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "MCB",
            "address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "MCDEX Token",
          "icon": "https://get.celer.app/cbridge-icons/MCB.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "PERP",
            "address": "0x753D224bCf9AAFaCD81558c32341416df61D3DAC",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Perpetual Protocol",
          "icon": "https://get.celer.app/cbridge-icons/PERP.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USX",
            "address": "0x641441c631e2F909700d2f41FD87F0aA6A6b4EDb",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "dForce USD",
          "icon": "https://get.celer.app/cbridge-icons/USX.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "XTK",
            "address": "0xF0A5717Ec0883eE56438932b0fe4A20822735fBa",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "xToken",
          "icon": "https://get.celer.app/cbridge-icons/XTK.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iUSD",
            "address": "0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "iZUMi Bond USD",
          "icon": "https://get.celer.app/cbridge-icons/iUSD.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "iZi",
            "address": "0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Izumi Finance",
          "icon": "https://get.celer.app/cbridge-icons/IZI.png",
          "inbound_lmt": ""
        }
      ]
    },
    "43114": {
      "token": [
        {
          "token": {
            "symbol": "DOMI",
            "address": "0xFc6Da929c031162841370af240dEc19099861d3B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Domi",
          "icon": "https://get.celer.app/cbridge-icons/Domi.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "IMX",
            "address": "0xeA6887e4a9CdA1B77E70129E5Fba830CdB5cdDef",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Impermax",
          "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPEG",
            "address": "0x6241af3817Db48a7F9E19FD9446d78E50936d275",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPEG",
          "icon": "https://get.celer.app/cbridge-icons/JPEG.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "JPYC",
            "address": "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "JPY Coin",
          "icon": "https://get.celer.app/cbridge-icons/JPYC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "ONSTON",
            "address": "0x72BC9D71dd9ad563F52270C6ce5FB30F617C7a1d",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Onston",
          "icon": "https://get.celer.app/cbridge-icons/ONSTON.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Wrapped ETH",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WOO",
            "address": "0xaBC9547B534519fF73921b1FBA6E672b5f58D083",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "WOO Network",
          "icon": "https://get.celer.app/cbridge-icons/WOO.png",
          "inbound_lmt": ""
        }
      ]
    },
    "1313161554": {
      "token": [
        {
          "token": {
            "symbol": "ESW",
            "address": "0xd2Fa7C9386040f260e3Ec934601982aD4Cd7902B",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "EmiSwap",
          "icon": "https://get.celer.app/cbridge-icons/ESW.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "USDC",
            "address": "0xB12BFcA5A55806AaF64E99521918A4bf0fC40802",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": "3000000000000"
        },
        {
          "token": {
            "symbol": "USDT",
            "address": "0x4988a896b1227218e4A686fdE5EabdcAbd91571f",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "Tether USD",
          "icon": "https://get.celer.app/cbridge-icons/USDT.png",
          "inbound_lmt": "3000000000000"
        }
      ]
    },
    "1666600000": {
      "token": [
        {
          "token": {
            "symbol": "USDC",
            "address": "0x985458E523dB3d53125813eD68c274899e9DfAb4",
            "decimal": 6,
            "xfer_disabled": false
          },
          "name": "USD Coin",
          "icon": "https://get.celer.app/cbridge-icons/USDC.png",
          "inbound_lmt": ""
        },
        {
          "token": {
            "symbol": "WETH",
            "address": "0x6983D1E6DEf3690C4d616b13597A09e6193EA013",
            "decimal": 18,
            "xfer_disabled": false
          },
          "name": "Ethereum Token",
          "icon": "https://get.celer.app/cbridge-icons/ETH.png",
          "inbound_lmt": ""
        }
      ]
    }
  },
  "farming_reward_contract_addr": "0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41",
  "pegged_pair_configs": [
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 10,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xea129aE043C4cB73DcB241AAA074F9E667641BA0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41",
      "canonical_token_contract_addr": "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 10,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x1619DE6B6B20eD217a58d00f37B9d47C7663feca",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41",
      "canonical_token_contract_addr": "0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 44,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 44,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "AKRO",
          "address": "0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Akropolis",
        "icon": "https://get.celer.app/cbridge-icons/AKRO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "AKRO",
          "address": "0x426C58f0A9733d874D9962Ed59F529478771751c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Akropolis",
        "icon": "https://get.celer.app/cbridge-icons/AKRO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "ANML",
          "address": "0x38B0e3A59183814957D83dF2a97492AED1F003e2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Animal Concerts Token",
        "icon": "https://get.celer.app/cbridge-icons/ANML.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "ANML",
          "address": "0x06FDA0758c17416726f77Cb11305EAC94C074Ec0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Animal Concerts Token",
        "icon": "https://get.celer.app/cbridge-icons/ANML.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "AVG",
          "address": "0xa41F142b6eb2b164f8164CAE0716892Ce02f311f",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avocado DAO Token",
        "icon": "https://get.celer.app/cbridge-icons/AVG.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "AVG",
          "address": "0xa41F142b6eb2b164f8164CAE0716892Ce02f311f",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avocado DAO Token",
        "icon": "https://get.celer.app/cbridge-icons/AVG.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DOMI",
          "address": "0x45C2F8c9B4c0bDC76200448cc26C48ab6ffef83F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Domi",
        "icon": "https://get.celer.app/cbridge-icons/Domi.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "DOMI",
          "address": "0xBBCA42c60b5290F2c48871A596492F93fF0Ddc82",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Domi",
        "icon": "https://get.celer.app/cbridge-icons/Domi.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DTR",
          "address": "0xAdc87836554E9B3aA207A37F3d86b45792edE9E6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DOTORI",
        "icon": "https://get.celer.app/cbridge-icons/DTR.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "DTR",
          "address": "0x79D1041327D8b2c13154831e8916594e25b9c4e0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DOTORI",
        "icon": "https://get.celer.app/cbridge-icons/DTR.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xB5df797468E6e8f2Cb293Cd6e32939366e0F8733",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0xFC27e5d3fBdFcE33fE3226d368b75E59e9CdcA7E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "0xe48A3d7d0Bc88d552f730B62c006bC925eadB9eE",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "GHX",
          "address": "0x728f30fa2f100742C7949D1961804FA8E0B1387d",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "GamerCoin",
        "icon": "https://get.celer.app/cbridge-icons/GHX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "GHX",
          "address": "0xbd7B8e4de08D9b01938F7FF2058F110ee1E0E8d4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "GamerCoin",
        "icon": "https://get.celer.app/cbridge-icons/GHX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0x181002D60d504d30a39601Ae13Af3191cb102580",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "MELOS",
          "address": "0x1afb69DBC9f54d08DAB1bD3436F8Da1af819E647",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Melos Studio",
        "icon": "https://get.celer.app/cbridge-icons/MELOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "MELOS",
          "address": "0x3CC194Cb21E3B9d86dD516b4d870B82fAfb4C02E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Melos Studio",
        "icon": "https://get.celer.app/cbridge-icons/MELOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "MGH",
          "address": "0x8765b1A0eb57ca49bE7EACD35b24A574D0203656",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MetaGameHub",
        "icon": "https://get.celer.app/cbridge-icons/MGH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "MGH",
          "address": "0x318dA5dcDB9Cb8638ed5d1824dB7Ab042Fc641AD",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MetaGameHub",
        "icon": "https://get.celer.app/cbridge-icons/MGH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "MSU",
          "address": "0xdfD8D604951eBF1b2297285F1B68de140C43992b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Metasens Universal Unit",
        "icon": "https://get.celer.app/cbridge-icons/MSU.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "MSU",
          "address": "0xD6705C0740E6002cE196B08129b2F0f23F24722E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Metasens Universal Unit",
        "icon": "https://get.celer.app/cbridge-icons/MSU.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "OOKI",
          "address": "0x0De05F6447ab4D22c8827449EE4bA2D5C288379B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Ooki",
        "icon": "https://get.celer.app/cbridge-icons/OOKI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "OOKI",
          "address": "0xa5a6817ac4c164F27df3254B71fE83904B1C3c3e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Ooki",
        "icon": "https://get.celer.app/cbridge-icons/OOKI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PBR",
          "address": "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PolkaBridge",
        "icon": "https://get.celer.app/cbridge-icons/PBR.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "PBR",
          "address": "0x92f97bea4Aca122C6459889602fF4DD84E5fcCD4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PolkaBridge",
        "icon": "https://get.celer.app/cbridge-icons/PBR.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x1305b25842778041c4ae0c9e7C264A617c619FD4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PSP",
          "address": "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ParaSwap",
        "icon": "https://get.celer.app/cbridge-icons/PSP.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "PSP",
          "address": "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ParaSwap",
        "icon": "https://get.celer.app/cbridge-icons/PSP.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0xBcC128D5221b518e50a1823d374310bDF404f867",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "UCG",
          "address": "0x7D92a06808B4c4833623F809218ed403e4A85FE1",
          "decimal": 0,
          "xfer_disabled": false
        },
        "name": "Universe Crystal Gene",
        "icon": "https://get.celer.app/cbridge-icons/UCG.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "UCG",
          "address": "0xFef17032D5E87523ACeBFDE6B3A8978B2BEdaD1f",
          "decimal": 0,
          "xfer_disabled": false
        },
        "name": "Universe Crystal Gene",
        "icon": "https://get.celer.app/cbridge-icons/UCG.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "oneDODO",
          "address": "0xcA37530E7c5968627BE470081d1C993eb1dEaf90",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "oneDODO",
        "icon": "https://get.celer.app/cbridge-icons/oneDODO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "oneDODO",
          "address": "0x2C30B4cB4b3001afa5b8c43c5a7CA548067562A0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "oneDODO",
        "icon": "https://get.celer.app/cbridge-icons/oneDODO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x8D982783040e3ccC0C04cC7B88B9637ce7286C50",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x86c28C9a6f2DC3C156AA2ad450F0F9d3A5Dec12e",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 66,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0xA354846BB4379E581F47814928073778Ed03d48A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x48284Eb583a1F3058F4BCe0a685D44FE29d4539e",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 66,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x48284Eb583a1F3058F4BCe0a685D44FE29d4539e",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 100,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd4c058380D268d85bC7c758072f561e8f2dB5975",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 100,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0xD606367757BC5E35F53e616EA50F3103Ef6b8498",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xd4c058380D268d85bC7c758072f561e8f2dB5975",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 128,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x3bbaDFf9aeee4a74D3Cf6da05C30868C9Ff85BB8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 128,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x9D39Fc627A6d9d9F8C831c16995b209548cc3401",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DEVT",
          "address": "0xB5c578947de0fd71303F71F2C3d41767438bD0de",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DeHorizon",
        "icon": "https://get.celer.app/cbridge-icons/DEVT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "DEVT",
          "address": "0x17D9dd3F1f1E2E5F723edd26Ebc14d042A4125b0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DeHorizon",
        "icon": "https://get.celer.app/cbridge-icons/DEVT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x2A98D03d1A593F0f3E0AA7c17B24fca68302051e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "0x1a3acf6D19267E2d3e7f898f42803e90C9219062",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "GEL",
          "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Gelato Network Token",
        "icon": "https://get.celer.app/cbridge-icons/GEL.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "GEL",
          "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Gelato Network Token",
        "icon": "https://get.celer.app/cbridge-icons/GEL.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xb51541df05DE07be38dcfc4a80c05389A54502BB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WXT",
          "address": "0xa02120696c7B8fE16C09C749E4598819b2B0E915",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wirex Token",
        "icon": "https://get.celer.app/cbridge-icons/WXT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "WXT",
          "address": "0xBBCA42c60b5290F2c48871A596492F93fF0Ddc82",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wirex Token",
        "icon": "https://get.celer.app/cbridge-icons/WXT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "BLANK",
          "address": "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BlockWallet",
        "icon": "https://get.celer.app/cbridge-icons/BLANK.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "BLANK",
          "address": "0x09aB991d898713FB8e9B6d949DcB6e846076d765",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BlockWallet",
        "icon": "https://get.celer.app/cbridge-icons/BLANK.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xB0d8cF9560EF31B8Fe6D9727708D19b31F7C90Dc",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x153A59d48AcEAbedbDCf7a13F67Ae52b434B810B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "0x7d016eec9c25232b01F23EF992D98ca97fc2AF5a",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "GEL",
          "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Gelato",
        "icon": "https://get.celer.app/cbridge-icons/GEL.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "GEL",
          "address": "0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Gelato",
        "icon": "https://get.celer.app/cbridge-icons/GEL.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "IMX",
          "address": "0x7b35Ce522CB72e4077BaeB96Cb923A5529764a00",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Impermax",
        "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "IMX",
          "address": "0xeA38F1CCF77Bf43F352636241b05dd8f6F5f52B2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Impermax",
        "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0xb74527786818aE18B69B6A823960bfAF3906182F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0xAB0C1da69e383edB087D09b1eFD333321e5d6493",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 288,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xB0d8cF9560EF31B8Fe6D9727708D19b31F7C90Dc",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC5Ef662b833De914B9bA7a3532C6BB008a9b23a6",
      "canonical_token_contract_addr": "0x7562F525106F5d54E891e005867Bf489B5988CD9",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 288,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x5803457E3074E727FA7F9aED60454bf2F127853b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC5Ef662b833De914B9bA7a3532C6BB008a9b23a6",
      "canonical_token_contract_addr": "0xae8871A949F255B12704A98c00C2293354a36013",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x75DD23c0Dbfc369C231134E3046D0835E69aE6Cf",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x53813CD4aCD7145A716B4686b195511FA93e4Cb7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FLX",
          "address": "0x3Ea8ea4237344C9931214796d9417Af1A1180770",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Flux Token",
        "icon": "https://get.celer.app/cbridge-icons/FLX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "FLX",
          "address": "0x35156a5BFf7849BdD3256Fac688991B3F3Fb1ab6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Flux Token",
        "icon": "https://get.celer.app/cbridge-icons/FLX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "IMX",
          "address": "0x7b35Ce522CB72e4077BaeB96Cb923A5529764a00",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Impermax",
        "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "IMX",
          "address": "0xe4871Cede6e17c28a633453CDd14b90c2E31C23D",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Impermax",
        "icon": "https://get.celer.app/cbridge-icons/Impermax.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PLOT",
          "address": "0x72F020f8f3E8fd9382705723Cd26380f8D0c66Bb",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PLOT",
        "icon": "https://get.celer.app/cbridge-icons/PLOT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "PLOT",
          "address": "0xa3d23891f00B8d34E31096c0CeE1734595840D4D",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PLOT",
        "icon": "https://get.celer.app/cbridge-icons/PLOT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "RAGE",
          "address": "0x94804dc4948184fFd7355f62Ccbb221c9765886F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Rage Token",
        "icon": "https://get.celer.app/cbridge-icons/RAGE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "RAGE",
          "address": "0xF8Bf9988206c4de87F52A3c24486E4367B7088CB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Rage Token",
        "icon": "https://get.celer.app/cbridge-icons/RAGE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "UMA",
          "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "UMA",
        "icon": "https://get.celer.app/cbridge-icons/UMA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "UMA",
          "address": "0xb51541df05DE07be38dcfc4a80c05389A54502BB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "UMA",
        "icon": "https://get.celer.app/cbridge-icons/UMA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xe2aa35C2039Bd0Ff196A6Ef99523CC0D3972ae3e",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x03Cc0D20B5eA163Aa3c0851235f4653F6Fe61017",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0xaeb14DEC3d7B387997E8f543acac093d5B5D404e",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xA173954Cc4b1810C0dBdb007522ADbC182DaB380",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "XBP",
          "address": "0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BlitzPredict",
        "icon": "https://get.celer.app/cbridge-icons/XBP.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "XBP",
          "address": "0xe69583B62D7B7d8a568E1eC08f34B648589F4cF1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BlitzPredict",
        "icon": "https://get.celer.app/cbridge-icons/XBP.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7510792A3B1969F9307F3845CE88e39578f2bAE1",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "AAVE",
          "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AAVE Token",
        "icon": "https://get.celer.app/cbridge-icons/aave.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "AAVE",
          "address": "0xfcDe4A87b8b6FA58326BB462882f1778158B02F1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AAVE Token",
        "icon": "https://get.celer.app/cbridge-icons/aave.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CRV",
          "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Curve DAO Token",
        "icon": "https://get.celer.app/cbridge-icons/CRV.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "CRV",
          "address": "0x7756a83563f0f56937A6FdF668E7D9F387c0D199",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Curve DAO Token",
        "icon": "https://get.celer.app/cbridge-icons/CRV.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "NFTY",
          "address": "0xE1D7C7a4596B038CEd2A84bF65B8647271C53208",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "NFTY Token",
        "icon": "https://get.celer.app/cbridge-icons/NFTY.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "NFTY",
          "address": "0xe59817a90EBc1F9bf441065042b8913afFc771d5",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "NFTY Token",
        "icon": "https://get.celer.app/cbridge-icons/NFTY.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PKEX",
          "address": "0xE6f143a0e0A8f24F6294CE3432eA10FaD0206920",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PolkaEx",
        "icon": "https://get.celer.app/cbridge-icons/PKEX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "PKEX",
          "address": "0x1fE622E91e54D6AD00B01917351Ea6081426764A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PolkaEx",
        "icon": "https://get.celer.app/cbridge-icons/PKEX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1024,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1024,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1024,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1024,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1024,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1030,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x74eaE367d018A5F29be559752e4B67d01cc6b151",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1030,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6963EfED0aB40F6C3d7BdA44A05dcf1437C44372",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1030,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xfe97E85d13ABD9c1c33384E796F10B73905637cE",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1030,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x1F545487c62e5ACfEa45dcAdd9c627361d1616D8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1030,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xa47f43DE2f9623aCb395CA4905746496D2014d57",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1088,
      "pegged_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x516e6D96896Aea92cE5e78B0348FD997F13802ad",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x3bbaDFf9aeee4a74D3Cf6da05C30868C9Ff85BB8",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1088,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x4a63Afc71427807586dA190Bb0D3adB461fF9589",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x3bbaDFf9aeee4a74D3Cf6da05C30868C9Ff85BB8",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1088,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x5d96d4287D1ff115eE50faC0526cf43eCf79bFc6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x3bbaDFf9aeee4a74D3Cf6da05C30868C9Ff85BB8",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1088,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x3bbaDFf9aeee4a74D3Cf6da05C30868C9Ff85BB8",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CONV",
          "address": "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Convergence",
        "icon": "https://get.celer.app/cbridge-icons/CONV.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "CONV",
          "address": "0x8006320739fC281da67Ee62eB9b4Ef8ADD5C903a",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Convergence",
        "icon": "https://get.celer.app/cbridge-icons/CONV.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xC5Ef662b833De914B9bA7a3532C6BB008a9b23a6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "0x322E86852e492a7Ee17f28a78c663da38FB33bfb",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x54f2980A851376CcBC561Ab4631dF2556Ad03386",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "0x2CC0A9D8047A5011dEfe85328a6f26968C8aaA1C",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x8c75adB1D9f38F6C2AF54BE8120F598b9dba446C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x8a4B4C2aCAdeAa7206Df96F00052e41d74a015CE",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x6959027f7850Adf4916ff5Fdc898d958819E5375",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DODO",
          "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DODO bird",
        "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "DODO",
          "address": "0xE9460BD2FFB12b668fA32919C785C239f974D37C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DODO bird",
        "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x8c75adB1D9f38F6C2AF54BE8120F598b9dba446C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "0x1A93B23281CC1CDE4C4741353F3064709A16197d",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "0x6f1D1Ee50846Fcbc3de91723E61cb68CFa6D0E98",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x693B47a7fC3d33AE9eBec15e5F42f2dB480066f3",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Open USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xb74527786818aE18B69B6A823960bfAF3906182F",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Open Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x8d50a024B2F5593605d3cE8183Ca8969226Fcbf8",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "CELR",
          "address": "0xFe6998C5c22936CCa749b14Fcf5F190398cfa8F8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x940dAAbA3F713abFabD79CdD991466fe698CBe54",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xf5A178cf150216449630EAD9d0FDAEE09e06187b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "0xE03494D0033687543a80c9B1ca7D6237F2EA8BD8",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": " Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0xFc6Da929c031162841370af240dEc19099861d3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": " Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "0xd8176865DD0D672c6Ab4A427572f80A72b4B4A9C",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xe46910336479F254723710D57e7b683F3315b22B",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xb72A7567847abA28A2819B855D7fE679D4f59846",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0xb98e169C37ce30Dd47Fdad1f9726Fb832191e60b",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x153A59d48AcEAbedbDCf7a13F67Ae52b434B810B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "AKRO",
          "address": "0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Akropolis",
        "icon": "https://get.celer.app/cbridge-icons/AKRO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42161,
      "pegged_token": {
        "token": {
          "symbol": "AKRO",
          "address": "0x3CFB19B6cFb4fD9D2cd532C7c74CD0cD0Fe7E5b6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Akropolis",
        "icon": "https://get.celer.app/cbridge-icons/AKRO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42161,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x330066cf308Cea289f74585e85fA001048E8A5C0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
      "canonical_token_contract_addr": "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42161,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x1215107d442d70D43DC5EAd1Bfd2268525015c4f",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
      "canonical_token_contract_addr": "0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42220,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0xCb4A7569a61300C50Cf80A2be16329AD9F5F8F9e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xDA1DD66924B0470501aC7736372d4171cDd1162E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42220,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0xa8961Be06550c09C1bC14c483F3932B969eFf5E0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xDA1DD66924B0470501aC7736372d4171cDd1162E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42220,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x48421FF1c6B93988138130865C4B7Cce10358271",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Open USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xDA1DD66924B0470501aC7736372d4171cDd1162E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42220,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xB0d8cF9560EF31B8Fe6D9727708D19b31F7C90Dc",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Open Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xDA1DD66924B0470501aC7736372d4171cDd1162E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42220,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x1FBD282fdcF0C6FA9c77Eb61f95535dE3CCB8B78",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped ETH",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xDA1DD66924B0470501aC7736372d4171cDd1162E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CELR",
          "address": "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "CELR",
          "address": "0xf6a939e773fa4A63fd53f86bbbB279CaAD955035",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Celer Network",
        "icon": "https://get.celer.app/cbridge-icons/celr.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "CGG",
          "address": "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Chain Guardians",
        "icon": "https://get.celer.app/cbridge-icons/CGG.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "CGG",
          "address": "0xE4F66600c1396C530393430C590BF8c17EA06B18",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Chain Guardians",
        "icon": "https://get.celer.app/cbridge-icons/CGG.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DODO",
          "address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DODO bird",
        "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "DODO",
          "address": "0xAEDB70D42161e6e135250150EA561dD77a694798",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "DODO bird",
        "icon": "https://get.celer.app/cbridge-icons/DODO.jpg",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DOMI",
          "address": "0x45C2F8c9B4c0bDC76200448cc26C48ab6ffef83F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Domi",
        "icon": "https://get.celer.app/cbridge-icons/Domi.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "DOMI",
          "address": "0xFc6Da929c031162841370af240dEc19099861d3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Domi",
        "icon": "https://get.celer.app/cbridge-icons/Domi.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x693B47a7fC3d33AE9eBec15e5F42f2dB480066f3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0xdb84EA36FcddfE5febae7da8b2806EffE9C8B353",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "0x214DB107654fF987AD859F34125307783fC8e387",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "LUSD",
          "address": "0xDA0019E7e50Ee4990440b1aa5dFFCAC6E27Ee27B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Liquity USD",
        "icon": "https://get.celer.app/cbridge-icons/LUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0xcdA140dE9873E8F912f12c864Be786442DE8a818",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x63B0B80ee068D3CF46392c34025FA13a1F3B3F80",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WXT",
          "address": "0xa02120696c7B8fE16C09C749E4598819b2B0E915",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wirex Token",
        "icon": "https://get.celer.app/cbridge-icons/WXT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "WXT",
          "address": "0xfcDe4A87b8b6FA58326BB462882f1778158B02F1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wirex Token",
        "icon": "https://get.celer.app/cbridge-icons/WXT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x0ba85980B122353D77fBb494222a10a46E4FB1f6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x8d5E1225981359E2E09A3AB8F599A51486f53314",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x988a631Caf24E14Bb77EE0f5cA881e8B5dcfceC7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x8059E671Be1e76f8db5155bF4520f86ACfDc5561",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x7a5313468c1C1a3Afb2Cf5ec46558A7D0fc2884A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 210425,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDC",
          "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 210425,
      "pegged_token": {
        "token": {
          "symbol": "USDC",
          "address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "USD Coin",
        "icon": "https://get.celer.app/cbridge-icons/USDC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 210425,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 210425,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 210425,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x31d95c7fc6b5520B4BdCD78Efa689dD1CCa5741E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "DAI",
          "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "DAI",
          "address": "A.231cc0dbbcffc4b7.ceDAI.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Dai Stablecoin",
        "icon": "https://get.celer.app/cbridge-icons/DAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "RLY",
          "address": "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Rally",
        "icon": "https://get.celer.app/cbridge-icons/RLY.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "RLY",
          "address": "A.231cc0dbbcffc4b7.RLY.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Rally",
        "icon": "https://get.celer.app/cbridge-icons/RLY.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "USDT",
          "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "decimal": 6,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "USDT",
          "address": "A.231cc0dbbcffc4b7.ceUSDT.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Tether USD",
        "icon": "https://get.celer.app/cbridge-icons/USDT.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WBTC",
          "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC ",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "WBTC",
          "address": "A.231cc0dbbcffc4b7.ceWBTC.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped BTC ",
        "icon": "https://get.celer.app/cbridge-icons/WBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "WETH",
          "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/WETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "WETH",
          "address": "A.231cc0dbbcffc4b7.ceWETH.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Wrapped Ether",
        "icon": "https://get.celer.app/cbridge-icons/ETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x22953AF8b73f4f876FC09e836a14a1f64B209FEF",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "0xE4B9e004389d91e4134a28F19BD833cBA1d994B6",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0xAB0C1da69e383edB087D09b1eFD333321e5d6493",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "0xBb8831701E68B99616bF940b7DafBeb4CDb23e0b",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "FRAX",
          "address": "0xa8961Be06550c09C1bC14c483F3932B969eFf5E0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax",
        "icon": "https://get.celer.app/cbridge-icons/FRAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "0xFa7191D292d5633f702B0bd7E3E3BcCC0e633200",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "FXS",
          "address": "0x194Ad4574808D3E840221BeedF2209dfBc10b6ea",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Frax Share",
        "icon": "https://get.celer.app/cbridge-icons/FXS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "0x0767D8E1b05eFA8d6A301a65b324B6b66A1CC14c",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "PEOPLE",
          "address": "0x63B0B80ee068D3CF46392c34025FA13a1F3B3F80",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "PeopleDAO",
        "icon": "https://get.celer.app/cbridge-icons/PEOPLE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1,
      "org_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "SOS",
          "address": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OpenDAO",
        "icon": "https://get.celer.app/cbridge-icons/SOS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xB37D31b2A74029B5951a2778F959282E2D518595",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 10,
      "org_token": {
        "token": {
          "symbol": "AELIN",
          "address": "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Aelin",
        "icon": "https://get.celer.app/cbridge-icons/AELIN.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "AELIN",
          "address": "0xa9C125BF4C8bB26f299c00969532B66732b1F758",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Aelin",
        "icon": "https://get.celer.app/cbridge-icons/AELIN.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xbCfeF6Bb4597e724D720735d32A9249E0640aA11",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x33CcE3a8BA0bf7Ec56B2CCD2aD9306748a84E4cf",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xec81aA154d470c6857219b529de3F1D755eE2aE7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xeb883d9478af15c2C176030849D8Fa31169b63b9",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 10,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x23C748FeF17518B8DE55065338d7Fa20327472eB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 57,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xc6bc09a723F2314ad22642B6e33AD2ed6BbA3C9C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "ATL",
          "address": "0x1fD991fb6c3102873ba68a4e6e6a87B3a5c10271",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Atlantis Loan",
        "icon": "https://get.celer.app/cbridge-icons/ATL.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "ATL",
          "address": "0xb98e169C37ce30Dd47Fdad1f9726Fb832191e60b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Atlantis Loan",
        "icon": "https://get.celer.app/cbridge-icons/ATL.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x7C83CaEB3166a53aEE0681549E6452a1f5D94107",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xec81aA154d470c6857219b529de3F1D755eE2aE7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0x4A52b891eC0670f547BEDAc5959cA3e9FDEd4849",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Matic",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xec81aA154d470c6857219b529de3F1D755eE2aE7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0x66acEA0f41656711f58FF840c8857e3E5356F64F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x38D1e20B0039bFBEEf4096be00175227F8939E51",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1284,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xCb4A7569a61300C50Cf80A2be16329AD9F5F8F9e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance Coin",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance Coin",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance Coin",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance Coin (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0x516e6D96896Aea92cE5e78B0348FD997F13802ad",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42161,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x6C68eB45D5c2019136C8362cC928FB4f13F5385d",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xec81aA154d470c6857219b529de3F1D755eE2aE7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42161,
      "pegged_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0x746Ba48fC973596d0077573BDa6185cA3BB9c3dC",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xbdd2739AE69A054895Be33A22b2D2ed71a1DE778",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "ATL",
          "address": "0x1fD991fb6c3102873ba68a4e6e6a87B3a5c10271",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Atlantis Loan",
        "icon": "https://get.celer.app/cbridge-icons/ATL.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "ATL",
          "address": "0x90fBE9dfe76F6EF971c7A297641dfa397099a13e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Atlantis Loan",
        "icon": "https://get.celer.app/cbridge-icons/ATL.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "JADE",
          "address": "0x7ad7242A99F21aa543F9650A56D141C57e4F6081",
          "decimal": 9,
          "xfer_disabled": false
        },
        "name": "Jade Protocol",
        "icon": "https://get.celer.app/cbridge-icons/JADE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "JADE",
          "address": "0x80B010450fDAf6a3f8dF033Ee296E92751D603B3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Jade Protocol",
        "icon": "https://get.celer.app/cbridge-icons/JADE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0xeE396D4eE16Fd8C7d9bFB039d05F271D3c92e57D",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xec81aA154d470c6857219b529de3F1D755eE2aE7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "WREVA",
          "address": "0xa4918c50aadBa9EDCaf302562739c1b1C1367AA9",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Wrapped Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "sJADE",
          "address": "0x94CEA04C51E7d3EC0a4A97Ac0C3B3c9254c2aD41",
          "decimal": 9,
          "xfer_disabled": false
        },
        "name": "Staked JADE",
        "icon": "https://get.celer.app/cbridge-icons/JADE.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "sJADE",
          "address": "0x2B9e10bA02Fc97C8D2c99bB20A38fEd9f38c0aA9",
          "decimal": 9,
          "xfer_disabled": false
        },
        "name": "Staked JADE",
        "icon": "https://get.celer.app/cbridge-icons/JADE.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x11a0c9270D88C99e221360BCA50c2f6Fda44A980",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 47805,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0x02CD448123E3Ef625D3A3Eb04A30E6ACa29C7786",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x9B36f165baB9ebe611d491180418d8De4b8f3a1f",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance Coin",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "A.231cc0dbbcffc4b7.ceBNB.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Binance Coin",
        "icon": "https://get.celer.app/cbridge-icons/BNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "A.231cc0dbbcffc4b7.ceBUSD.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "BNB",
          "address": "0xc6bc09a723F2314ad22642B6e33AD2ed6BbA3C9C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB Token",
        "icon": "https://get.celer.app/cbridge-icons/BNB-coin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "BUSD",
          "address": "0x3b40D173b5802733108E047CF538Be178646b2e4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Binance USD",
        "icon": "https://get.celer.app/cbridge-icons/BUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 56,
      "org_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "REVA",
          "address": "0x99DE0d484da36127597C0578c0D623026b6fc79f",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Reva Token",
        "icon": "https://get.celer.app/cbridge-icons/WREVA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x78bc5Ee9F11d133A08b331C2e18fE81BE0Ed02DC",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 57,
      "org_token": {
        "token": {
          "symbol": "SYS",
          "address": "0xd3e822f3ef011Ca5f17D82C956D952D8d7C3A1BB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Syscoin",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Syscoin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "SYS",
          "address": "0xF3C96924d85566C031ddc48DbC63B2d71da6D0f6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Syscoin",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Syscoin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x1E6b1ceAF75936f153ABB7B65FBa57AbaE14e6CE",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 57,
      "org_token": {
        "token": {
          "symbol": "SYS",
          "address": "0xd3e822f3ef011Ca5f17D82C956D952D8d7C3A1BB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Syscoin",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Syscoin.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "SYS",
          "address": "0x6822A778726CD2f0d4A1Cfaca2D04654e575cC82",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Syscoin",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Syscoin.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x1E6b1ceAF75936f153ABB7B65FBa57AbaE14e6CE",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 128,
      "org_token": {
        "token": {
          "symbol": "MARK",
          "address": "0x779a8134750809F79Cf0Ba48ee0fF1A5c41a8fDC",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Mark",
        "icon": "https://get.celer.app/cbridge-icons/MARK.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 66,
      "pegged_token": {
        "token": {
          "symbol": "MARK",
          "address": "0x1fE622E91e54D6AD00B01917351Ea6081426764A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Mark",
        "icon": "https://get.celer.app/cbridge-icons/MARK.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5d96d4287D1ff115eE50faC0526cf43eCf79bFc6",
      "pegged_burn_contract_addr": "0x48284Eb583a1F3058F4BCe0a685D44FE29d4539e",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 128,
      "org_token": {
        "token": {
          "symbol": "PLATO",
          "address": "0x4668e0E7cC545De886aBF038067F81cD4DC0924b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Plato Games",
        "icon": "https://get.celer.app/cbridge-icons/PLATO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 66,
      "pegged_token": {
        "token": {
          "symbol": "PLATO",
          "address": "0xC5Ef662b833De914B9bA7a3532C6BB008a9b23a6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Plato Games",
        "icon": "https://get.celer.app/cbridge-icons/PLATO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5d96d4287D1ff115eE50faC0526cf43eCf79bFc6",
      "pegged_burn_contract_addr": "0x48284Eb583a1F3058F4BCe0a685D44FE29d4539e",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "SAFLE",
          "address": "0x04b33078Ea1aEf29bf3fB29c6aB7B200C58ea126",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Safle",
        "icon": "https://get.celer.app/cbridge-icons/safle.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "SAFLE",
          "address": "0x3f95E5099CF3A125145212Afd53039B8d8C5656e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Safle",
        "icon": "https://get.celer.app/cbridge-icons/safle.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "SAFLE",
          "address": "0x04b33078Ea1aEf29bf3fB29c6aB7B200C58ea126",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Safle",
        "icon": "https://get.celer.app/cbridge-icons/safle.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "SAFLE",
          "address": "0x73afC23510b40dcbEABc25fFBc8C2976eD9f950c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Safle",
        "icon": "https://get.celer.app/cbridge-icons/safle.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "SWAY",
          "address": "0x262B8AA7542004f023B0eB02bc6b96350A02b728",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Sway Social",
        "icon": "https://get.celer.app/cbridge-icons/SWAY.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "SWAY",
          "address": "0x262B8AA7542004f023B0eB02bc6b96350A02b728",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Sway Social",
        "icon": "https://get.celer.app/cbridge-icons/SWAY.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MATIC Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 416,
      "pegged_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0xfa6F64DFbad14e6883321C2f756f5B22fF658f9C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MATIC Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0x9Bb46D5100d2Db4608112026951c9C965b233f4D",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MAI",
          "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1285,
      "pegged_token": {
        "token": {
          "symbol": "MAI",
          "address": "0x48421FF1c6B93988138130865C4B7Cce10358271",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
      "canonical_token_contract_addr": "0xFb2019DfD635a03cfFF624D210AEe6AF2B00fC2C",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0x8006320739fC281da67Ee62eB9b4Ef8ADD5C903a",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MAI",
          "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "MAI",
          "address": "0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MATIC",
          "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "MATIC",
          "address": "A.231cc0dbbcffc4b7.ceMATIC.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Matic Token",
        "icon": "https://get.celer.app/cbridge-icons/MATIC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 137,
      "org_token": {
        "token": {
          "symbol": "MAI",
          "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1666600000,
      "pegged_token": {
        "token": {
          "symbol": "MAI",
          "address": "0x6fA10d3052372118E976948184ABaCaB569209ee",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "miMATIC",
        "icon": "https://get.celer.app/cbridge-icons/MAI.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xc1a2D967DfAa6A10f3461bc21864C23C1DD51EeA",
      "pegged_burn_contract_addr": "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
      "canonical_token_contract_addr": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 250,
      "org_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "FTM",
          "address": "0xc3FEc6F18dDb7583DA572374Ca8d11c6F0590dAe",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7D91603E79EA89149BAf73C9038c51669D8F03E9",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 250,
      "org_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x729416B1F442f204989f1C9f0d58321F878808eD",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7D91603E79EA89149BAf73C9038c51669D8F03E9",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 250,
      "org_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7D91603E79EA89149BAf73C9038c51669D8F03E9",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 250,
      "org_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "FTM",
          "address": "A.231cc0dbbcffc4b7.ceFTM.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7D91603E79EA89149BAf73C9038c51669D8F03E9",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 250,
      "org_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "FTM",
          "address": "0x1fE622E91e54D6AD00B01917351Ea6081426764A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Fantom",
        "icon": "https://get.celer.app/cbridge-icons/FTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x7D91603E79EA89149BAf73C9038c51669D8F03E9",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 288,
      "org_token": {
        "token": {
          "symbol": "OLO",
          "address": "0x5008F837883EA9a07271a1b5eB0658404F5a9610",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OolongSwap Token",
        "icon": "https://get.celer.app/cbridge-icons/OLO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "OLO",
          "address": "0xBaDE2a874e27b5B0920DA93EfE6845036C6fb5A4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OolongSwap Token",
        "icon": "https://get.celer.app/cbridge-icons/OLO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 288,
      "org_token": {
        "token": {
          "symbol": "WAGMIV1",
          "address": "0xCe055Ea4f29fFB8bf35E852522B96aB67Cbe8197",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v1 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV1.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "WAGMIV1",
          "address": "0x15EEf5ad78C4d9E5f247e68978ca32b5D25cA524",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v1 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV1.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 288,
      "org_token": {
        "token": {
          "symbol": "WAGMIV2",
          "address": "0x76B5908ecd0ae3DB23011ae96b7C1f803D63136c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v2 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV2.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "WAGMIV2",
          "address": "0xb4ED26dDc6fe3A1EA5e83C3fe145CA00C086563d",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v2 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV2.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 288,
      "org_token": {
        "token": {
          "symbol": "WAGMIV3",
          "address": "0xC6158B1989f89977bcc3150fC1F2eB2260F6cabE",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v3 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV3.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "WAGMIV3",
          "address": "0xb3833Ecd19D4Ff964fA7bc3f8aC070ad5e360E56",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Boba WAGMI v3 Option",
        "icon": "https://get.celer.app/cbridge-icons/WAGMIV3.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x4C882ec256823eE773B25b414d36F92ef58a7c0C",
      "pegged_burn_contract_addr": "0x52E4f244f380f8fA51816c8a10A63105dd4De084",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 288,
      "org_token": {
        "token": {
          "symbol": "OLO",
          "address": "0x5008F837883EA9a07271a1b5eB0658404F5a9610",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OolongSwap Token",
        "icon": "https://get.celer.app/cbridge-icons/OLO.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "OLO",
          "address": "0xa4918c50aadBa9EDCaf302562739c1b1C1367AA9",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "OolongSwap Token",
        "icon": "https://get.celer.app/cbridge-icons/OLO.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x8db213bE5268a2b8B78Af08468ff1EA422073Da0",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 336,
      "org_token": {
        "token": {
          "symbol": "SDN",
          "address": "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Shiden Network",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/shiden.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 592,
      "pegged_token": {
        "token": {
          "symbol": "SDN",
          "address": "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Shiden Network",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/shiden.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 592,
      "org_token": {
        "token": {
          "symbol": "ASTR",
          "address": "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Astar",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Astar.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "ASTR",
          "address": "0xe593F3509eb2a620DC61078bcdEDbA355F083E8B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Astar",
        "icon": "https://get.celer.app/cbridge-icons/chain-icon/Astar.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xbCfeF6Bb4597e724D720735d32A9249E0640aA11",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "AMY",
          "address": "0x8Fbd420956FDD301f4493500fd0BCaAa80f2389C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Amy Finance Token",
        "icon": "https://get.celer.app/cbridge-icons/AMY.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "AMY",
          "address": "0x30a667dF8562a2460F45AC297D833a36FEaC0C2F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Amy Finance Token",
        "icon": "https://get.celer.app/cbridge-icons/AMY.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xFe31bFc4f7C9b69246a6dc0087D91a91Cb040f76",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "MUX",
          "address": "0xB3022De15628D44c51AaAAf68E9E0fD9a23C5fCA",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX",
        "icon": "https://get.celer.app/cbridge-icons/MUX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "MUX",
          "address": "0x94d2FdF684158875B99AdAbBa8A5977730642550",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX",
        "icon": "https://get.celer.app/cbridge-icons/MUX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x52E4f244f380f8fA51816c8a10A63105dd4De084",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0x7CbaF5a14D953fF896E5B3312031515c858737C8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0x07145Ad7C7351c6FE86b6B841fC9Bed74eb475A7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0xd8d05915cf0AccBBBa78720707920Aff6eef3943",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0x81421A49c2Bb3F2F77A666F0686B4dB47A26360C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0xdd3CF6B0182993eced98fD71962dfA18E2eae2E4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0x0Acc63843f9dd5C2A14EE7C2349859c526B9d4D3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0x2aC61dd4fBb11919b20A3859D4dDc4Fa192c8ba1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0x904d0221641232fb40f99dc92C1d59c35698Ff0B",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0xE03b9Bf45B8b717237380AB934C5A6a5CA4C2Af1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0xEA09cBb3f286F7c1a377C4Db825c1cefaD2476AE",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0x198F152D3F34cb49A926333cD935D864D398753F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0xF234437596B9C90231181a2E80c668C4e5408108",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0x458cd4Bd5ae8FCF602a910423C30323997E497c3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0x523d3e0DacD7c470Ebe8880AbE808161696CeBeC",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x26c76F7FeF00e02a5DD4B5Cc8a0f717eB61e1E4b",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "JONES",
          "address": "0x10393c20975cF177a3513071bC110f7962CD67da",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Jones DAO",
        "icon": "https://get.celer.app/cbridge-icons/JONES.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 137,
      "pegged_token": {
        "token": {
          "symbol": "JONES",
          "address": "0xB657457141Db5D3eC564BDf778a2F5d367e7af28",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Jones DAO",
        "icon": "https://get.celer.app/cbridge-icons/JONES.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xFe31bFc4f7C9b69246a6dc0087D91a91Cb040f76",
      "pegged_burn_contract_addr": "0x4d58FDC7d0Ee9b674F49a0ADE11F26C3c9426F7A",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0x7CbaF5a14D953fF896E5B3312031515c858737C8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0xDDAde9a8dA4851960DFcff1AE4A18EE75C39eDD2",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0xd8d05915cf0AccBBBa78720707920Aff6eef3943",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0x746Ba48fC973596d0077573BDa6185cA3BB9c3dC",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0xdd3CF6B0182993eced98fD71962dfA18E2eae2E4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0x0b70Ad251761fCFf7Cb42dB35b10Ea0208ECd07c",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0x2aC61dd4fBb11919b20A3859D4dDc4Fa192c8ba1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0x1305b25842778041c4ae0c9e7C264A617c619FD4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0xE03b9Bf45B8b717237380AB934C5A6a5CA4C2Af1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0x13cCB790Cc6e3735b6b0eC11fef1A81703892861",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0x198F152D3F34cb49A926333cD935D864D398753F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0xFCCa7fA56e26f0C86339Ec06D304151aa2E9647A",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0x458cd4Bd5ae8FCF602a910423C30323997E497c3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 250,
      "pegged_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0xC70107ae20A976C958bF39B32eF8A6E0D2f04878",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0x30F7Aa65d04d289cE319e88193A33A8eB1857fb9",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "AMY",
          "address": "0x8Fbd420956FDD301f4493500fd0BCaAa80f2389C",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Amy Finance Token",
        "icon": "https://get.celer.app/cbridge-icons/AMY.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "AMY",
          "address": "0x78a21C1D3ED53A82d4247b9Ee5bF001f4620Ceec",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Amy Finance Token",
        "icon": "https://get.celer.app/cbridge-icons/AMY.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xFe31bFc4f7C9b69246a6dc0087D91a91Cb040f76",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "JONES",
          "address": "0x10393c20975cF177a3513071bC110f7962CD67da",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Jones DAO",
        "icon": "https://get.celer.app/cbridge-icons/JONES.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "JONES",
          "address": "0x746Ba48fC973596d0077573BDa6185cA3BB9c3dC",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Jones DAO",
        "icon": "https://get.celer.app/cbridge-icons/JONES.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xFe31bFc4f7C9b69246a6dc0087D91a91Cb040f76",
      "pegged_burn_contract_addr": "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0x7CbaF5a14D953fF896E5B3312031515c858737C8",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "MUXLP",
          "address": "0xAf2D365e668bAaFEdcFd256c0FBbe519e594E390",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "MUX LP",
        "icon": "https://get.celer.app/cbridge-icons/MUXLP.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0xd8d05915cf0AccBBBa78720707920Aff6eef3943",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxAVAX",
          "address": "0xaC80096d53c5965D9432592D28687C521472b9EB",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "AVAX mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxAVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0xdd3CF6B0182993eced98fD71962dfA18E2eae2E4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxBNB",
          "address": "0x30a667dF8562a2460F45AC297D833a36FEaC0C2F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BNB mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBNB.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0x2aC61dd4fBb11919b20A3859D4dDc4Fa192c8ba1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxBTC",
          "address": "0xCd7D33c265c811ee12c956D28c0e91f32a65119d",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "BTC mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxBTC.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0xE03b9Bf45B8b717237380AB934C5A6a5CA4C2Af1",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxETH",
          "address": "0xDE53842F87c95362B2912DB5dBBA404E7D5Ff842",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "ETH mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxETH.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0x198F152D3F34cb49A926333cD935D864D398753F",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxFTM",
          "address": "0x70D30270ccC356f47E5782a1A905ea85B9E08CEa",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "FTM mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxFTM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 42161,
      "org_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0x458cd4Bd5ae8FCF602a910423C30323997E497c3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 43114,
      "pegged_token": {
        "token": {
          "symbol": "muxUSD",
          "address": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "USD mToken",
        "icon": "https://get.celer.app/cbridge-icons/muxUSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xEA4B1b0aa3C110c55f650d28159Ce4AD43a4a58b",
      "pegged_burn_contract_addr": "0xb774C6f82d1d5dBD36894762330809e512feD195",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "TSD",
          "address": "0x4fbf0429599460D327BD5F55625E30E4fC066095",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Teddy Dollar",
        "icon": "https://get.celer.app/cbridge-icons/TSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1,
      "pegged_token": {
        "token": {
          "symbol": "TSD",
          "address": "0x212137aDFABbC3525f73183022a403c70c4E8ae6",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Teddy Dollar",
        "icon": "https://get.celer.app/cbridge-icons/TSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "TSD",
          "address": "0x4fbf0429599460D327BD5F55625E30E4fC066095",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Teddy Dollar",
        "icon": "https://get.celer.app/cbridge-icons/TSD.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 56,
      "pegged_token": {
        "token": {
          "symbol": "TSD",
          "address": "0xF8bFeac18A838acE22110e499922623D54ea26DA",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Teddy Dollar",
        "icon": "https://get.celer.app/cbridge-icons/TSD.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0xd443FE6bf23A4C9B78312391A30ff881a097580E",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 2001,
      "pegged_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0x86c28C9a6f2DC3C156AA2ad450F0F9d3A5Dec12e",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0x8006320739fC281da67Ee62eB9b4Ef8ADD5C903a",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 2
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 42262,
      "pegged_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "CRA",
          "address": "0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Crabada",
        "icon": "https://get.celer.app/cbridge-icons/CRA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 73772,
      "pegged_token": {
        "token": {
          "symbol": "CRA",
          "address": "0xC1a1F40D558a3E82C3981189f61EF21e17d6EB48",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Crabada",
        "icon": "https://get.celer.app/cbridge-icons/CRA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xb51541df05DE07be38dcfc4a80c05389A54502BB",
      "pegged_burn_contract_addr": "0xF8Bf9988206c4de87F52A3c24486E4367B7088CB",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "CRAM",
          "address": "0xD2cd7a59Aa8f8FDc68d01b1e8A95747730b927d3",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Crabda Amulet",
        "icon": "https://get.celer.app/cbridge-icons/CRAM.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 73772,
      "pegged_token": {
        "token": {
          "symbol": "CRAM",
          "address": "0xE71928E2CB1A19986936bfcE7b1fFFd0657da655",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Crabda Amulet",
        "icon": "https://get.celer.app/cbridge-icons/CRAM.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xb51541df05DE07be38dcfc4a80c05389A54502BB",
      "pegged_burn_contract_addr": "0xF8Bf9988206c4de87F52A3c24486E4367B7088CB",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "TUS",
          "address": "0xf693248F96Fe03422FEa95aC0aFbBBc4a8FdD172",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Treasure Under Sea",
        "icon": "https://get.celer.app/cbridge-icons/TUS.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 73772,
      "pegged_token": {
        "token": {
          "symbol": "TUS",
          "address": "0x9c765eEE6Eff9CF1337A1846c0D93370785F6C92",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Treasure Under Sea",
        "icon": "https://get.celer.app/cbridge-icons/TUS.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xb51541df05DE07be38dcfc4a80c05389A54502BB",
      "pegged_burn_contract_addr": "0xF8Bf9988206c4de87F52A3c24486E4367B7088CB",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 12340001,
      "pegged_token": {
        "token": {
          "symbol": "AVAX",
          "address": "A.231cc0dbbcffc4b7.ceAVAX.Vault",
          "decimal": 8,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "08dd120226ec2213",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 43114,
      "org_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 1313161554,
      "pegged_token": {
        "token": {
          "symbol": "AVAX",
          "address": "0xef3c714c9425a8F3697A9C969Dc1af30ba82e5d4",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Avalanche",
        "icon": "https://get.celer.app/cbridge-icons/AVAX.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
      "pegged_burn_contract_addr": "0x4384d5a9D7354C65cE3aee411337bd40493Ad1bC",
      "canonical_token_contract_addr": "",
      "vault_version": 0,
      "bridge_version": 0
    },
    {
      "org_chain_id": 1313161554,
      "org_token": {
        "token": {
          "symbol": "AURORA",
          "address": "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Aurora",
        "icon": "https://get.celer.app/cbridge-icons/AURORA.png",
        "inbound_lmt": ""
      },
      "pegged_chain_id": 9001,
      "pegged_token": {
        "token": {
          "symbol": "AURORA",
          "address": "0x48421FF1c6B93988138130865C4B7Cce10358271",
          "decimal": 18,
          "xfer_disabled": false
        },
        "name": "Aurora (Celer)",
        "icon": "https://get.celer.app/cbridge-icons/AURORA.png",
        "inbound_lmt": ""
      },
      "pegged_deposit_contract_addr": "0xbCfeF6Bb4597e724D720735d32A9249E0640aA11",
      "pegged_burn_contract_addr": "0xC1d6E421a062Fdbb26C31Db4a2113dF0F678CD04",
      "canonical_token_contract_addr": "",
      "vault_version": 2,
      "bridge_version": 2
    }
  ]
}