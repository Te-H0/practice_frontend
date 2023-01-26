import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [dollar, setDollar] = useState(0);
  const onChangeCoin = (event) => {
    setPrice(event.target.value);
  };
  const onChangeInput = (event) => {
    setDollar(event.target.value)
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangeCoin}>
            <option value={0}>Selected Coin!</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <h3>Money $ (dollar)</h3>
          <input
            value={dollar}
            onChange={onChangeInput}
            type={"number"}
            placeholder="Your dollar money"
          />
          <h2>구매 가능한 코인의 수</h2>
          <input value={dollar/price} type={"number"} disabled={true} />
        </div>
      )}
    </div>
  );
}

export default App;
