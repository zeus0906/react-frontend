import { Component } from "react";
import EmployeService from "../services/EmployeService";

class ListEmploye extends Component{
    constructor(props){
        super(props)

        this.state = {
            employes: []
        }

        this.createEmploye = this.createEmploye.bind(this);
        this.editEmploye = this.editEmploye.bind(this);
        this.deleteEmploye = this.deleteEmploye.bind(this);
        this.viewEmploye = this.viewEmploye.bind(this);
    }

    viewEmploye(id){
        this.props.history.push(`/view-employes/${id}`)
    }

    deleteEmploye(id){
        EmployeService.deleteEmploye(id).then((res) => {
            this.setState({employes: this.state.employes.filter(employee => employee.id !== id)})
        })
    }

    editEmploye(id){
        this.props.history.push(`/update-employes/${id}`)
    }

    componentDidMount(){
        EmployeService.getEmployees().then((res) => {
            this.setState({ employes : res.data});
        });
    }

    createEmploye(){
        this.props.history.push('/add-employes')
    }

    render(){
        return <div>
            <h2 className="text-center">Liste des Employés</h2>

            <div className="row">
                <button className="btn btn-primary" onClick={this.createEmploye}>Ajouter</button>
            </div>

            <br></br>

            <div className="row">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>PRENOM</th>
                        <th>EMAIL</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employes.map(
                            (employee) => <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.nom}</td>
                                <td>{employee.prenom}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => this.editEmploye(employee.id)} className="btn btn-info">Update</button>
                                    <button style= {{marginLeft: "10px"}} onClick={() => this.deleteEmploye(employee.id)} className="btn btn-danger">Delete</button>
                                    <button style= {{marginLeft: "10px"}} onClick={() => this.viewEmploye(employee.id)} className="btn btn-info">voir</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    }
}

export default ListEmploye