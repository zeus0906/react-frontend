import { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
        }

    }

    render(){
        return ( <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <h2>Gestion des Employés</h2>
                </nav>
            </header>
        </div>
        )
    }
}

export default Header