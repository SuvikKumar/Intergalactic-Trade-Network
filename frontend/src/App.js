import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        axios.get('/api/trades')
            .then(response => setTrades(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="App">
            <h1>Intergalactic Trade Network</h1>
            <ul>
                {trades.map(trade => (
                    <li key={trade._id}>
                        {trade.item} - {trade.amount} units (Buyer: {trade.buyer.name}, Seller: {trade.seller.name})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
