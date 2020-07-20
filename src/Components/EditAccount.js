import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  editAccount } from './redux/actions/CatActions'
import { Link } from 'react-router-dom'

class EditAccount extends React.Component {

    updateAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: this.props.match.params.id,
            userName:event.target.elements.userName.value,
            depart:event.target.elements.depart.value,
            arrival:event.target.elements.arrival.value,
            colis:event.target.elements.colis.value,
            date:event.target.elements.date.value,
            num:event.target.elements.num.value,

        }
        this.props. editAccount(account)
        this.props.history.push('/')
    }

    render() {
        const id = this.props.match.params.id
        console.log(id)
        let account = this.props.accounts.find(item => {
            return item.id === id
        })
        console.log(account)

        return (
            <div>
                        <div className="headerContent"> <br/>
                <Container>
                    <Row>

                        <Col lg={{ offset: 2 }} >
                            <Form onSubmit={this.updateAccount}>

                                <Form.Group as={Row} controlId="userName">
                                    <Form.Label column lg={3}>
                                       Nom / Name
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="text" name="userName"
                                              defaultValue={account.userName}
                                            
                                             />
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="num">
                                    <Form.Label column lg={3}>
                                    N. Telephone / Phone Number
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="number" name="num"
                                             defaultValue={account.num}
                                             />
                                    </Col>                                
                                </Form.Group>


                                <Form.Group as={Row} controlId="depart">
                                    <Form.Label column lg={3}>
                                       Lieu de Depart / Departure
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control as="select" name="depart"
                                         defaultValue={account.depart}>
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
                                        <Form.Control as="select" name="arrival"
                                         defaultValue={account.arrival}>
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
                                         defaultValue={account.colis}/>
                                    </Col>                                
                                </Form.Group>

                                <Form.Group as={Row} controlId="date">
                                    <Form.Label column lg={3}>
                                       Date de Depart
                                     </Form.Label><br />
                                    <Col lg={4}>
                                        <Form.Control type="date" name="date"
                                              defaultValue={account.date}
                                             />
                                    </Col>                                
                                </Form.Group>
                                <Button variant="primary" type="Submit">Modifier</Button>   |    <Link to="/"> <Button variant="success">Annuler</Button> </Link>
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
    editAccount
}

const mapStateToProps = (state)=> {
    return {
        accounts: state.user.accounts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
