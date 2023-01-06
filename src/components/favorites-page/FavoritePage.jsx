import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const FavoritePage = (props) => {
    const {username, items} = props;

  return (
    <>
        <div style={{display: `none`}}>
            <svg xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-arrow-select" viewbox="0 0 7 4">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
                </symbol>
                <symbol id="icon-bookmark" viewbox="0 0 17 18">
                    <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
                </symbol>
                <symbol id="icon-star" viewbox="0 0 13 12">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
                </symbol>
            </svg>
        </div>

        <div className="page">
            <header className="header">
                <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                    <Link className="header__logo-link" to='#'>
                        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                    </Link>
                    </div>
                    <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to='/'>
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">{username}</span>
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </header>

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        <ul class="favorites__list">
                            {items.map((it) => {
                                return (
                                <li key={it.id} className="favorites__locations-items">
                                    <div className="favorites__locations locations locations--current">
                                        <div className="locations__item">
                                            <Link className="locations__item-link" to="#">
                                                <span>{it.city}</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="favorites__places">
                                        {it.items.map((item) => {
                                            return (
                                                <article key={item.id} className="favorites__card place-card">
                                                    <div className="favorites__image-wrapper place-card__image-wrapper">
                                                        <Link to="#">
                                                            <img className="place-card__image" src={item.img} width="150" height="110" alt="Place image"/>
                                                        </Link>
                                                    </div>
                                                    <div className="favorites__card-info place-card__info">
                                                        <div className="place-card__price-wrapper">
                                                            <div className="place-card__price">
                                                                <b className="place-card__price-value">{item.price}</b>
                                                                <span className="place-card__price-text">{item.attribute}</span>
                                                            </div>
                                                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                                                    <use xlinkHref="#icon-bookmark"></use>
                                                                </svg>
                                                                <span className="visually-hidden">In bookmarks</span>
                                                            </button>
                                                        </div>
                                                    <div className="place-card__rating rating">
                                                        <div className="place-card__stars rating__stars">
                                                            <span style={{width: `100%`}}></span>
                                                            <span className="visually-hidden">Rating</span>
                                                        </div>
                                                    </div>
                                                        <h2 className="place-card__name">
                                                            <Link to="#">{item.name}</Link>
                                                        </h2>
                                                        <p className="place-card__type">{item.type}</p>
                                                    </div>
                                                </article>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    </section>
                </div>
            </main>
            <footer className="footer container">
                <Link className="footer__logo-link" to="main.html">
                <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
                </Link>
            </footer>
        </div>
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

FavoritePage.propTypes = {
    username: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(OfferCardType).isRequired,
        }),
    ),
};



export default FavoritePage
