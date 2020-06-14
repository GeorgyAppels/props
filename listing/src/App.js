import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Listing(props) {
  let offers = props.items.map(function(item) {
    return (
      <ListingItem title={item.title} url={item.url} cur={item.currency_code}
      price={item.price} quantity={item.quantity} 
      mainImage={item.MainImage} />
    )
  })
  return (
    <div className="item-list">
      {offers.map((offer) => offer)}
    </div>
  )
}

function ListingItem(props) {
  const {title, url, cur, price, quantity, mainImage} = props;
  let priceOutput = function(cur, price) {
    if (cur === 'USD') {
      return `$ ${price}`;
    }
    if (cur === 'EUR') {
      return `€ ${price}`;
    }
    return `${price} ${cur}`;
  } 
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={mainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{priceOutput(cur, price)}</p>
        <p className={(quantity <= 10) ? "item-quantity level-low" :
                      (quantity <= 20) ? "item-quantity level-medium" :
                      "item-quantity level-high"}>{quantity} left</p>
      </div>
    </div>
  )
}


ListingItem.defaultProps = {
  title: 'Товар недоступен',
  url: 'about: blank',
  cur: '',
  price: '',
  quentity: '',
  mainImage: {url_570xN: 'img/nopic.png'}
};


ListingItem.propTypes = {
  title: PropTypes.string
};

export default Listing;
