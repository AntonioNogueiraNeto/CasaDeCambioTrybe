const endPoint = "https://api.exchangerate.host/latest?base=";
// utilizando o metodo then
const fetchCurrency = (currency) => {
  const url = `${endPoint}${currency}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

// utilizando metodo async await tratando erro com try e catch
const fetchCurrencyAsyncAwait = async (currency) => {
  try {
    const urlAwait = `${endPoint}${currency}`;
    const result = await fetch(urlAwait);
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    return error
  }
};

fetchCurrencyAsyncAwait("BRL");
