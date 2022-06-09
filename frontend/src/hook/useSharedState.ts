import React, { useState } from "react";
import { useBetween } from "use-between";

// Make a custom hook with your future shared state
const useFormState = () => {
    const [selectedToken, setSelectedToken]=useState(undefined);
    const [bnbPrice, setBnbPrice]=useState(400);
    const [long, setLong]=useState(true);
    const [ask, setAsk]=useState(0);
    const [bid, setBid]=useState(0);
    const [tokensList,setTokensList]=useState([]);
    const [showPairs,setShowPairs]=useState([]);
    const [tokenCategory,setTokenCategory]=useState("BNB");
    const [showtr,setShowTr]=useState(true);//useState(undefined);

    return {
        selectedToken, setSelectedToken,
        bnbPrice,setBnbPrice,
        long,setLong,
        ask,setAsk,
        bid,setBid,
        tokensList,setTokensList,
        showPairs,setShowPairs,
        tokenCategory,setTokenCategory,
        showtr,setShowTr
    };
  };

const useSharedState = () => useBetween(useFormState);

export default useSharedState