import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';
// import uuid from 'uuid';

class Myproject extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }



  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} projecct={project} />
        )
      });
    }
    // console.log(this.props);
    return (

      <div className = "myproject">

       <h3>Latest Project</h3>

       {projectItems}
     </div>
    );
  }
}

Myproject.propTypes = {
  Myproject: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Myproject;
