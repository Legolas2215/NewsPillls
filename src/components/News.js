import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export default class News extends Component {


  static defaultProps ={
    country:'in',
    pageSize:'5',
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading:false
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} | NewsPills`;
  }

  async updateComponent(){
    console.log("Prev Button is Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17a6c02b4e574f5a8ee240b4a924f7d0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true,articles:[]});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    
    this.updateComponent();
  }


  handleNextClick = async () => {
    
    this.setState({page: this.state.page + 1});
    this.updateComponent();
    

  }


  handlePrevClick = async () => {
    
    this.setState({page : this.state.page -1});
    this.updateComponent();
  }



  render() {
    return (
      <>
        <div className='container'>
          {this.state.loading && <Loading />}
          
          <h2 className=' my-5 text-center'>{this.capitalizeFirstLetter(this.props.category)} News on NewsPills</h2>
          {console.log("Rendering")}
          <div className="row">

            {this.state.articles.map((element) => {
              return <div className="col-lg-4" key={element.url}><NewsItem title={element.title} imageurl={element.urlToImage} desc={element.description} url={element.url} author={element.author} dateTime={element.publishedAt}/></div>
            })}
          </div>
        </div>

        <div className="container d-flex justify-content-between my-4">

          <button type='button' disabled={this.state.page < 2} className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>Previous</button>
          <button type='button' disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next</button>

        </div>

      </>
    )
  }
}
