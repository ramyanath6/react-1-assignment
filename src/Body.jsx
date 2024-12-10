import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';

function Body() {
    return (
        <div className='container' style={{ backgroundColor: 'black' }}>
            <div className='row'>
                <h5 style={{ color: 'white' }}> Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions. Historical events such as invasions, trade relations, and colonialism have played a role in introducing certain foods to this country.</h5>
                <div className='col'><Card.Img variant="top" src="main4.jpeg" height={400} /><br></br><br></br><br></br><br></br>
                    <Card.Img variant="top" src="main1.jpg" height={400} /></div>
                <div className='col'>
                    <h5 style={{ color: 'white' }}>Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.
                        <Card.Img variant="top" src="main.jpg" height={190} />


                        Historical events such as invasions, trade relations, and colonialism have played a role in introducing certain foods to this country. The Columbian discovery of the New World brought a number of new vegetables and fruits to India. A number of these such as potatoes, tomatoes, chillies, peanuts, and guava have become staples in many regions of India.

                        <Card.Img variant="top" src="main2.jpeg" height={190} />


                        Indian cuisine has shaped the history of international relations; the spice trade between India and Europe was the primary catalyst for Europe's Age of Discovery. Spices were bought from India and traded around Europe and Asia. Indian cuisine has influenced other cuisines across the world, especially those from Europe, the Middle East, Southern African, East Africa, Southeast Asia, North America, Mauritius, Fiji, Oceania, and the Caribbean.</h5>



                </div>
                <div className='col'><Card.Img variant="top" src="main3.jpeg" height={400} /><br></br><br></br><br></br><br></br>
                    <Card.Img variant="top" src="main4.jpeg" height={400} /></div>
            </div>

        </div>
    )
}

export default Body