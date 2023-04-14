import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink exact activeClassName={classes.active} to="/home">Home</NavLink>
        <NavLink activeClassName={classes.active} to="/store">Movies</NavLink>
        {/* <NavLink activeClassName={classes.active} to="/about">ABOUT</NavLink> */}
        <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
        <NavLink activeClassName={classes.active} to="/contactUs">Contact Customer Care</NavLink>
        <CartButton onClick={props.onShow} data={props.data}/>
      </header>
      <HeaderBottom />
    </Fragment>
  );
};

export default Header;
