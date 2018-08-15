import React from 'react';
import classes from './B.css';
import BIngredient from './Ingredient/Ingredient';

const B = (props) => {
  const arrIngredients = Object.keys(props.ingredients)
                            .map(igKey =>{
                                return [...Array(props.ingredients[igKey])].map((_, i) =>
                                <BIngredient key={igKey + i} type={igKey} />
                              )
                            });
  return (
    <div className={classes.B}>
      <BIngredient type="bread-top" />
      {arrIngredients}
      <BIngredient type="bread-bottom" />
    </div>
  );

}

export default B;
