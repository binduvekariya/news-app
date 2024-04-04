import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>  {

  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const UpdateNews = async () =>  {
    props.setprogress(20);
    const mainurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`; 
    setloading(true);
    let data = await fetch(mainurl);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(60);

    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setprogress(100);
  }


//   const handlePrevClick = async () => {
//     setpage(page - 1);
//     UpdateNews();
//   }

//   const handleNextClick = async () => {
//     setpage(page + 1);
//     UpdateNews();
//   }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    UpdateNews();
  // eslint-disable-next-line 
  },[])
  

  const fetchMoreData = async () => {
  
    const mainurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`;

    setpage(page + 1);
    setloading(true);
    let data = await fetch(mainurl);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  }
    return (
      <>
        <h1 className='text-center' style={{ margin: "90px" }} >NewsMonkey - Top {capitalize(props.category)} Headlines</h1>

        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== useState(totalResults)}
          loader={loading && <Spinner/>}
        >
          <div className="container">
            <div className="row">
            {
                (articles.map((element) => {
                  return <div className="col-md-4" key={element.url}  >
                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishDate={element.publishedAt} source={element.source.name} />
                  </div>
                }))
            }
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  
}

News.defaultProps = {
    country: "in",
    pageSize: 25,
    category: "general"
}

News.propTypes  = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
