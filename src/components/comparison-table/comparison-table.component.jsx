import React from 'react';

import './comparison-table.styles.scss';

import { Table } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';
import {Card} from 'react-bootstrap';

export const ComparisonTable = ( {fundsToBeCompared} ) => {
     console.log(fundsToBeCompared);
     return (
        <div className= 'comparision-table'>
        <Accordion>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>3 yr return</th>
                        <th>5 yr return</th>
                    </tr>
                </thead>
                <tbody>
                    {fundsToBeCompared.map(
                        ({id, minimum_investment, name, category, rating, return_3yr, return_5yr, riskometer}) =>
                            (<Fragment>
                                <Accordion.Toggle as="tr" id={"rows"+id} eventKey={id} onClick={(a) => {
                                var i;
                                for(i = 0; i < fundsToBeCompared.length; i++){
                                    if(a.currentTarget.id.slice(4,a.currentTarget.id.length)==fundsToBeCompared[i].id){}
                                    else{
                                        document.getElementById("row"+fundsToBeCompared[i].id).style.display="none";
                                    }
                                }
                                    document.getElementById("row"+a.currentTarget.id.slice(4,a.currentTarget.id.length)).style.display=document.getElementById("row"+a.currentTarget.id.slice(4,a.currentTarget.id.length)).style.display==="none"?"":"none";}}>
                                <td>
                                 {name}  </td>
                                            
                                            <td> {category} </td>
                                            <td> {rating} </td>
                                            <td> {return_3yr} </td>
                                            <td> {return_5yr} </td>
                            </Accordion.Toggle>
                            <tr id={"row"+id} style={{display:"none"}}>
                                <td colSpan="5"><Accordion.Collapse eventKey={id}>
                                    <Fragment><b> Min. Subscription : </b>
                                  {minimum_investment}
                                <b> Risk : </b>
                                 {riskometer}</Fragment></Accordion.Collapse>
                                </td>
                            </tr>
                    </Fragment>)
                        )}   
                </tbody>
                
            </Table>
        </Accordion>  
            
        </div>
    );
}

