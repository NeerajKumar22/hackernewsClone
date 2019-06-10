import React from "react";
import "./styles/index.scss";
  
  class Posts extends React.Component {
    constructor() {
      super();
      this.state = {
         postsIds: [],
         postData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({postData: this.state.postData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.postData.map(data => {
              return(
                <li className="posts-list">
                  <a href={data.url}>
                    <span className="posts-title">{JSON.stringify(data.title)}</span> by {data.by}
                    </a>
                </li>
              )
            })
          }
        </ol>
        
        )
    }
  }

class Item extends React.Component{
  render(){
    return(
      <Posts />
    )
  }
}
  
export default Item;
