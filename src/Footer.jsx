import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';

function Footer() {
    return (

        <div className='container' style={{ backgroundColor: 'black' }}>
            <div className='row'>
                <div className='col' style={{ color: 'gray' }}>
                    <h5>Head Office</h5>
                    <h6>Hyderabad </h6>
                    <h6>Hi-Tech City</h6>
                    <h6>plot no:1-106</h6>
                    <h6>Near Tech Park</h6>
                </div>
                <div className='col' style={{ color: 'gray' }}>
                    <h5>Follow us</h5>
                    <Card.Img variant="top" src="social2.jpg"  height={100} width={100}  style={{ marginLeft: '-90px' }}  />


                </div>

                <div className='col' style={{ color: 'gray' }}>
                    <h5>Support</h5>
                    <h6>24/7 support</h6>
                    <h6>మన ఇంటిరుచులు help Center</h6>
                    <h6>Free Home Delivery</h6>
                    <h6>Cash On Delivery</h6>
                </div>

                <div className='col' style={{ color: 'gray' }}>
                    <h5>Open Hours</h5>
                    <h6>Sat and Sun</h6>
                    <h6>24/7 hours</h6>
                    <h6>Mon-Fri</h6>
                    <h6>08:AM-11:00PM</h6>
                </div>
            </div>

            <br>
            </br><br>
            </br>
            <h5 style={{ color: 'gray', marginLeft: 450 }}>Copyrights© <span style={{ color: 'blue' }}>మన ఇంటిరుచులు</span>. All rights Reserved</h5>
            <h5 style={{ color: 'gray', marginLeft: 530 }}>Designed By Davineni Ramya</h5>
        </div>

    )
}


export default Footer