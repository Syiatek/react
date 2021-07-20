import React , {Component} from 'react';

class JeuxCategory extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    
    render(){
        console.log("je passe dans le render");
        return(
            <div>
               JeuxCategory
            </div>)
    }
}
export default JeuxCategory;