import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
 name: 'meals',
 initialState: [
   { name: 'Breakfast', cost: 50, selected: false },
{ name: 'High Tea', cost: 25, selected: false },
{ name: 'Lunch', cost: 65, selected: false },
{ name: 'Dinner', cost: 70, selected: false },
 
 ],
 reducers: {
   toggleMealSelection: (state, action) => {
       state[action.payload].selected = !state[action.payload].selected;
 },
 },
});

export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;

Solución parastore.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './VenueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
 reducer: {
   venue: venueReducer,
   av: avReducer,
   meals: mealsReducer,
 },
});
Solución paraTotalCost.jsx
import React, { useState, useEffect } from 'react';
import "./TotalCost.css";
const TotalCost = ({ totalCosts, ItemsDisplay }) => {
   const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;
   return (
       <div className="pricing-app">
           <div className="display_box">
               <div className="header">
                   <p className="preheading"><h3>Total cost for the event</h3></p>
               </div>
               <div>
               <h2 id="pre_fee_cost_display" className="price">
   ${total_amount}
</h2>
<div className="render_items">
   <ItemsDisplay />
</div>
               </div>
           </div>
       </div>
   );
};
export default TotalCost;
