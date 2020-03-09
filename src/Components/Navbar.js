import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="NavContent">

       
        <Container>
            <Row>
                <Col>
                <Button variant="primary"><Link to="/">Acceuil / Home</Link></Button>
                <Button variant="primary"><Link to="/infos">Voyage</Link></Button>
                <Button variant="primary"><Link to="/contact">Contact</Link></Button>
                <Button variant="primary"><Link to="/login">Connexion / Log in</Link></Button>
                <Button variant="primary"><Link to="/signup">Inscription / Sign Up</Link></Button>

                </Col>
            </Row>
        </Container>
        </div>
      </div>
    )
  }
}

export default Navbar
