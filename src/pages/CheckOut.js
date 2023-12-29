import React, { useState } from 'react';
import Header from '../components/header';
import { Form } from '../components/form';
import { Items } from '../components/items';
import ShowProduct from "../components/showItems"

function CheckOut() {
  const [showItems, setShowItems] = useState(false)
  const [transportCost, setTransportCost] = useState(null)
  const updateCost = (newCost) => {
    setTransportCost(newCost);
  };

  const setProduct = (value) => {
    setShowItems(value)
  }

  return (
    <div className='flex h-screen w-screen bg-black grid-cols-3'>
      <Header setShowItems={setProduct} />
      {/* the content form  */}
      <Form setCost={updateCost} setShowItems={setProduct} />
      {/* items contents */}

      <Items transCost={transportCost} />


      {showItems == true && <ShowProduct setShowItems={setProduct} />}
    </div>
  );

}

export default CheckOut;
