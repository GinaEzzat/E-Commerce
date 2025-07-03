import React from 'react'
import './topPickes.css'
import '../Home/sideTable.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopPickes = () => {
   const navigate = useNavigate();
        const viewMoreBtn = () =>{
            navigate('/viewMore')
        }
  const [products, setProducts] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);

        // Example logic: pick products with a 'topPick' flag or based on ID
        const picks = data.products.filter(product => product.price > 450.0);
        setTopPicks(picks);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);
  return (
    <div className='topPickes'>
      <h1>
        Top Pickes For You
      </h1>
      <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      <div className='productsContainer'>
        {topPicks.map(product => (
          <div key={product.id} className='productCard'>
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
      <button className='Viewbtn' onClick={viewMoreBtn}>View More</button>
    </div>
  )
}

export default TopPickes