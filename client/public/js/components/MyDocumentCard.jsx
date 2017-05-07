import React from 'react';
import DocumentCard from './DocumentCard.jsx';
import EditDocument from './EditDocument.jsx';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('../../scss/style.scss');

export default function MyDocumentCard({ doc }) {
  return (
    <div className="col s12 m4">
      <div className="card grey lighten-3 ">
        <div className="card-content white-text cardz">
          <span className="card-title"><b>{doc.title}</b></span>
          <p id="content" style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: doc.content }} />
        </div>
        <div className="card-action right-align" id="IconMenu">
          <MuiThemeProvider >
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}

            >
              <a href="#editDoc">
                <MenuItem primaryText="Edit" />
              </a>
              <MenuItem primaryText="Delete" />
            </IconMenu>
          </MuiThemeProvider>
        </div>
      </div>

    </div>
  );
}

MyDocumentCard.propTypes = {
  doc: React.PropTypes.object.isRequired
};
