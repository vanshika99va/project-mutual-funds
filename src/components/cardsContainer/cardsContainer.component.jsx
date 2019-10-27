import React from 'react';

//import './cardsContainer.styles.scss';

import MutualFundCard from '../card/card.component';

import {CardColumns} from 'react-bootstrap';

const CardsContainer = ({list, selectedForComparision, bringInForComparision, removeFromComparision}) => {
    
    return (
        <div style = {{margin:"10rem 10rem 10rem 10rem"}}>
            <CardColumns>
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
