import axios from 'axios'
import React, {useState , useEffect } from 'react'

function CryptoApp() {
    const[crypto,SetCrypto] = useState([]);
    const[searchcrypto,SetSearchCrypto] = useState([]);

    
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/search/trending')
        .then((res)=>{

            SetCrypto(res.data.coins);
        })
    },[])


  return (
    <div className='Crypto_main'>
        <h1 className='Ctypto_title'>Trending Crypto</h1>

        <div className='Crypto_contianer'>
                        <div className='Crypto_tile'>
                            <div className='c_tile' id='img'>
                                <h2>Coin Logo</h2>
                            </div>
                            <div className='c_tile'>
                                <h2>Coin</h2>
                            </div>
                            <div className='c_tile' id='c_small'>
                                <h2>MarketCap Rank</h2>
                            </div>
                            <div className='c_tile'>
                            <h2>Price in USD</h2>
                            </div>
                        </div>
            {
                crypto.map((data)=>{
                    return(
                        <div className='Crypto_tile'>
                            <div className='c_tile' id='img'>
                                <img src={data.item.small} alt='cryptoImage' className='image_size' />
                            </div>
                            <div className='c_tile'>
                                <h2>{data.item.name}</h2>
                            </div>
                            <div className='c_tile' id='c_small'>
                                <h3>{data.item.market_cap_rank}</h3>
                            </div>
                            <div className='c_tile'>
                            <h2>{data.item.price_btc}</h2>
                            </div>
                        </div>
                    );
                })
            }   
           
        </div>
    </div>
  )
}

export default CryptoApp