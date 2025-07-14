import React from 'react';
import './ShowcaseGrid.css';
import { ShowcaseData } from './ShowcaseData';

const ShowcaseGrid = () => {
  return (
    <ul>
      {ShowcaseData.map((showcase, index) => (
        <li className={showcase.brand} key={index}>
          <div>
            <h2>{showcase.title}</h2>
            <p>{showcase.price}</p>
          </div>
          <img src={showcase.img} alt={showcase.title} />
        </li>
      ))}
    </ul>
  );
};

export default ShowcaseGrid;
