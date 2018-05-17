import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SecondNav from '../components/SecondNav.js';

const menus = [
  { name: "newsfeed", links: [{ path: 'forum', disp: 'Forum' }, { path: 'info', disp: 'Info tabla' }, { path: 'biz', disp: 'Biz & Edu' }] },
  { name: "ponuda", links: [{ path: 'kursevi', disp: 'Svi kursevi' }, { path: 'akcija', disp: 'Akcija' }, { path: 'edupass', disp: 'Edupass' }] },
  { name: "ucenje", links: [{ path: 'pregled', disp: 'Pregled' }, { path: 'start', disp: 'Startuj učenje' }, { path: 'aktivnosti', disp: 'Aktivnosti' }] },
  { name: "kampsteri", links: [{ path: 'najkampsteri', disp: 'Najkampsteri' }, { path: 'kampGrupe', disp: 'Kamp grupe' }] }
];


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      divVisible: false,
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { divVisible: !prevState.divVisible };
    });
  }

  handleClose = (event) => {
    this.setState({
      divVisible: false
    });
  }

  render() {
    let str = window.location.hash;
    let subst = str.substring(str.indexOf("/") + 1, str.length);
    let page = subst.substring(0, subst.indexOf("/") > 0 ? subst.indexOf("/") : subst.length);
    let links = menus.filter(menu => menu.name === page);
    let renderNav = links.length ? <SecondNav page={links[0]} /> : <SecondNav page={menus[0]} />

    return <nav id="navTop">
      <ul id="left">
        <li id="logo">
          <Link to="/newsfeed">
            <img src="https://www.thecampster.com/img/sr-Latn/logo.png" height="40px" alt="kampster" />
          </Link>
        </li>
        <li className="top-menu fix-menu">
          <Link to="/ponuda/kursevi">
            Ponuda kurseva
          </Link>
        </li>
      </ul>

      <ul id="center" onClick={this.handleClose}>
        {renderNav}
      </ul>

      <ul id="right">
        <li className="top-menu">
          <Link to="/ponuda/kursevi">
            <i className="far fa-bell"></i>
          </Link>
        </li>
        <li className="top-menu">
          <Link to="/ponuda/kursevi" >
            <i class="fa fa-plus-circle"></i>
            15
          </Link>
        </li>
        <li className="btn-li top-menu">
          <button onClick={this.handleClick}>
            <span id="smallbtn">S</span>
            <span className={this.state.divVisible ? 'invisible' : 'span-visible'}><i className="fa fa-angle-down"></i></span>
            <span className={this.state.divVisible ? 'span-visible' : 'invisible'}><i className="fa fa-angle-up"></i></span>
          </button>
        </li>
      </ul>

      <div className={this.state.divVisible ? 'visible' : 'invisible'} onClick={this.handleClose}>
        <div className="intra">
          <ul>
            <li id="li-bigbtn">
              <Link to="/profil" >
                <div id="bigbtn">S</div>
              </Link>
            </li>
            <li id="points">10 poena</li>
          </ul>


          <ul>
            <li className="nav-item">
              <Link to="/newsfeed" className="main-nav">
                Newsfeed
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/ponuda" className="main-nav">
                Ponuda
            </Link>
            </li>
            <li className="nav-item ">
              <Link to="/ucenje" className="main-nav">
                Ucenje
            </Link>
            </li>
            <li className="nav-item ">
              <Link to="/kampsteri" className="main-nav">
                Kampsteri
            </Link>
            </li>
          </ul>


          <ul>
            <li className="title"><strong>Moji kursevi</strong>
            </li>
            <li className="nav-item">
              <Link to="/ucenje/mojkurs">
                Rezilijentnost
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/ucenje/svikursevi" >
                Pogledaj sve
            </Link>
            </li>
          </ul>


          <ul>
            <li className="title">
              <strong>
                Forum
            </strong>
            </li>
            <li className="nav-item">
              <Link to="/newsfeed/forum" >
                Forum
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/newsfeed/info">
                Info tabla
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/newsfeed/bizedu">
                Biz i edukacija
            </Link>
            </li>
          </ul>


          <ul>
            <li className="title">
              <strong>
                Profil
            </strong>
            </li>
            <li className="nav-item">
              <Link to="/profil/pregled" >
                Pregled
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/profil/notifikacije" >
                Notifikacije
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/profil/podesavanje">
                Podešavanje profila
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/profil/logout">
                Odjavi se
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}

export default Header;