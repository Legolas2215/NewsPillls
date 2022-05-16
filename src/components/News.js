import React, { useState,useEffect } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const update = async () => {
    props.progress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.progress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.progress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.progress(100);
  }
  useEffect(() => {
    update();
      document.title = `${capitalizeFirstLetter(props.category)} | NewsPills`;
  }, [])
  
  



  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
  };


    return (
      <>
        <h2 className=' my-5 py-2 text-center'>{capitalizeFirstLetter(props.category)} News on NewsPills</h2>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          // loader={<Loading />} //=> Not working continues to light up
        > 

          <div className='container'>
          
          <div className="row">
            
            {articles.map((element) => {
              return <div className="col-lg-4" key={element.url}><NewsItem title={element.title} imageurl={element.urlToImage} desc={element.description} url={element.url} author={element.author} dateTime={element.publishedAt} /></div>
            })}
            
          </div>
          </div>

        </InfiniteScroll>
        

        

      </>
    )

}

News.defaultProps = {
  country: 'in',
  pageSize: '5',
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News