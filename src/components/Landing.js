
import React, { useState, useEffect } from "react";
import { getCoin } from "../services/api";
import Loading from "./Loading";

const Landing = () => {

    const[coins, setCoins] = useState([]);

    useEffect(()=>{

        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
            console.log(data);
        };
        fetchAPI();

    },[]);

    return(
        <>
            <input type="text" placeholder="Search your coin ...." />
            {
                coins.length 
                ? <div>
                    {
                        coins.map(coin => {
                            <div key={coin.id}>
                                <p>{coin.name}</p>
                            </div>
                        })
                    }
                    </div>
                :
                <Loading />
            }
        </>
    );
}

export default Landing ;