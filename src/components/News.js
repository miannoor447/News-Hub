import React, {useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)
  useEffect(() => { 
    document.title = `${capitalizeFirstLetter(props.category)}-NewsHub`;
    updateNews();
    // eslint-disable-next-line
  }, [])
 const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews=async() =>{
    props.setProgress(0);
    const url = `  https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
            &page=${page}&pageSize=${props.pageSize}`;
   setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    setPage(page+ 1 );
    const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
            &page=${page+1}&pageSize=${props.pageSize}`;
   setLoading(false)
   setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  }
    return (
    <>
    <h1 className="text-center" style={{marginTop:"70px"}}>NewsHub - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
    {loading&&<Spinner/>}
      <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={<h4><Spinner/></h4>}
  >
        <div className="container my-3">

        <div className="row">
          {
           articles.map((elements) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title={elements.title ? elements.title.slice(0, 40) : ""}
                    description={
                      elements.description
                        ? elements.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={
                      elements.urlToImage
                        ? elements.urlToImage
                        : "https://i.dailymail.co.uk/1s/2022/12/20/22/65791031-0-image-a-58_1671575721538.jpg"
                    }
                    newsUrl={elements.url}
                    date={elements.publishedAt}
                  />
                </div>
              );
      
            })}
        </div>
      
        </div>
        </InfiniteScroll>
        </>
    );
  }
News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
