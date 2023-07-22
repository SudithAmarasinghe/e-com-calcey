import React from 'react';
import './LandingPage.css'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* First Row */}
      <header className="header">
        <div className="logo">
          <img src="images/c_logo.png" alt="Company Logo" />
        </div>
        <div className="sign-in">
          <button className="signin-btn">Sign In</button>
        </div>
      </header>

      {/* Second Row */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-btn">Search</button>
        </div>
      </nav>

      <div className="main-content">
        {/* Left column for filtering purpose */}
        <aside className="filter-column">
          <h3>Filter By</h3>
          <div className="filter-item">
            <label htmlFor="make">Make: </label>
            <input type="text" id="make" placeholder="Enter make" />
          </div>
          <div className="filter-item">
            <label htmlFor="model">Model:</label>
            <input type="text" id="model" placeholder="Enter model" />
          </div>
          <div className="filter-item">
            <label htmlFor="category">Category: </label>
            <select id="category">
              <option value="">Select category</option>
              <option value="body parts">Body Parts</option>
              <option value="electrical">Electrical</option>
              <option value="mechanical">Mechanical</option>
              <option value="other">Other</option>
              {/* Add more category options as needed */}
            </select>
          </div>
          <div className="filter-item">
            <label>Price Range:</label>
            <div className="price-range">
              <input type="range" min="0" max="1000" step="10" />
              <input type="range" min="0" max="1000" step="10" />
            </div>
          </div>
          <button className="apply-filter-btn">Apply Filters</button>
        </aside>

        {/* Categories with sub-cards */}
        <section className="categories-section">
          {/* Category 1 - Popular */}
          <div className="category">
            <h2>Popular</h2>
            <div className="sub-cards">
              <div className="sub-card">
                <img src="images/popular/pp_1.jpeg" alt="PPopular 1" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <div className="sub-card-img">
                    <img src="images/popular/pp_2.jpg" alt="Popular 2" className="sub-card-img" />
                </div>
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/popular/pp_3.jpg" alt="Popular 3" className="sub-card-img"/>
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/popular/pp_4.jpg" alt="Popular 4" className="sub-card-img"/>
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/popular/pp_5.jpeg" alt="Popular 5" className="sub-card-img"/>
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {/* Add more sub-cards */}
            </div>
            <div className="arrow">
              <span>&#8249;</span>
              <span>&#8250;</span>
            </div>
          </div>
          <hr />

          {/* Category 2 - Body parts */}
          <div className="category">
            <h2>Body parts</h2>
            <div className="sub-cards">
              <div className="sub-card">
                <img src="images/bodyparts/bd_1.jpg" alt="body parts 1" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/bodyparts/bd_2.jpg" alt="body parts 2" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/bodyparts/bd_3.jpeg" alt="body parts 3" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/bodyparts/bd_4.jpg" alt="body parts 4" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/bodyparts/bd_5.jpeg" alt="body parts 5" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {/* Add more sub-cards */}
            </div>
            <div className="arrow">
              <span>&#8249;</span>
              <span>&#8250;</span>
            </div>
          </div>
          <hr />

          {/* Category 3 - Electrical */}
          <div className="category">
            <h2>Electrical</h2>
            <div className="sub-cards">
              <div className="sub-card">
                <img src="images/electrical/el_1.jpeg" alt="electrical 1" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/electrical/el_2.jpeg" alt="electrical 2" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/electrical/el_3.jpeg" alt="electrical 3" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/electrical/el_4.jpg" alt="electrical 4" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/electrical/el_5.jpeg" alt="electrical 5" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {/* Add more sub-cards */}
            </div>
            <div className="arrow">
              <span>&#8249;</span>
              <span>&#8250;</span>
            </div>
          </div>
          <hr />

          {/* Category 4 - Mechanical */}
          <div className="category">
            <h2>Mechanical</h2>
            <div className="sub-cards">
              <div className="sub-card">
                <img src="images/mechanical/mc_1.jpeg" alt="mechanical 1" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
              <div className="sub-card">
                <img src="images/mechanical/mc_2.jpg" alt="mechanical 2" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/mechanical/mc_3.jpeg" alt="mechanical 3" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/mechanical/mc_4.jpeg" alt="mechanical 4" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/mechanical/mc_5.jpeg" alt="mechanical 5" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {/* Add more sub-cards */}
            </div>
            <div className="arrow">
              <span>&#8249;</span>
              <span>&#8250;</span>
            </div>
          </div>
          <hr />

          {/* Category 5 - Other */}
          <div className="category">
            <h2>Other</h2>
            <div className="sub-cards">
              <div className="sub-card">
                <img src="images/other/ot_1.jpeg" alt="other 1" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/other/ot_2.jpeg" alt="other 2" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/other/ot_3.jpeg" alt="other 3" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/other/ot_4.jpeg" alt="other 4" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="sub-card">
                <img src="images/other/ot_5.jpg" alt="other 5" className="sub-card-img" />
                <h3>Product 1</h3>
                <p>Price: $19.99</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {/* Add more sub-cards */}
            </div>
            <div className="arrow">
              <span>&#8249;</span>
              <span>&#8250;</span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/lrs" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com/lrs" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/lrs" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LRS online. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
