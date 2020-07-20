import React, { Component } from 'react'
import pencil from './icons/icons/pencil.svg'
import trash from './icons/icons/trash.svg'
import {  Col, Row, Container, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { deleteAccount, getAllAccounts } from './redux/actions/CatActions'
import { logoutUser  } from './redux/actions/authActions';
import AddAccount from './AddAccount'


class Home extends Component {
    componentDidMount(){
        this.props.getAllAccounts()
    }
    deleteAccounts = (id)=>{
        this.props.deleteAccount(id)
    }
        
    render() {
        
        return (
            <div>  
                <div className="headerContent">
                
                <div className="mainContent">
                
                      
                <Container>
               <br/> <a onClick={this.props.logoutUser}><Button>Deconnexion</Button></a>
               <Link to="/add"><Button>Ajouter un Voyage</Button></Link>
                   
                    <Row>
                        <Col lg={{offset: 2 }} >
                        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nom</th>   
                        <td>Depart</td> 
                        <td>Arriver</td> 
                        <td>Date</td>             
                    </tr>
                </thead>
                <tbody>

                {
                this.props.account.map(count=>{
                    return (
                <tr>
                        <td>{count.userName}</td>
                        <td>{count.depart}</td>
                        <td>{count.arrival}</td>
                        <td>{count.date}</td>
                     
                        <td>
                            {<Button  variant="secondary" >
                            <Link to={"/edit/" + count.id}>  <img src={pencil} /> </Link>   
                            </Button>}
                                    
                            {<Button variant="secondary"  onClick={()=>this.deleteAccounts(count.id)}>                
                            <img src={trash}  />
                            </Button> }

                            {<Button variant="success" >                
                            ANNULER
                            </Button> }

                            {<Button variant="success" >                
                            PAIEMENT
                            </Button> }
                        </td>
                 </tr>
                    )
                })
                }

                </tbody>

            </Table>

                        </Col>
                    </Row>
                </Container>
                </div>  
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        account: state.user.accounts
    }
}

const mapDispatchToProps = {
    deleteAccount, 
    getAllAccounts,
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
