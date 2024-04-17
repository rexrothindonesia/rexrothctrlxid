/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import M from 'materialize-css'; // Import materialize-css untuk inisialisasi komponen Materialize

export class Navbar extends Component {
  componentDidMount() {
    // Inisialisasi sidenav dan dropdown setelah komponen dimuat
    document.addEventListener("DOMContentLoaded", function() {
      const sideNav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sideNav);

      const dropdown = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(dropdown);
    });
  }

  render() {
    return (
      // <!--dropdown-->
      <div className="navbar-fixed">
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Menghubungkan Modbus RTU ke ctrlX</a></li>
          <li><a href="#!">Cara akses Modbus TCP ctrlX</a></li>
          <li><a href="#!">Cara storing data kedalam Influxdb dengan ctrlX</a></li>
        </ul>


        <nav className="white">
          <a href="#!" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
          <div className="container">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">
                <img src="https://media0.giphy.com/media/MJUyVWLgSR4ols9JZc/giphy.gif?cid=6c09b9528ueqydjqnpx29a3z4dp1wkvh5yf335be0twuswif&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" style={{ height: '60px', width: 'auto' }} />
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#about" className="blue-text text-darken-4">About Us</a></li>
                <li><a href="#portfolio" className="blue-text text-darken-4">Portfolio</a></li>
                <li><a className="dropdown-trigger blue darken-3" href="#!" data-target="dropdown1">How-to articles<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        
        {/* <ul className="sidenav" id="mobile-nav"> */}
        <ul id="slide-out" className="sidenav">

          <li><a href="#!">JAKKAJDKAKHDKA</a></li>
          <li><a href="#!">Portfolio</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;