import React,{Fragment} from 'react';
import './Comparision.styles.scss';

import {ComparisonTable} from '../../components/comparison-table/comparison-table.component';
import {Button} from 'react-bootstrap';

const ComparisonPage = ({fundsToBeCompared, clearFunds}) => {
    
    return (
        <Fragment>
            <h4 style={{margin:'30 rem 5 rem 5 rem 10 rem'}}><center> Comparision Table </center> </h4>
            <div className='comparision-page' style={{ margin:'5 rem 5 rem 5 rem 10 rem'}}>
            { (fundsToBeCompared.length)
                    ?   <ComparisonTable
                            fundsToBeCompared = {fundsToBeCompared}
                        />
                    : <div> <h1> No mutual funds selected! </h1> </div>
            }
            {
                fundsToBeCompared.length>0 ? 
                < Button variant="secondary" onClick= {clearFunds}> CLEAR </Button> : null
            }        
            </div>
        </Fragment>
    )
}

export default ComparisonPage;