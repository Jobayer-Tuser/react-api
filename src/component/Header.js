import React, {Component} from 'react';
import {categories} from '../news/Categories';

class Header extends Component{

    state={
        searchTerm : ''
    }

    onChangehandler =(e)=>{
        this.setState({searchTerm: e.target.value});

    }
    keyPressHandler = () =>{

    }

    render(){
        const {category, changeCategory} = this.props;
        return(
            <div className="my-4">
                <h2 className="mb-4" style={{fontWeight: '300'}}>BlockBuster Healines</h2>
                <input type="text" name="search" className="form-control" placeholder="Enter You Keyword to search" value={this.state.searchTerm} onChange={this.onChangehandler} onKeyPress={this.keyPressHandler}/>
                <div className="my-4">
                    {categories && Object.keys(categories).map(item => {
                        if(category === categories[item]){
                            return (
                                <button onClick={ () => changeCategory(categories[item])} className="btn btn-sm btn-warning mr-2 mb-2">
                                    {`#${categories[item]}`}
                                </button>
                            );
                        }
                        return (
                            <button onClick={ () => changeCategory(categories[item])} className="btn btn-sm btn-light mr-2 mb-2">{`#${categories[item]}`}</button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Header;