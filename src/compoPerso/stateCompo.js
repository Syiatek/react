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
        // this.handlechange = this.handlechange.

    }
    handlechange =(e)=>{
        console.log("value dans COMPO" + e.target.value);
        this.setState({nom: e.target.value})
        this.props.onInputChange(e.target.value);

    }
    render(){
        return(
            <div>
               <h6 className="state-h6">compo State</h6>
               <input type="text" value={this.state.nom} onChange={this.handlechange}></input> 
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