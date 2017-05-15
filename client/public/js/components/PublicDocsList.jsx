import React from 'react';
import DocumentCard from './DocumentCard.jsx';

export default function PublicDocsList({ docs }) {
  const emptyMessage = (
    <div className="container">
      <p className="right-align">There are no Public Documents yet</p>
    </div>
  );

  const publicDocsList = docs.filter(doc => doc.access === 'public');

  const docsList = (
    <div className="container" id="docList">
      <div className="row">
        { publicDocsList.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
      </div>
    </div>
  );

  return (
    <div>
      { publicDocsList.length === 0 ? emptyMessage : docsList }
    </div>
  );
}

PublicDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
