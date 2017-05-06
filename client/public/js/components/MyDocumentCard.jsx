import React from 'react';
import DocMenuIcon from './DocMenuIcon.jsx';
import DocumentCard from './DocumentCard.jsx';
import EditDocument from './EditDocument.jsx';


require('../../scss/style.scss');

export default function MyDocumentCard({ doc }) {
  return (
    <div className="col s12 m4">
      <div className="card grey lighten-3 ">
        <div className="card-content white-text cardz">
          <span className="card-title"><b>{doc.title}</b></span>
          <p id="content" style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
        <div className="card-action right-align">
          <DocMenuIcon />
        </div>
      </div>
    </div>
  );
}

MyDocumentCard.propTypes = {
  doc: React.PropTypes.object.isRequired
};
