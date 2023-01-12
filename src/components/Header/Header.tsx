import React, { Fragment } from "react";
import CartButton from "./CartButton";
import headerImage from "../../assets/meals.jpg";

type propFunction = {
    onShowCart: () => void
}

const Header = (props:propFunction) => {
  return(
    <Fragment>
        <header data-testid="header-text" className="header">
            <h1>React Meals</h1>
            <CartButton onClick={props.onShowCart}></CartButton>
        </header>
        <div className="main-image">
            <img src={headerImage} alt="Go ahead and quench you thirst for Delecious Food"></img>
        </div>
    </Fragment>
);
}

export default Header;
