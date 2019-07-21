import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_COSTS = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.2,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    state = {
         ingredients : {
             salad : 0,
             bacon: 0,
             cheese: 0,
             meat: 0,
         },
         totalPrice: 0,
         purchasing: false,
     }
    
    purchaseHandler = () => {
        this.setState({purchasing: true});

    }
    addIngredientHandler = (type) => {
        console.log('add ingredient handler',type);
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newIngredientCount;
        console.log(updatedIngredients);
        const additionalCost = INGREDIENT_COSTS[type];
        this.setState({ingredients: updatedIngredients,totalPrice: this.state.totalPrice + additionalCost})
        console.log(this.state)
    }

    removeIngredieantHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount - 1; 
        if(oldIngredientCount <= 0){
            return
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newIngredientCount;
        console.log(updatedIngredients);
        const deductionCost = INGREDIENT_COSTS[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice - deductionCost;
        this.setState({ingredients: updatedIngredients,totalPrice: newPrice})
        console.log(this.state)

    }

    closeModalHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        alert('Your Order Has Been Placed Successfully');
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed = {this.closeModalHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                     cancelButtonHandler = {this.closeModalHandler} 
                     continueButtonHandler = {this.purchaseContinueHandler}
                     price={parseFloat(this.state.totalPrice + 4)}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                price = {this.state.totalPrice}
                addButton = {this.addIngredientHandler} 
                removeButton ={this.removeIngredieantHandler}
                ordered = {this.purchaseHandler}
                prices = {INGREDIENT_COSTS}
                disabled={disabledInfo}/>
            </React.Fragment>

        ); 

    }

 }

export default BurgerBuilder;