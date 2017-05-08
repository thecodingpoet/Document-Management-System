import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import EditDocument from './EditDocument.jsx';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as documentActions from '../actions/documents';

require('../../scss/style.scss');

class MyDocumentCard extends React.Component {
  constructor(props) {
    super(props);
    this.buttonclick = this.buttonclick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showComponent: false,
    };
    console.log(this.props.actions.deleteDoc);
  }

  buttonclick(id) {
    this.props.testFunc(this.props.doc);
    // this.props.actions.setCurrentDocument(this.props.doc);
  }

  onClick() {
    this.setState({
      showComponent: true,
    });
  }
  
  render() {
    const { doc } = this.props;
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
                <a href="#editDoc" onClick={this.onClick}>
                  <MenuItem primaryText="Edit" onTouchTap={() => this.buttonclick(doc.id)} />
                </a>
                <MenuItem primaryText="Delete" onTouchTap={() => this.props.actions.deleteDoc(doc.id)} />
              </IconMenu>
            </MuiThemeProvider>
          </div>
        </div>
        {this.state.showComponent ?
          <EditDocument /> :
          null
        }
    </div>
    );
  }
}
MyDocumentCard.propTypes = {
  doc: React.PropTypes.object.isRequired,
  actions: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(documentActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(MyDocumentCard);
