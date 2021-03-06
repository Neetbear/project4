import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const withSelectedCoinName = () => (OriginalComponent) => (props) => {
  const selectedMarket = useSelector((state) => state.Coin.selectedMarket);
  // console.log("0 : ", selectedMarket)
  const coinNameKor = useSelector(
    (state) => {
      if (selectedMarket != "KRW-DNC") {
        return state.Coin.marketNames.data[(selectedMarket)].korean
      } else {
        return "도넛코인"
      }
    }
  );
  // console.log("coinNameKor : " + coinNameKor)
  const coinNameEng = useSelector(
    (state) => state.Coin.marketNames.data[selectedMarket == "KRW-DNC" ? "KRW-BTC" : selectedMarket].english
  );

  const splitedName = selectedMarket.split("-");
  const coinSymbol = splitedName[1];
  const coinNameAndMarketEng = splitedName[1] + "/" + splitedName[0];

  return (
    <OriginalComponent
      {...props}
      coinNameKor={coinNameKor}
      coinNameEng={coinNameEng}
      coinSymbol={coinSymbol}
      coinNameAndMarketEng={coinNameAndMarketEng}
    />
  );
};

export default withSelectedCoinName;
