**User Stories:**  

1. Your `CurrencyConverter` component should return a `div` with the class `container` as its top-level element.  
2. Your `CurrencyConverter` component should render an `h2` element with the text `Currency Converter`.  
3. Your `CurrencyConverter` component should render an `input` element to accept the amount to be converted.  
4. Your `input` element should have a `type` attribute of `"number"` and should update the amount when changed.  
5. Your `CurrencyConverter` component should render a `select` element to choose the currency to convert from.  
6. Your `select` element should include options for `"USD"`, `"EUR"`, and `"GBP"`.  
7. Your `CurrencyConverter` component should use `useMemo` to optimize the calculation of the converted amount.  
8. Your `CurrencyConverter` component should render a `p` element that displays the selected currency and appends `"to JPY Conversion"` to it. (e.g., `"USD to JPY Conversion"`).  
9. Your `CurrencyConverter` component should render a `p` element displaying the converted amount in JPY in the format `Converted Amount: xx.00 JPY`.
10. The converted amount should be rounded to two decimal places.  
