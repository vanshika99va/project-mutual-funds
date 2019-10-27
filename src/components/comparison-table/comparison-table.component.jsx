import React from 'react';

import './comparison-table.styles.scss';

import { Table } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';
import {Card} from 'react-bootstrap';

export const ComparisonTable = ( {fundsToBeCompared} ) => {
     console.log(fundsToBeCompared);
    return (
        <div className= 'comparision-table'>
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
                        ({id, name, category, rating, return_3yr, return_5yr,riskometer}) =>
                            (<tr key={id}>
                                <Accordion defaultActiveKey='0'>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        
                                            <td> {name} </td>
                                            <td> {category} </td>
                                            <td> {rating} </td>
                                            <td> {return_3yr} </td>
                                            <td> {return_5yr} </td>
                                        
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey='1'>
                                        <Card.Body>
                                            <tr key={id}>
                                                <td><b> Min. Subscription : </b></td>
                                                <td>  minimun_investment</td>
                                                <td><b> Risk : </b></td>
                                                <td> {riskometer}</td>
                                            </tr>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            </tr>)
                        )} 
                          
                </tbody>
                
            </Table>
            
        </div>
    );
}

