import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
           return <BurgerIngredient key={ingKey + i} type={ingKey}/>
        });
    });
    
    const reducedIngredientsArray = ingredientsArray.reduce((array, element) => {
        return array.concat(element); 
    },[])

    if(reducedIngredientsArray.length === 0 ){
        ingredientsArray = <p>Please start adding ingredients !</p>
    }
    
    return (
        <React.Fragment>
            <div className={styles.Burger}>
                <BurgerIngredient type = "bread-top"/>
                {ingredientsArray}
                <BurgerIngredient type = "bread-bottom"/>
            </div>
        </React.Fragment>
    );
};

export default burger;