import React from 'react';
import Header from './Pages/header';
import { Form } from './Pages/form';



function CheckOut() {

  return (

    <div className='flex h-screen w-screen bg-black grid-cols-2'>
      <Header />
      {/* the content form  */}
      <Form />
      {/* items contents */}

      {/* <Items /> */}
    </div>
  );

}

export default CheckOut;
