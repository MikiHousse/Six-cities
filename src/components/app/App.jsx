import React from "react";
import PropTypes from 'prop-types'

import MainPage from "../main-page/MainPage";

const App = ({offersCards}) => {
    return (
        <>
            <MainPage offersCards={offersCards}/>
        </>
    );
};

App.PropTypes = {
    offersCards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            mark: PropTypes.string,
            href: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            attribute: PropTypes.string.isRequired,
            hasBookmark: PropTypes.bool,
            rating: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }).isRequired
    )
}

export default App;
