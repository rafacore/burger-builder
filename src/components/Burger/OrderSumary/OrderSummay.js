import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';



const orederSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return(
            <li key={igKey} >
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });
    
    return (
        <Aux>
            <h3>
                your order
            </h3>
            <p> a delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
                 <p><strong>Total price:</strong>{props.price.toFixed(2)}</p>

                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </ul>
        </Aux>
    )
}
export default orederSummary;