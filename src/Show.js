import React from "react";
import './styles/index.scss';

class ShowStr extends React.Component {
    constructor() {
      super();
      this.state = {
         showsIds: [],
         showsData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/showstories.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({showsData: this.state.showsData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.showsData.map(data => {
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


const Show = () => {
    return(
        <>
           <ShowStr />
        </>
    )
}

export default Show;