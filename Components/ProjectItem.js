import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    // console.log('test');
    this.props.onDelete(id);
  }
  render() {
    return (

      <li className = "project">
      <strong>{this.props.projecct.title}</strong> : {this.props.projecct.category}
      <button  onClick={this.deleteProject.bind(this,this.props.projecct.id)}/>
      </li>
    );
  }
}
// ProjectItem.propTypes = {
//   project: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }
export default ProjectItem;
