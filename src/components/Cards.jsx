import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);


  return (
  
    
  // <Container className="mt-4 row">
  <div className='flex col-12 sm-col-2 md:col-3 lg-col-4'>
      {data.map((item) => (
          <div key={item.id} className="mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                  <div
                      style={{
                          height: '200px',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                      }}
                  >
                      <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.title}
                          style={{
                              maxHeight: '100%',
                              maxWidth: '100%',
                              objectFit: 'contain',
                          }}
                      />
                  </div>
                  <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                          {item.description}
                      </Card.Text>
                      <Button variant="primary">Buy Now</Button>
                  </Card.Body>
              </Card>
          </div>
      ))}
  </div>
// </Container>
);

  
}

export default Cards