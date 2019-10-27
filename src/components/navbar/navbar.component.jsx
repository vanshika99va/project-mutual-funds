import React from 'react'
//import './navbar.styles.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigatebar = ({changeRoute}) => {
    return (
        <Navbar bg="light" expang="lg">
            <Navbar.Collapse className='justify-content-end'>

                <Nav fill variant='tabs' defaultActiveKey='search' onSelect = {changeRoute}>
                    <Nav.Link eventKey="search" > Search </Nav.Link>
                    <Nav.Link eventKey="compare">Compare</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Navigatebar;
