import React from 'react';

//import './cardsContainer.styles.scss';

import MutualFundCard from '../card/card.component';

import {CardColumns} from 'react-bootstrap';

const CardsContainer = ({list, selectedForComparision, bringInForComparision, removeFromComparision}) => {
    
    return (
        <div style = {{margin:"6rem 8rem 8rem 4rem"}}>
            <CardColumns style = {{margin: '5 rem 5 rem 5 rem 5 rem'}}>
                {
                    list.map(mutualFund => (
                        <MutualFundCard 
                            key={mutualFund.id} 
                            {...mutualFund} 
                            selectedForComparision={selectedForComparision}
                            bringInForComparision={bringInForComparision}
                            removeFromComparision={removeFromComparision}/>
                    ))
                }
            </CardColumns>
        </div>
    )
}

export default CardsContainer;
