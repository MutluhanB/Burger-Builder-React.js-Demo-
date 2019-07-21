import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationsItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleHandler}/>
            <div className = {styles.Logo}>
                <Logo/>
            </div>
        <nav className={styles.DesktopOnly}>
            
               <NavigationItems/>
        </nav>
    </header>

);

export default toolbar;