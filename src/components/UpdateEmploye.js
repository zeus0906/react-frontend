import { Component } from "react";
import EmployeService from "../services/EmployeService";

class UpdateEmploye extends Component{
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            nom : '',
            prenom : '',
            email : ''
        }

        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmploye = this.updateEmploye.bind(this)
    }

    updateEmploye = (e) => {
        e.preventDefault();

        let employe = {nom : this.state.nom, prenom : this.state.prenom, email : this.state.email};
        console.log('employee => ' + JSON.stringify(employe));

        EmployeService.updateEmploye(employe, this.state.id).then((res) => {
            this.props.history.push('/employes')
        })
    }

    componentDidMount(){
        EmployeService.getEmployeById(this.state.id).then((res) => {
            let employes = res.data
            this.setState({nom : employes.nom, prenom : employes.prenom, email : employes.email})
        })
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
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Mettre a Jour </h3>
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
                                     <button className="btn btn-success" onClick={this.updateEmploye}>Enregistrer</button>
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

export default UpdateEmploye