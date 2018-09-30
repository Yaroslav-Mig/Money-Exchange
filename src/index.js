// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return error = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    } else if (currency > 0) {
        const arr = [50, 25, 10, 5, 1];
        const length = arr.length;
        let count;
        let countFirst = '';
        let countSecond = '';

        for (let i = 0; i < length; i++) {
            let flag = true;
            for (let j = i; arr[j] <= currency; j++) {
                changeCoins(currency, j);
                flag = false;
                break;
            }
            if (flag) {
                countFirst += 0 + ' ';
                continue;
            }
            break
        }

        function changeCoins(currency, index) {
            const coins = arr;
            for (let i = index; i < length; i++) {
                let coin = coins[i];
                let quantity = Math.floor(currency / coin);
                let rest = currency % coin;
                currency = rest;
                countSecond += quantity + ' ';
            }
            return countSecond;
        }

        count = countFirst + countSecond;
        let values = count.split(' ');
        values = values.map(value => Number(value));

        let store = {
            'H': 0,
            'Q': 0,
            'D': 0,
            'N': 0,
            'P': 0
        };
        let i = 0;
        for (let key in store) {
            store[key] = values[i]
            i++;
            if (store[key] === 0) {
                delete store[key];
            }
        }
        return store;
    } else {
        return error = {};
    }
}
