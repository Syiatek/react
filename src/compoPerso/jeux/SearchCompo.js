import React , {Component} from 'react';

class SearchCompo extends Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
    
    }
    
    render(){
        console.log("je passe dans le render");
        return(
            <div>
               SearchCompo
            </div>)
    }
}
export default SearchCompo;