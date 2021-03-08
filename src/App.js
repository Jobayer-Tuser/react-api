import React, {Component} from 'react';
import Header from './component/Header';
import {categories} from './news/Categories';
import NewsList from './news/newsList';
import Pagination from './news/Pagination';
import Loader from './news/Loader';
import axios from 'axios';

class App extends Component{

  state={
    news : [],
    category: categories.technology,

  }

  changeCategory =(category)=>{
    this.setState({category})
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=20`;
    axios.get(url)
        .then((response) => {
          this.setState({ news: response.data.articles})
        })
        .catch((error) =>{
          console.log(error)
        })
  }
  componentDidUpdate(prevState, prevProps){
   if(prevState.category !== this.state.category){
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=20`;
      axios.get(url)
          .then((response) => {
            this.setState({ news: response.data.articles})
          })
          .catch((error) =>{
            console.log(error)
          })
   }
  }

 render(){
   return(
     <div className="container">
       <div className="row">
         <div className="col-sm-6 offset-md-3">
            <Header category={ this.state.category} changeCategory={this.changeCategory}/>
            <div className="d-flex">
                <p className="text-black-50">
                    About {0} result found
                </p>
                <p className="text-black-50 ml-auto">
                  {1} page of {100}
                </p>
            </div>
            <NewsList news={ this.state.news } />
            <Pagination />
            <Loader/> 
         </div>

       </div>

     </div>
   );

 }
}

export default App;