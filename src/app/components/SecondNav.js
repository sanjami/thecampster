import React from 'react';
import { Link } from 'react-router-dom';

const SecondNav = (props) => {
    return  <React.Fragment>
    {props.page.links.map((element, i) => (
      <li key={i} className="top-menu">
        <Link to={`/${props.page.name}/${element.path}`}>{element.disp}</Link>
      </li>
    ))}
  </React.Fragment>
}

export default SecondNav;