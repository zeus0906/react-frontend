import { Component } from "react";

class Footer extends Component{
    constructor(props){
        super(props)

        this.state = {}

    }

    render(){
        return <div>
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @TheKing</span>
            </footer>
        </div>
    }
}

export default Footer