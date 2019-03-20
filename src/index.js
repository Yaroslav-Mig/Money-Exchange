// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return error = {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  } else if (currency > 0) {
    const rangeCoins = [50, 25, 10, 5, 1];
    const lengthArr = rangeCoins.length;
    let getZeroCoins = '';
    let getCoins = '';

    for (let i = 0; i < lengthArr; i++) {
      let flag = true;
      for (let j = i; rangeCoins[j] <= currency; j++) {
        changeCoins(currency, j);
        flag = false;
        break;
      }
      if (flag) {
        getZeroCoins += 0 + ' ';
        continue;
      }
      break
    }
    function changeCoins(currency, index) {
      for (let i = index; i < lengthArr; i++) {
        let coin = rangeCoins[i];
        let quantity = Math.floor(currency / coin);
        let rest = currency % coin;
        currency = rest;
        getCoins += quantity + ' ';
      }
      return getCoins;
    }

    let minCoinsStr = getZeroCoins + getCoins;
    let minCoinsArr = minCoinsStr.split(' ').map(value => Number(value));

    let exchange = {
      'H': 0,
      'Q': 0,
      'D': 0,
      'N': 0,
      'P': 0
    };
    let i = 0;
    for (let key in exchange) {
      exchange[key] = minCoinsArr[i]
      i++;
      if (exchange[key] === 0) {
        delete exchange[key];
      }
    }
    return exchange;
  } else {
    return error = {};
  }
}
