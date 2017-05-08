import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddModal from './AddModal.jsx';
import EditProfile from './EditProfile.jsx';
import AddBtn from './AddButton.jsx';
import ViewDocs from './ViewDocuments.jsx';


class Dashboard extends Component {
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
    $('#tabs-swipe-demo').tabs({ swipeable: true });
  }

  render() {
    return (
      <div className="row">
        <AddModal />
        <EditProfile />

        <ViewDocs />

        <AddBtn />

      </div>
    );
  }
}

export default Dashboard;
