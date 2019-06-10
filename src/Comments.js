import React from "react";

class CommentsStr extends React.Component {
    constructor() {
      super();
      this.state = {
        commentsIds: [],
        commentsData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/comments.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({commentsData: this.state.commentsData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.commentsData.map(data => {
              return (
                <li className="posts-list">
                    <a href={data.url}>
                        <span className="posts-title">{JSON.stringify(data.text)}</span> by {data.by}
                    </a>
                </li>
              )
            })
          }
        </ol>
        
        )
    }
  }

const Comments = () => {
    return(
        <>
            <CommentsStr />
        </>
    )
}

export default Comments;