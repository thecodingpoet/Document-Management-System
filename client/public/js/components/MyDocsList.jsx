import React from 'react';
import DocumentCard from './DocumentCard.jsx';
import MyDocumentCard from './MyDocumentCard.jsx';

export default function MyDocsList({ docs }) {
  const emptyMessage = (
    <div className="container center-align">
      <p>You have no documents yet</p>
    </div>
  );

  // The user ID is hardconded at the moment. just for testing though
  const userId = 2;

  const myDocsList = docs.filter(doc => doc.ownerId === 2);

  const docsList = (
    <div className="container" id="docList">
      <div className="row">
        { myDocsList.map(doc => <MyDocumentCard doc={doc} key={doc.id} />) }
      </div>
    </div>
  );

  return (
    <div>
      { myDocsList.length === 0 ? emptyMessage : docsList }
    </div>
  );
}

MyDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
