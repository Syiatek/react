import React , {Component} from 'react';

class JeuRow extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    
    render(){
        console.log("je passe dans le render");
        return(
            <div style={{"backgroundColor":"blue"}}>
               JeuRow
            </div>)
    }
}
export default JeuRow;