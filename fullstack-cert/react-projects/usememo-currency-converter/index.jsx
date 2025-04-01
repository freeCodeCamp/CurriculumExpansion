export function CurrencyConverter() {
  const [amount, setAmount] = React.useState(1);
  const [startCurrency, setStartCurrency] = React.useState("USD");
  const [endCurrency, setEndCurrency] = React.useState("EUR");

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
  };

  const convertedAmount = React.useMemo(() => {
    if (startCurrency === endCurrency) {
      return amount.toFixed(2);
    }
    const startRate = exchangeRates[startCurrency];
    const endRate = exchangeRates[endCurrency];
    const converted = (amount * endRate) / startRate;
    return converted.toFixed(2);
  }, [amount, startCurrency, endCurrency]);

  return (
    <main>
      <h1>Currency Converter</h1>
      <p className="conversion-display">
        {startCurrency} to {endCurrency} Conversion
      </p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <label>
        Start Currency:
        <select
          value={startCurrency}
          onChange={(e) => setStartCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>
      <label>
        Target Currency:
        <select
          value={endCurrency}
          onChange={(e) => setEndCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>
      <p>
        Converted Amount: <span>{convertedAmount}</span> {endCurrency}
      </p>
    </main>
  );
}
