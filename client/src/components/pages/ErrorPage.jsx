import React, { useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000)
    return () => clearTimeout(timer);
  },[navigate])


  return (
    
    <Container  className="d-flex justify-content-center align-items-center" >
<div >
          <Image src="../../../public/img/photo_5249117529920626948_y.jpg" style={{height: "750px"}}/>
          
          </div>

       

    </Container>
  
  )
}
