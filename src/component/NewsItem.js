import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, publishDate, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img className="card-img-top" src={imgUrl ? imgUrl : "https://media.zenfs.com/en/reuters-finance.com/95084254369ff028cffc1aac2ad8d2c7"} alt="card" />
          <div className="card-body">
            <h5 className="card-title"> {title}
            <span className="badge rounded-pill text-white bg-secondary" style={{ marginLeft: "10px", fontSize: "13px"}}>{source}</span></h5>
            <p className="card-text">{description}..</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(publishDate).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="__blank" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem;

