import React from 'react';

const topCategory = ['Mr', 'Mrs', 'Ms', 'Sir'];
 
export default class DropDown extends React.Component {
  
  navList = topCategory.map(navList => {
    return ( 
      <button className = "btn btn-primary dropdown-toggle mr-1"
      data-toggle = "dropdown"
      type = "button">
      {
        navList
      } 
      </button>
    );
  })
}
