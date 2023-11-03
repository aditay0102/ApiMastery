import React, { useEffect, useState } from 'react'
import axios from 'axios';

 function NewsApp() {
    const [news,setNews] = useState([]);
    
    let api_key = "80a058a3570ab103577540c509368cf4";
    let x = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a931d68eadd49408cd3db4fea612514";
    useEffect(()=>{
        axios.get("https://gnews.io/api/v4/search?q=example&apikey=80a058a3570ab103577540c509368cf4")
        .then((res)=>{
            console.log(res.data.articles);
            setNews(res.data.articles);
        })
    },[])
  
   
  return (
    <div>
    <center>
        <h1 className='news_heading'>Top Hedlines</h1>
    </center>
    <div className='newsMain'>
       
         
        {
            news.map((val)=>{
                return (
                
                <div className='news_tile'>
                        <div className='imag_tile'>
                            <img className='image' src={val.image} alt='' />
                        </div>
                        <div className='data'>
                            <h3 className='title'>{val.title} 
                            <a href={val.url} className='link' target='_blank'> ...Know more</a>
                            </h3>

                        </div>
                </div>
                
                );
            })
        }

    </div>
    </div>
  )
}

export default NewsApp