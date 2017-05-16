import React, { Component } from 'react';
import PublicDocs from './PublicDocuments.jsx';
import PrivateDocs from './PrivateDocuments.jsx';
import RoleDocs from './RoleDocuments.jsx';

const ViewDocuments = () => (
  <div className="row">
    <div className="col s12 space">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s3">
          <a className="active" href="#public">Public</a>
        </li>
        <li className="tab col s3"><a href="#private">Private</a></li>
        <li className="tab col s3"><a href="#role">Role</a></li>
      </ul>
    </div>

    <div id="public" className="col s12"><PublicDocs /></div>
    <div id="private" className="col s12"><PrivateDocs /></div>
    <div id="role" className="col s12"><RoleDocs /></div>
  </div>
);

export default ViewDocuments;
