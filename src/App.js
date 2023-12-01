import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CheckOut from './js/CheckOut';
// import CheckOut from './js/CheckOut';
// import OrderPlaced from './js/Pages/Order_Place';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>

                    <Route path="/"  >
                        <CheckOut />

                    </Route>
                    {/* <Route path="/order" component={<OrderPlaced />} /> */}


                </Routes>
            </Router>
        </div>
    );
};

export default App;