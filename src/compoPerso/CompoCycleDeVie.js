import React , {Component} from 'react';
class CompoCycleDeVie extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    componentWillUnmount(){
        console.log("je passe dans le componentWillUnmount");
    }
    render(){
        console.log("je passe dans le render");
        return(
            <div>
               
            </div>)
    }
    componentDidMount(){
        console.log("je passe dans le componentDidMount");

    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }
}
// const CompoCycleDeVie = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

 export default CompoCycleDeVie;