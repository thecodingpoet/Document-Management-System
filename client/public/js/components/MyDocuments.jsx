import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddModal from './AddModal.jsx';
import EditProfile from './EditProfile.jsx';
import AddBtn from './AddButton.jsx';
import MyDocs from './MyDocuments.jsx';
import ViewMyDocs from './ViewMyDocs.jsx';
import EditDocument from './EditDocument.jsx';

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: {}
    };
    this.documentSelected = this.documentSelected.bind(this);
    this.user = this.props.user;
  }
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
  }


  documentSelected(document) {
    this.setState({ document });
  }

  render() {
    return (
      <div className="row">
        <AddModal />
        <EditProfile />
        <EditDocument testDoc={this.state.document} />

        <ViewMyDocs documentSelected={this.documentSelected} user={this.user} />
        <AddBtn />

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, null)(MyDocuments);
