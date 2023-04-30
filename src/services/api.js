import axios from "axios";

const Base_URL = `https://api.coingecko.com/api/v3/`;

const getCoin = async () => {
    const response = await axios.get(`${Base_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false&locale=en`)
    return response.data;
}

export { getCoin };