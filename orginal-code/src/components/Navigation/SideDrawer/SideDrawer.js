import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationsItems';
import styles from './SideDrawer.module.css';
import BackDrop from '../../ui/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked = {props.closedHandler} />
            <div className = {attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>

    );
}

export default sideDrawer;