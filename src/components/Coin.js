import React from "react";

const Coin = ({name,symbol,image,marketCapChange,price,marketCap}) =>{
    return(
        <>
            <div>
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>{symbol.toUpperCase()}</p>
                <p>{marketCapChange}</p>
                <p>{price.toLocaleString()}</p>
                <p>{marketCap.toLocaleString()}</p>
            </div>
        </>
    );
}
 export default Coin; 
