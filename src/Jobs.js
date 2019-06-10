import React from "react";
import './styles/index.scss';

class JobsStr extends React.Component {
    constructor() {
      super();
      this.state = {
         jobsIds: [],
         jobsData: [],
        };
    }
    
    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      .then(res => res.json())
      .then((ids) => {
          ids.splice(0,30).map(id => {
  
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                this.setState({jobsData: this.state.jobsData.concat(data)});  
              });
  
          });
      })
    }
    render() {
        return(
        <ol className="posts">
          {
            this.state.jobsData.map(data => {
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


const Jobs = () => {
    return(
        <>
           <JobsStr />
        </>
    )
}


export default Jobs;