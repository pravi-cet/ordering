import React from 'react';
import classes from './B.css';
import BIngredient from './Ingredient/Ingredient';

const B = (props) => {
  let arrIngredients = Object.keys(props.ingredients)
                            .map(igKey =>{
                                return [...Array(props.ingredients[igKey])].map((_, i) =>
                                <BIngredient key={igKey + i} type={igKey} />
                              )
                            })
                            .reduce((arr, el) => { //arr - prev value, el new value
                              return arr.concat(el);
                            }, [] ); //initial value is blank array
  if (arrIngredients.length === 0){
    arrIngredients = <p>Please start adding ingredients</p>
  }
  return (
    <div className={classes.B}>
      <BIngredient type="bread-top" />
      {arrIngredients}
      <BIngredient type="bread-bottom" />
    </div>
  );

}

export default B;
