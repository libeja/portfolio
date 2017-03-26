import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './Project';
import '../styles/projects.scss';

import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor';

// imports list of projects as array
import { showcaseProjects, moreProjects } from '../projectList';

// returns a mapped list of projects out of passed in project array
const createList = (projectArray) => {
  return (
    projectArray.map((project) => {
      return <Project
        key={project.name}
        name={project.name}
        img={project.img}
        techList={project.techList}
        gitLink={project.gitLink}
        liveLink={project.liveLink}
      />
    })
  );
}

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMoreProjects: false
    }

    this.handleShowMoreProjects = this.handleShowMoreProjects.bind(this);
  }

  // handles when show more projects was clicked
  handleShowMoreProjects() {
    if (this.state.showMoreProjects) {
      goToAnchor('projects');
      this.setState({showMoreProjects: false})
    } else {
      this.setState({showMoreProjects: true})
    }
  }

  // TODO: write function that evenly divides number of projects into appropriate number
  //       of rows that recalculates on page resizing
  render() {
    return (
      <section>
        <ScrollableAnchor id='projects'>
          <h3>&#60; Projects /&#62;</h3>
        </ScrollableAnchor>
        <div className='projects-container'>
        {createList(showcaseProjects)}
        </div>
        <ReactCSSTransitionGroup transitionName="moreProjects" transitionEnterTimeout={1000} transitionLeaveTimeout={900}>
          {this.state.showMoreProjects
            ? <div key='projectContainer' className='test moreProjects-container'>
                {createList(moreProjects)}
              </div>
            : null
          }
          {/*{this.state.showMoreProjects === false
            ? <button
              onClick={this.handleShowMoreProjects}
              className='btn-showMoreProjects'
            >
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
              &nbsp;Show {moreProjects.length} More Projects
            </button>
            : null
          }*/}
          <button
            onClick={this.handleShowMoreProjects}
            className='btn-showMoreProjects'
          >
            {!this.state.showMoreProjects 
              ? <span><i className="fa fa-angle-double-down" aria-hidden="true"></i>&nbsp;Show {moreProjects.length} More Projects</span>
              : <span><i className="fa fa-angle-double-up" aria-hidden="true"></i>&nbsp;Show Less Projects</span>
            }
          </button>
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}

export default Projects;