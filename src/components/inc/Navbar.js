import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"style={{ fontSize: 50 }}><b>PEC CHRONICLES</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{ fontSize: 30 }}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about" style={{ fontSize: 30 }}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" style={{ fontSize: 30 }}>Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;