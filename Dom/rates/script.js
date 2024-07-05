let currentPage = 1;
const itemsPerPage = 10;

async function fetchCryptoData(page = 1) {
    const response = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=bitcoin%2Cethereum&include_exchange_logo=false&page=${page}&depth=false&order=trust_score_desc`
    );
    const data = await response.json();
    return data.tickers;
}

function createCard(ticker) {
    return `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Base</th>
                            <th scope="col">Target</th>
                            <th scope="col">Last</th>
                            <th scope="col">Converted Volume (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${ticker.base}</td>
                            <td>${ticker.target}</td>
                            <td>${ticker.last}</td>
                            <td>${ticker.converted_volume.usd}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function displayData(tickers) {
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = ""; // Clear previous cards

    tickers.slice(0, itemsPerPage).forEach((ticker) => {
        cardsContainer.innerHTML += createCard(ticker);
    });
}

async function updatePage() {
    const tickers = await fetchCryptoData(currentPage);
    displayData(tickers);
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

document.getElementById("next").addEventListener("click", () => {
    currentPage++;
    updatePage();
});

document.addEventListener("DOMContentLoaded", updatePage);
