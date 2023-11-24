import React from 'react';

import Header from './Pages/header';
import { Form } from './Pages/form';
import { Items } from './Pages/items';


function CheckOut() {
 
  return (
    
    // should add break points 
    //sm , md , lg ,xl , 2xl 
    <div className='flex h-screen w-screen bg-black grid-cols-3'>

       <Header />
       {/* the content form  */}
       <Form/>
       {/* items contents */}
       <Items/>

    
    </div>
  );

}

export default CheckOut;
