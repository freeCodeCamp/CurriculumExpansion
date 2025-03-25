const { useMemo } = React;

export default function CurrencyConverter() {
    const [amount, setAmount] = React.useState(1);
    const [currency, setCurrency] = React.useState("USD");
  
    const exchangeRates = {
      USD: 150, // 1 USD = 150 JPY
      EUR: 155, // 1 EUR = 155 JPY
      GBP: 190, // 1 GBP = 190 JPY
    };

    const convertedAmount = React.useMemo(() => {
      return (amount * exchangeRates[currency]).toFixed(2);
    }, [amount, currency]);
  
    return (
      <div className="container">
        <h2>Currency Converter</h2>
        <p className="conversion-display">{currency} to JPY Conversion</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {Object.keys(exchangeRates).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
        <p>Converted Amount: <span>{convertedAmount}</span> JPY</p>
      </div>
    );
  }
  