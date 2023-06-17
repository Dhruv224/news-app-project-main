import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import axios from 'axios';
import NewsCard from './NewsCard';
import Home from './Home';

const ALAN_KEY = '406244f859568def960b2165ba50f1282e956eca572e1d8b807a3e2338fdd0dc/stage';
const NEWS_API_KEY = '8ca05a82142b4a71b3d3445976fcdbff';

function App() {
  // const [news, setNews] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);

  const getData = async (URL) => {
    const {data} = await axios.get(URL);
    setNewsArticles(data.articles);
  }

  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: (commandData) => {
        if(commandData.command === 'news'){
          let URL='';
          if(commandData.data.toLowerCase() == 'all'){
            URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&country=us`;
          }else{
            URL = `https://newsapi.org/v2/top-headlines/?apiKey=${NEWS_API_KEY}&sources=${commandData.data.toLowerCase().split(" ").join('-')}`;
          }

          getData(URL);
        }

        if(commandData.command === 'byCategory'){
          let URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&category=${commandData.data}`;

          getData(URL);
        }

        if(commandData.command === 'byTerm'){
          let URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}&q=${commandData.data}`;

          getData(URL);
        }

        if(commandData.command === 'byCountry'){
          let URL = `https://newsapi.org/v2/top-headlines?country=${commandData.data.substring(0, 2).toLowerCase()}&apiKey=${NEWS_API_KEY}`;
          
          getData(URL);
        }

        if(commandData.command === 'goBack'){
          setNewsArticles([]);
        }
      }
    })
  }, []);
  return (
    <div className='bg-slate-900 min-h-screen text-gray-200'>
      <div className='text-center pt-10 text-5xl font-bold '>
        <span className='duration-300 cursor-pointer border-b-[5px] pb-1 border-double border-slate-500 hover:text-gray-400'>News App</span>
      </div>

      {
        newsArticles.length == 0 ? (
          <Home />
        ) : (
          <div className='mx-auto pt-20 lg:pt-36 pb-36 px-8 lg:px-36 grid lg:grid-cols-3 gap-6 '>
        {
          newsArticles.map((article, index) => {
            return <NewsCard key={index} index={index} article={article}/>
          })
        }
        </div>
        )
      }
      
    </div>
  )
}

export default App