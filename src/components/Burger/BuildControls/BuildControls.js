import React from 'react';
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    const priceToShow = (props.price + 4).toFixed(2);
    console.log(priceToShow);
    const disabled = parseFloat(priceToShow) === 4.00  ? true : false;
    return <div className={styles.BuildControls}>
        <h2>Total Price = {priceToShow}$</h2>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} 
            price = {props.prices[ctrl.type]}
            label={ctrl.label} 
            addButton = {() => (props.addButton(ctrl.type))}
            removeButton = {() => (props.removeButton(ctrl.type))}
            disabledInfo = {props.disabled[ctrl.type]}/>
        ))}
        <button className={styles.OrderButton} disabled={disabled} onClick={props.ordered}>ORDER NOW</button>
    </div>

};

export default buildControls;