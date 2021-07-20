import React , {Component} from 'react';
import  JeuxCategory  from "./JeuxCategory";
import JeuxRow from './JeuRow';

class JeuxTable extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    
    render(){
        console.log("je passe dans le render");
        return(
            <div>
               JeuxTable
            <JeuxRow/>
            <JeuxCategory/>
            </div>)
    }
}
export default JeuxTable;