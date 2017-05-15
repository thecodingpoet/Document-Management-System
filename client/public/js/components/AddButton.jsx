import React from 'react';
import ReactTooltip from 'react-tooltip';

const AddButton = () => (
  <div className="fixed-action-btn">
    <a className="btn-floating btn-large red btn waves-effect waves-circle waves-light" data-tip data-for="addBtn" href="#modal1">
      <i className="large material-icons">add</i>
    </a>
    <ReactTooltip id="addBtn" >
      <span>Create new document</span>
    </ReactTooltip>
  </div>
    );

export default AddButton;
