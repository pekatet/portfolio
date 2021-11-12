import React from 'react';
import './App.css';
import {imageData} from './imgData';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

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

export default Portfolio;
