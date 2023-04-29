
import React, { useState, useEffect } from "react";
import { getCoin } from "../services/api";
import Loading from "./Loading";
import Coin from "./Coin";

const Landing = () => {

    const[coins, setCoins] = useState([]);
    const[search, setSearch]=useState("");

    useEffect(()=>{

        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
            console.log(data);
        };
        fetchAPI();

    },[]);

    const handleSearch = (event)=>{
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <>
            <input type="text" placeholder="Search your coin ...." value={search} onChange={handleSearch} />
            {
                coins.length 
                ? <div>
                    {
                        searchedCoins.map(coin => <Coin
                        key={coin.id} 
                        name={coin.name}  
                        symbol={coin.symbol}
                        image={coin.image}
                        marketCapChange={coin.market_cap_change_percentage_24h}
                        marketCap={coin.market_cap}
                        price={coin.current_price}
                        />)
                    }
                    </div>
                :
                <Loading />
            }
        </>
    );
}

export default Landing ;
