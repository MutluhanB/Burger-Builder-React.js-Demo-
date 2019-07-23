import React from 'react';
import styles from './BuildControl.module.css';



const buildControl = (props) => (
    
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label} ({props.price}$)</div>
        <button 
        className={styles.Less} 
        onClick={props.removeButton}
        disabled={props.disabledInfo}>Less</button>
        <button 
        className={styles.More} 
        onClick={props.addButton}>More</button>
    </div>

);

export default buildControl;