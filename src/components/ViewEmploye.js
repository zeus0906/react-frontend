import { Component } from "react";
import EmployeService from "../services/EmployeService";

class ViewEmploye extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            employee : {}
        }
    }

    componentDidMount(){
        EmployeService.getEmployeById(this.state.id).then((res) => {
            this.setState({employee : res.data});
        })
    }

    render(){
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3" >
                    <h3 className="text-center" >Information {this.state.employee.nom}</h3>
                    <div className="card-body">
                    <div href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <div class="d-flex gap-2 w-100 justify-content-between">
                           <div>
                              <h6 class="mb-0">Nom </h6>
                             <p class="mb-0 opacity-75">{this.state.employee.nom}</p>
                              </div>
                                  </div>
                    </div>
                    <div href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <div class="d-flex gap-2 w-100 justify-content-between">
                           <div>
                              <h6 class="mb-0">Prenom </h6>
                             <p class="mb-0 opacity-75">{this.state.employee.prenom}</p>
                              </div>
                                  </div>
                    </div>
                    <div href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <div class="d-flex gap-2 w-100 justify-content-between">
                           <div>
                              <h6 class="mb-0">Email </h6>
                             <p class="mb-0 opacity-75">{this.state.employee.email}</p>
                              </div>
                                  </div>
                    </div>
                
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmploye