import React from "react";


class TopStr extends React.Component {
    constructor() {
      super();
      this.state = {
         topIds: [],
         topData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({topData: this.state.topData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.topData.map(data => {
              return <li className="posts-list"><a href={data.url}><span className="posts-title">{JSON.stringify(data.title)}</span> by {data.by}</a></li>
            })
          }
        </ol>
        
        )
    }
  }

const Past = () => {
    return(
        <>
            <TopStr />
        </>
    )
}

export default Past;