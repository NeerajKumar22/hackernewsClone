import React from "react";

class NewStr extends React.Component {
    constructor() {
      super();
      this.state = {
         newsIds: [],
         newsData: [],
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
                this.setState({newsData: this.state.newsData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.newsData.map(data => {
                return (
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


const New = () => {
    return(
        <>
           <NewStr />
        </>
    )
}

export default New;