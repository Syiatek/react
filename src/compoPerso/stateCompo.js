/*
* @autor steven
 */
import React, { Component } from 'react';
import "./stateCompo.css"
class StateCompo extends Component{
    constructor(props){
        super(props);
        console.log("label " + props.label);
        this.state= {nom:""};

    }
    render(){
        return(
            <div>
               <h6 className="state-h6">compo State</h6>
               <input type="text" value={this.state.nom}></input> 
            </div>)
    }
}
// const stateCompo = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

export default StateCompo;