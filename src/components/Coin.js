import React from "react";

// styles 
import styles from "./Coin.module.css";

const Coin = ({name,symbol,image,marketCapChange,price,marketCap}) =>{
    return(
        <>
            <div className={styles.container}>
                <img src={image} alt={name} className={styles.image} />
                <span className={styles.name}>{name}</span>
                <span className={styles.symbol}>{symbol.toUpperCase()}</span>
                <span className={marketCapChange > 1 ? styles.greenPriceChange : styles.redPriceChange}>{marketCapChange.toFixed(2)}</span>
                <span className={styles.currentPrice}>{price.toLocaleString()}</span>
                <span className={styles.symbol}>{marketCap.toLocaleString()}</span>
            </div>
        </>
    );
}
 export default Coin; 
