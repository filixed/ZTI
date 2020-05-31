import React, {Component} from 'react';
import Auxil from '../../hoc/Auxilary'

import Sandwitch from '../../comptonents/Sandwitch/Sandwitch'
import BuildControl from '../../comptonents/Sandwitch/BuildControls/BuildControls'
import Modal from '../../comptonents/UI/Modal/Modal'
import OrderSummary from '../../comptonents/Sandwitch/OrderSummary/OrderSummary'


const Ceny = {
    salata:1,
    szynka: 3,
    ser:2
}


class SandwitchBuilder extends Component {

    state = {
        ingridients: {
            salata:0,
            szynka: 0,
            ser:0
        },
        cena: 2,
        purchasable: false,
        purchasing: false
    }

    udpatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map (igKey => {
            return ingredients[igKey];
        })
        .reduce ( (sum, el) => {
            return sum + el;
        }, 0)

       this.setState( {purchasable: sum>0});

    }

    addIngridient = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCounted = oldCount +1;
        const updatedIngridient = {
            ...this.state.ingridients
        }
        updatedIngridient[type] = updatedCounted;
        const price = Ceny[type];
        const oldprice = this.state.cena
        const newPrice = oldprice + price;
        this.setState({cena: newPrice, ingridients: updatedIngridient})
        this.udpatePurchaseState(updatedIngridient)

    }
    
    removeIngridient = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCounted = oldCount - 1;
        const updatedIngridient = {
            ...this.state.ingridients
        }
        updatedIngridient[type] = updatedCounted;
        const price = Ceny[type];
        const oldprice = this.state.cena
        const newPrice = oldprice - price;
        this.setState({cena: newPrice, ingridients: updatedIngridient})
        this.udpatePurchaseState(updatedIngridient)
    }

    pruchaseHandler = () => {
        this.setState({purchasing: true})
    }

    backdropHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinued = () => {
        alert('Kontynuujesz zakup!')
    }

    render (){
        const disableInfo = {
            ...this.state.ingridients
        }
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Auxil>
                <Modal show={this.state.purchasing} modalClosed={this.backdropHandler} >
                    <OrderSummary ingredients={this.state.ingridients} 
                    price={this.state.cena}
                    purchaseCencel= {this.backdropHandler}
                    purchaseContinue={this.purchaseContinued}
                    />
                </Modal>
                <Sandwitch ingridients={this.state.ingridients} 
                
                />
                <BuildControl 
                ingridientAdd={this.addIngridient}
                ingridientRem={this.removeIngridient} 
                disabled={disableInfo} 
                purchable={this.state.purchasable}
                order={this.pruchaseHandler}
                price={this.state.cena}
                />
            </Auxil>
        )
    }
}

export default  SandwitchBuilder;