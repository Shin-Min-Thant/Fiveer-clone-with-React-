import "./Features.scss";
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="serach">
            <div className="searchInput">
              <img src="/imgs/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button className="search-button">Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Service</button>
          </div>
        </div>
        <div className="right">
          <img src="/imgs/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
