import React from 'react';

require('../../scss/style.scss');

export default function DocumentCard({ doc }) {
  return (
    <div className="col s12 m4">
      <div className="card grey lighten-3 ">
        <div className="card-content white-text cardz">
          <span className="card-title"><b>{doc.title}</b></span>
          <p id="content" style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
      </div>
    </div>
  );
}

DocumentCard.propTypes = {
  doc: React.PropTypes.object.isRequired
};
