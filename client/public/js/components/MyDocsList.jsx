import React from 'react';
import MyDocumentCard from './MyDocumentCard.jsx';

export default function MyDocsList({ docs, editDoc, testFunc }) {
  const emptyMessage = (
    <div className="container center-align">
      <p>You have no documents yet</p>
    </div>
  );

  const userId = window.localStorage.getItem('userId');

  const myDocsList = docs.filter(doc => doc.ownerId === Number(userId));

  const docsList = (
    <div className="container" id="docList">
      <div className="row">
        { myDocsList.map(doc => <MyDocumentCard doc={doc} key={doc.id} editDoc={editDoc} testFunc={testFunc}/>) }
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
  docs: React.PropTypes.array.isRequired,
  editDoc: React.PropTypes.func.isRequired
};
