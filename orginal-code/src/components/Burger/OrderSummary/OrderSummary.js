import React, {Component} from 'react';
import Button from '../../ui/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() { 
        console.log("order sum will update");
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return <li key ={key}> {key}: {this.props.ingredients[key]}</li>
        });
        return(
            <React.Fragment>
                <h3>Your Order::git</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout ?</p>
                <h3>Total Price: {this.props.price.toFixed(2)}$</h3>
                <Button buttonType = "Danger" clicked={this.props.cancelButtonHandler}>CANCEL</Button>
                <Button buttonType = "Success" clicked={this.props.continueButtonHandler}>CONTINUE</Button>
            </React.Fragment>
    
        );
    }
};

export default OrderSummary;