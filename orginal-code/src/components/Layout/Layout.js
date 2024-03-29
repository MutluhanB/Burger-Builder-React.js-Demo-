import React, {Component} from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
        <React.Fragment>
            <Toolbar drawerToggleHandler = {this.sideDrawerToggleHandler}/>
            <SideDrawer open = {this.state.showSideDrawer} 
            closedHandler = {this.sideDrawerClosedHandler}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </React.Fragment>

        )

    }
  

};

export default Layout;  