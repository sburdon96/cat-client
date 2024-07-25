import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DeliveryCard from './DeliveryCard';
import './WelcomePage.css';
import { DeliveryData } from '../types';

const WelcomePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [data, setData] = useState<DeliveryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comms/your-next-delivery/${userId}`);
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="welcome-page">
      <DeliveryCard data={{
        title: data.title,
        message: data.message,
        totalPrice: data.totalPrice,
        freeGift: data.freeGift,
      }} />
    </div>
  );
};

export default WelcomePage;
