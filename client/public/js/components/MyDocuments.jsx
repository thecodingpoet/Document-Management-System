import React, { Component } from 'react';
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
    this.testFunc = this.testFunc.bind(this);
  }
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
  }


  testFunc(document) {
    this.setState({ document });
  }

  render() {
    return (
      <div className="row">
        <AddModal />
        <EditProfile />
        <EditDocument testDoc={this.state.document} />

        <ViewMyDocs testFunc={this.testFunc} />
        <AddBtn />

      </div>
    );
  }

}

export default MyDocuments;
