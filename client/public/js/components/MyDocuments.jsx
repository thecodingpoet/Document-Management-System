import React, { Component } from 'react';
import AddModal from './AddModal.jsx';
import EditModal from './EditModal.jsx';
import AddBtn from './AddButton.jsx';
import MyDocs from './MyDocuments.jsx';
import ViewMyDocs from './ViewMyDocs.jsx';
import EditDocument from './EditDocument.jsx';

class MyDocuments extends Component {
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
  }

  render() {
    return (
      <div className="row">
        <AddModal />
        <EditModal />
        <EditDocument />
        <ViewMyDocs />

        <AddBtn />

      </div>
    );
  }

}

export default MyDocuments;
