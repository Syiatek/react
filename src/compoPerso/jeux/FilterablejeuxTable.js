import React , {Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxCategory from './JeuxCategory';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component{
    constructor(props){
        super(props);
        console.log('les jeux', props.jeux);
        
    
    }
    
    render(){
        
        return(
            <div>
               FilterableJeuxTable
               <SearchCompo/>
               <JeuxTable/>
               <JeuxCategory/>
            </div>)
    }
}
export default FilterableJeuxTable;