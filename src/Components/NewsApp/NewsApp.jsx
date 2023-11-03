import React, { useEffect, useState } from 'react'
import axios from 'axios';

 function NewsApp() {
    const [news,setNews] = useState([]);
    
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a931d68eadd49408cd3db4fea612514")
        .then((res)=>{
            console.log(res.data.articles);
            setNews(res.data.articles);
        })
    },[])
  
   
  return (
    <>
       <center> <h1>Top Hedlines</h1></center>
    <div className='newsMain'>
         
        {
            news.map((val)=>{
                return (
                
                <div className='news_tile'>
                        <div className='imag_tile'>
                            <img className='image' src={val.urlToImage} alt='' />
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
    </>
  )
}

export default NewsApp