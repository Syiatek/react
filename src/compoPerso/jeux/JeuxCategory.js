import React , {Component} from 'react';

class JeuxCategory extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    
    render(){
        console.log("je passe dans le render");
        return(
            <tr>
                <th colSpan="2"></th>
                {this.props.category}
            </tr>
        )}
}
export default JeuxCategory;