import React , {Component} from 'react';
import SearchCompo from './SearchCompo';
// import JeuxCategory from './JeuxCategory';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component{
    constructor(props){
        super(props);
        console.log('les jeux', props.jeux);
        this.state = {
            filterText:"",
            inStockOnly:false
        }
        this.handleInStockChange= this.handleInStockChange.bind(this);
        this.handleFilterTextChange= this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(e){
        console.log("parent" + e);
        this.setState({filterText:e})
    }
    handleInStockChange(e){
        console.log("parent" + e);
        this.setState({inStockOnly:e})
    }
    render(){
        
        return(
            <div>
               
               <SearchCompo 
                   filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   handleFilterTextChange={this.handleFilterTextChange}
                   handleInStockChange={this.handleInStockChange}
               />
               <JeuxTable jeux={this.props.jeux}
                   filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   />
              
            </div>)
    }
}
export default FilterableJeuxTable;