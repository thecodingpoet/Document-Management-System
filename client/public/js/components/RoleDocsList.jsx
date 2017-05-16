import React from 'react';
import DocumentCard from './DocumentCard.jsx';


export default function RoleDocsList({ docs }) {
  const emptyMessage = (
    <div className="container">
      <p className="center-align">There are no Role Documents yet</p>
    </div>
  );

  const roleDocsList = docs.filter(doc => doc.access === 'role');

  const docsList = (
    <div className="container" id="docList">
      <div className="row">
        { roleDocsList.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
      </div>
    </div>
  );

  return (
    <div>
      { roleDocsList.length === 0 ? emptyMessage : docsList }
    </div>
  );
}

RoleDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
