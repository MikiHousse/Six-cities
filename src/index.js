import React from "react";
import ReactDom from 'react-dom';

import App from "./components/app/App";
import {OfferCards, Username, MainTitle, Sort, CitiesList, FavoritesList} from './mock-data'

ReactDom.render(
    <App offersCards={OfferCards}
      username={Username}
      mainTitle={MainTitle}
      sort={Sort}
      citiesList={CitiesList}
      favoritesList={FavoritesList}/>,
    document.getElementById(`root`),
)
