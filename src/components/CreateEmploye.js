import { Component } from "react";
import EmployeService from "../services/EmployeService";

class CreateEmploye extends Component {
    constructor(props){
        super(props)

        this.state = {
            nom : '',
            prenom : '',
            email : ''
        }

        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmploye = this.saveEmploye.bind(this)
    }

    saveEmploye = (e) => {
        e.preventDefault();

        let employe = {nom : this.state.nom, prenom : this.state.prenom, email : this.state.email};
        console.log('employee => ' + JSON.stringify(employe));

        EmployeService.createEmployee(employe).then (res => {
            this.props.history.push('/employes');
        });

    }

    changeNomHandler = (event) => {
        this.setState({nom : event.target.value});
    }

    changePrenomHandler = (event) => {
        this.setState({prenom : event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    cancel(){
        this.props.history.push('/employes');
    }



    render(){
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Formulaire d'Enregistrement</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group"> 
                                   <label>Nom</label>
                                   <input name="nom" className="form-control" placeholder="Nom" 
                                   value={this.state.nom} onChange={this.changeNomHandler}/>
                                </div>
                                <br/>
                                <div className="form-group"> 
                                   <label>Prenom</label>
                                   <input name="prenom" className="form-control" placeholder="Prenom" 
                                   value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                </div>
                                <br/>
                                <div className="form-group"> 
                                   <label>Email</label>
                                   <input name="email" className="form-control" placeholder="Email"
                                    value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>
                                <br/>
                                <div>
                                     <button className="btn btn-success" onClick={this.saveEmploye}>Enregistrer</button>
                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmploye