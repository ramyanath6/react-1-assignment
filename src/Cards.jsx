import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';


function Cards() {
  return (
    <div className='container' style={{backgroundColor: 'black' }}>
      <div className='row'>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img01.webp" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'green' }}>పప్పు ఆవకాయ </Card.Title>
              <Card.Text style={{ color: 'green' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'green' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'green' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'green' }} >500</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" >Diwali Offer</Card.Link>
              <Card.Link href="#" >Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
        <Card style={{ width: '18rem', backgroundColor: 'black' }}>
        <Card.Img variant="top" src="img2.jpeg" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'pink' }}>స్వీట్లు</Card.Title>
              <Card.Text style={{ color: 'pink' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'pink' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'pink' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'pink' }}>900</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'pink' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'pink' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img3.webp" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'olive' }}>Mixed Thali</Card.Title>
              <Card.Text style={{ color: 'olive' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'olive' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'olive' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'olive' }}>100</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'olive' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'olive' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img4.webp" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'orangered' }}>Vegan Food</Card.Title>
              <Card.Text style={{ color: 'orangered' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'orangered' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'orangered' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'orangered' }}>400</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'orangered' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'orangered' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img5.jpg" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'purple' }}>స్పైసి స్నాక్స్</Card.Title>
              <Card.Text style={{ color: 'purple' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'purple' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'purple' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'purple' }}>200</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'purple' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'purple' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img6.webp" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'orange' }}>చిరుతిల్లు</Card.Title>
              <Card.Text style={{ color: 'orange' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'orange' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'orange' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'orange' }}>600</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'orange' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'orange' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img7.webp" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'skyBlue' }}>Evening Snacks</Card.Title>
              <Card.Text style={{ color: 'skyBlue' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'skyBlue' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'skyBlue' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'skyBlue' }}>1000</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'skyBlue' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'skyBlue' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img8.jpeg" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'brown' }}>Hot Dogs</Card.Title>
              <Card.Text style={{ color: 'brown' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'brown' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'brown' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'brown' }}>800</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'brown' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'brown' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img9.webp" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'blue' }}>నిమ్మ కాయ నీళ్ళు</Card.Title>
              <Card.Text style={{ color: 'blue' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'blue' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'blue' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'blue' }}>400</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'blue' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'blue' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img10.jpeg" height={190} />
            <Card.Body>
              <Card.Title style={{ color: 'red' }}>టీ మరియు కాఫీ</Card.Title>
              <Card.Text style={{ color: 'red' }}>
                ఆహారం మీ ఔషధం మరియు ఔషధం మీ ఆహారంగా ఉండనివ్వండి.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'red' }}>సంప్రదాయ రుచులు</ListGroup.Item>
              <ListGroup.Item style={{ color: 'red' }}>ధర</ListGroup.Item>
              <ListGroup.Item style={{ color: 'red' }}>600</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'red' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'red' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img11.webp" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'Gray' }}>Bread and Sandwitch</Card.Title>
              <Card.Text style={{ color: 'Gray' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'Gray' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'Gray' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'Gray' }}>300</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'Gray' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'Gray' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='col'>
          <Card style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" src="img12.webp" height={210} />
            <Card.Body>
              <Card.Title style={{ color: 'lavender' }}>Pizza</Card.Title>
              <Card.Text style={{ color: 'lavender' }}>
                Let food be thy medicine and medicine be thy food.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ color: 'black' }}>Continental</ListGroup.Item>
              <ListGroup.Item style={{ color: 'black' }}>Price</ListGroup.Item>
              <ListGroup.Item style={{ color: 'black' }}>500</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" style={{ color: 'lavender' }}>Diwali Offer</Card.Link>
              <Card.Link href="#" style={{ color: 'lavender' }}>Grab Offer</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Cards
