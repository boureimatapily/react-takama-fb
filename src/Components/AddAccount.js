import React from 'react'
<<<<<<< HEAD
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import { connect} from 'react-redux'
import   {addNewAccount}  from './redux/actions/CatActions'
=======
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect} from 'react-redux'
import   {addNewAccount}  from './redux/actions/CatActions'
import { bindActionCreators } from 'redux'
>>>>>>> 6ebf34dec12c1e5831edf46189cf39416f6a8d2e
import { Link } from 'react-router-dom'

class AddAccount extends React.Component{

    addAccount = (event)=>{
        event.preventDefault()
        let account = {
           // id: Math.random().toString(36).substr(2, 5),
            userName:event.target.elements.userName.value,
            depart:event.target.elements.depart.value,
            arrival:event.target.elements.arrival.value,
            colis:event.target.elements.colis.value,
            date:event.target.elements.date.value,
            num:event.target.elements.num.value,
            
        }
        console.log(account)
        this.props.addNewAccount(account)
        this.props.history.push('/')
    }

        render(){
           
            return(
                <div>
                        <div className="headerContent">
                <Container>
               <br/> <Link to="/"><Button>Retour</Button></Link>
                    <Row>

                        <Col  lg={{offset: 2 }} >
                            <Form onSubmit={this.addAccount}>
                                <Form.Group as={Row} controlId="userName">
                                    <Form.Label column lg={3}>
                                       Nom / Name
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="text" name="userName"
                                             placeholder="Votre Nom / Your Name"
                                             />
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="num">
                                    <Form.Label column lg={3}>
                                    N. Telephone / Phone Number
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="number" name="num"
                                              placeholder="+22376124885"
                                             />
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="depart">
                                    <Form.Label column lg={3}>
                                       Lieu de Depart / Departure
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control as="select" name="depart">
                                        <option >Clicker pour choisir</option>
                                        <option >Accra</option>
                                        <option >Kumasi</option>
                                        <option >Bamako</option>
                                        </Form.Control>
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="arrival">
                                    <Form.Label column lg={3}>
                                       Lieu d'Arriver / Arrival
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control as="select" name="arrival">
                                        <option >Clicker pour choisir</option>
                                        <option >Accra</option>
                                        <option >Kumasi</option>
                                        <option >Bamako</option>
                                        </Form.Control>
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="colis">
                                    <Form.Label column lg={3}>
                                       Nombre de colis
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="number" name="colis"
                                             placeholder="0"
                                             />
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="date">
                                    <Form.Label column lg={3}>
                                       Date de Depart
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="date" name="date"
                                             
                                             />
                                    </Col>                                
                                </Form.Group>


                                <Button variant="primary" type="submit">Ajouter</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>

                </div>
                </div>

            )
        
        }
        
}

const mapDispatchToProps = {
    addNewAccount
}

export default connect(null, mapDispatchToProps)(AddAccount)
