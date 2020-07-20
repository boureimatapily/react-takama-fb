import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link, NavLink } from 'react-router-dom'
>>>>>>> 6ebf34dec12c1e5831edf46189cf39416f6a8d2e

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
