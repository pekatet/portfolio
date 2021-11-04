import React from 'react'
import {uid} from 'react-uid';
import './App.css';
import {imageData} from './imgData'

function Toolbar({filters, selected, onSelectFilter}) {
  return(
  <div>
    {filters.map((item) => {
      return (
        <button className={item === selected ? "button-selected" : "button-non-selected"}
                onClick={() => onSelectFilter(item)}
                key={uid(item)}>{item}</button>
      )
    })}
  </div>
  )
}

function ProjectList({projects}) {
  return(
  <div>
    {projects.map((item) => {
      return (
        <img className="project-img" src={(item.img)}
             alt="project"
             key={uid(item)}/>
      )
    })}
  </div>
  )
}

class Portfolio extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All"
    };
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }
  onSelectFilter(filter) {
    this.setState(({selected:filter}));
  }
  render(){
    const projectList = (this.state.selected === 'All') ? imageData : imageData.filter((img) => img.category===this.state.selected)
    return(
      <div className="portfolio">
        <Toolbar filters={this.state.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter}/>
        <ProjectList projects = {projectList}/>
      </div>
    )
  }
}

/*<div className="project-window">
  <ProjectList projects = {projectList}/>
</div>*/

function App() {
  return (
    <div className="App">
      <Portfolio/>
    </div>
  );
}

export default App;
