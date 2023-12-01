import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './js/CheckOut';
import OrderPlaced from './js/Pages/Order_Place';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact component={<CheckOut />} />
                    <Route path="/order" component={<OrderPlaced />} />
                </Routes>
                {/* <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav> */}

                {/* <Route path="/order" component={OrderPlaced} /> */}
            </div>
        </Router>
    );
};

export default App;