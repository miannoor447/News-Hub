const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, date } = props;
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              Published on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark  btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewsItem;
