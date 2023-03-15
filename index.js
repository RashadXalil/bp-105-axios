const coins = document.getElementById("coins");

axios
  .get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
  .then((res) => {
    let innerHTML = "";
    for (let i = 0; i < res.data.length; i++) {
      innerHTML += `<tr>
        <th scope="row">${res.data[i].id}</th>
        <td><img width="50px" src=${res.data[i].image}/></td>
        <td>${res.data[i].symbol}</td>
        <td>${res.data[i].name}</td>
        <td>${res.data[i].current_price}</td>
        <td>${res.data[i].high_24h}</td>
        <td>${res.data[i].low_24h}</td>
        <td>${res.data[i].price_change_24h}</td>
        <td><button class="btn btn-danger text-light">Delete</button></td>
      </tr>`;
    }
    coins.innerHTML = innerHTML;
  });
