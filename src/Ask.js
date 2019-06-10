import React from "react";

class AskStr extends React.Component {
    constructor() {
      super();
      this.state = {
         asksIds: [],
         asksData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/askstories.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({asksData: this.state.asksData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.asksData.map(data => {
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


const Ask = () => {
    return(
        <>
           <AskStr />
        </>
    )
}

export default Ask;