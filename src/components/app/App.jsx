import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../main-page/MainPage";
import SingInPage from "../sign-in-page/SignInPage"
import FavoritePage from "../favorites-page/FavoritePage";
import OfferPage from "../offer-page/OfferPage"
import NotFoundPage from "../not-found-page/NotFoundPage"


const App = (props) => {
  const {username, mainTitle, sort, citiesList, offersCards, favoritesList} = props;
    return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact>
                <MainPage username={username}
                  title={mainTitle}
                  sort={sort}
                  selectedSort={sort[0]}
                  citiesList={citiesList}
                  selectedCity={citiesList[3]}
                  offersCards={offersCards}/>
              </Route>
              <Route path='/login' exact>
                <SingInPage/>
              </Route>
              <Route path='/favorites' exact>
                <FavoritePage username={username}
                  items={favoritesList}/>
              </Route>
              <Route path='/offer/:id' exact>
                <OfferPage/>
              </Route>
              <Route>
                <NotFoundPage/>
              </Route>
            </Switch>
          </Router>
        </>
    );
};

const OfferCardType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  mark: PropTypes.string,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired,
  hasBookmark: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});


App.propTypes = {
  username: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),

  mainTitle: PropTypes.string.isRequired,
  sort: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ),

  offersCards: PropTypes.arrayOf(OfferCardType),
  favoritesList: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(OfferCardType).isRequired
    }),
  ),
};

export default App;
