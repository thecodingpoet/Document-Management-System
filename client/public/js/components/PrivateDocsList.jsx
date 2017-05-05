import React from 'react';
import DocumentCard from './DocumentCard.jsx';

export default function PrivateDocsList({ docs }) {
  const emptyMessage = (
    <div className="container">
      <p className="center-align">There are no Private Documents yet</p>
    </div>
  );

  const privateDocsList = docs.filter(doc => doc.access === 'private');

  const docsList = (
    <div className="container" id="docList">
      <div className="row">
        { privateDocsList.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
      </div>
    </div>
  );

  return (
    <div>
      { privateDocsList.length === 0 ? emptyMessage : docsList }
    </div>
  );
}

PrivateDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
