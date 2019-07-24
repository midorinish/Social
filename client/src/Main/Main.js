import React from 'react';
import './_bootstrap.scss';
import './_colors.scss';
import './_mixins.scss';
import './buttons.scss';
import './header.scss';
import './home.scss';
import './site.scss';
import './social.scss';
import './ticket-boxes.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <nav className="navbar navbar-inverse site-nav">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="site-logo" href="#"><img src="images/logo fixed.png" alt="The Social" title="The Social" /></a>
        </div>
        <div className="collapse navbar-collapse navbar-right " id="myNavbar">
          <ul className="nav navbar-nav top-nav hide-on-mobile">
            <li><a href="https://social-app-2019.herokuapp.com/login">Sign Up</a></li>
            <li><a href="https://social-app-2019.herokuapp.com/login">Log In</a></li>
            <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge"></span></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge"></span></a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li><a href="#"><span className="label label-primary">Add Your Event</span></a></li>
          </ul>
          <ul className="nav navbar-nav top-nav hide-on-desktop">
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
            <li><a href="#">Concerts</a></li>
            <li><a href="#" className="blue-bg">Cricket</a></li>
            <li><a href="#" className="orange-bg">Events</a></li>
            <li><a href="#" className="green-bg">Sports</a></li>
            <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
            <li><a href="#" className="purple-bg">Restaurants</a></li>
            <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
            <li><a href="#">Parties</a></li>
          </ul>
        </div>
      </nav>

      <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
        <h1>Social -- Be There!</h1>
        <div className="site-manu container">
          <div className="collapse navbar-collapse hide-on-mobile">
            <ul className="nav navbar-nav sub-main-nav">
              <li><a href="#">Concerts</a></li>
              <li><a href="#" className="blue-bg">Cricket</a></li>
              <li><a href="#" className="orange-bg">Events</a></li>
              <li><a href="#" className="green-bg">Sports</a></li>
              <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
              <li><a href="#" className="purple-bg">Restaurants</a></li>
              <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
              <li><a href="#">Parties</a></li>
            </ul>
          </div>
          <div className="banner-serch-box"><input id="txtSearchBox" className="" name="q" value="" placeholder="Search for an event, venue or city" type="text" /><a href="javascript:void(0);" onclick="searchfor();"><i className="fa fa-search" aria-hidden="true" /></a></div>
        </div>
      </div>

      <div className="carousel-inner">
        <div data-slide="0" className="item active">
          <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
          <div className="hide-on-mobile">
            <video title="0" id="bgvid0" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
              <source src="http://content.kyazoonga.com/videos/video9.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>
        <div data-slide="1" className="item">
          <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
          <div className="hide-on-mobile">
            <video title="1" id="bgvid1" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg" >
              <source src="http://content.kyazoonga.com/videos/video1.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>
        <div data-slide="2" className="item">
          <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
          <div className="hide-on-mobile">
            <video title="2" id="bgvid2" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
              <source src="http://content.kyazoonga.com/videos/video2.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>
        <div data-slide="3" className="item">
          <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
          <div className="hide-on-mobile">
            <video title="3" id="bgvid3" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg" >
              <source src="http://content.kyazoonga.com/videos/video3.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>
        <div data-slide="4" className="item">
          <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
          <div className="hide-on-mobile">
            <video title="4" id="bgvid4" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
              <source src="http://content.kyazoonga.com/videos/video8.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>

      </div>
      <div id="hot_tickets"></div>

      <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">
            <div className="col-sm-4 cat-box">
              <a href="#" className="block-link">
                <div className="cat-txt">
                  <h3>Concerts</h3>
                </div>
                <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg" alt="" className="img-full-width" />
              </a>
            </div>
          </div>
          <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
              <div className="cat-txt">
                <h3>Cricket</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg" alt="" className="img-full-width" />
            </a>
          </div>
          <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
              <div className="cat-txt">
                <h3>Theatre & Arts</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg" alt="" className="img-full-width" />
            </a>
          </div>
          <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
              <div className="cat-txt">
                <h3>Amusement Parks</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg" alt="" className="img-full-width" />
            </a>
          </div>
          <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
              <div className="cat-txt">
                <h3>Sports</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg" alt="" className="img-full-width" />
            </a>
          </div>
          <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
              <div className="cat-txt">
                <h3>Restaurants</h3>
              </div>
              <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg" alt="" className="img-full-width" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 cont-drop">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Dropdown
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-9 home-newsletter">
              <div className="row">
                <div className="col-sm-5 news-subs-txt">
                  <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="col-sm-7">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <span className="input-group-btn">
                      <button className="btn btn-theme" type="submit">Subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-links">
          <div className="col-sm-3">
            <h6>Help</h6>
            <ul>
              <li><a href="#">24x7 Customer Service</a></li>
              <li><a href="#">Event Listings</a></li>
              <li><a href="#">Add Your Event</a></li>
              <li><a href="#">Error Messages</a></li>
              <li><a href="#">Track Events</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Company</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Policies</a></li>
            </ul>
          </div>
        </div>
        <div id="footer_hot_links"></div>

        <div className="col-sm-3 country-flag-sec">
          <h6>Popular Events</h6>
          <ul>
            <li><a href="" target="_blank"><img src="images/CountriesFlag/aus.png" />Australia</a></li>
            <li><a href="" target="_blank"><img src="images/CountriesFlag/ind.png" />India</a></li>
            <li><a href="" target="_blank"><img src="images/CountriesFlag/ireland.png" />Ireland</a></li>
            <li><a href="" target="_blank"><img src="images/CountriesFlag/uae.png" />United Arab Emirates</a></li>
            <li><a href="" target="_blank"><img src="images/CountriesFlag/usa.png" />United States</a></li>
          </ul>
        </div>

        <div className="footer-social text-center">
          <h6>Follow Us</h6>
          <ul>
            <li><a className="f" href="" target="blank" rel="me">
              <img src="images/facebook.png" alt="Facebook" width="32" height="32" /></a></li>
            <li><a className="t" href="" target="blank" rel="me">
              <img src="images/twitter.png" alt="Twitter" width="32" height="32" /></a></li>
            <li><a className="ig" href="" target="blank" rel="me">
              <img src="images/instagram.png" alt="in" width="32" height="32" /></a></li>
            <li><a className="sc" href="" target="blank" rel="me">
              <img src="images/snapchat.png" alt="in" width="32" height="32" /></a></li>
            <li><a className="in" href="" target="blank" rel="me">
              <img src="images/in.png" alt="Linkedin" width="32" height="32" /></a></li>
            <li><a className="yt" href="" target="blank" rel="me">
              <img src="images/youtube.png" alt="Youtube" width="32" height="32" /></a></li>
            <li><a className="g" href="" target="blank" rel="me">
              <img src="images/google.png" alt="Google Plus" width="32" height="32" /></a></li>
            <li><a className="p" href="" target="blank" rel="me">
              <img src="images/pinterest.png" alt="Pinterest" width="32" height="32" /></a></li>
          </ul>
          <p className="copy-txt">Copyright ©The Social. All rights reserved. </p>
        </div>

      </footer>
    </div>
  )
}