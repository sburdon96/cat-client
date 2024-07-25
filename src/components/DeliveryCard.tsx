import React from 'react';
import './DeliveryCard.css';
import { DeliveryData } from '../types';
import { DEFAULT_CAT_IMG } from '../constants';

interface DeliveryCardProps {
  data: DeliveryData;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ data }) => {
  return (
    <div className="delivery-card">
      <div className="image-container">
        <img 
          src={DEFAULT_CAT_IMG}
          alt="Cat" 
        />
      </div>
      <div className="content-container">
        {data.freeGift && <div className="free-gift">FREE GIFT</div>}
        <h2>{data.title}</h2>
        <p>{data.message}</p>
        <p className="total-price">Total price: £{data.totalPrice.toFixed(2)}</p>
        <div className="button-container">
          <button className="details-button">SEE DETAILS</button>
          <button className="edit-button">EDIT DELIVERY</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
