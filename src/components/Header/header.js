import React from "react";
import './header.css'
import { HiSearch } from 'react-icons/hi'
import img from '../../images/edyoda_transparent_logo.55bcc00f.png'
export default function Header(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={img} alt=""/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="twodown">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="program">
            Programs
          </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <HiSearch id="sicon" size={25}></HiSearch>
        <button class="btn btn-outline-none" id="login">Log in</button>
        <button class="btn btn-outline" type="submit" id="join">JOIN NOW</button>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
}