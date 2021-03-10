import React from 'react';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">THEKA</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Bacardi</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star-half-o"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 1000</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-2.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Antiquity Blue Whisky</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 1200</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-3.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Black Dog Gold Reserve Scotch</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 800</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-4.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Signature Rare Aged Whisky</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 700</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-5.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Royal Stag Barrel Select Whisky</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 1100</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              {/* <!-- image size should be 680px x 830px --> */}
              <img className="medium" src="./images/product-6.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>McDowell's No.1</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star-o"></i></span>
              </div>
              <div className="price"><span>&#8377;</span> 1500</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">
        All rights reserved
        </footer>
    </div>
  );
}

export default App;
