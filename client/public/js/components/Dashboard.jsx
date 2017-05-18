/* eslint-disable no-undef */

import React, { Component } from 'react';
import AddModal from './AddModal.jsx';
import AddBtn from './AddButton.jsx';
import ViewDocuments from './ViewDocuments.jsx';

/**
 * @class Dashboard
 * @extends {Component}
 */
class Dashboard extends Component {
  /**
   * Initialize materialize jquery functions
   * @memberOf Dashboard
   * @return {void} - returns void
   */
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
    $('#tabs-swipe-demo').tabs({ swipeable: true });
  }

  /**
   * @returns {jsx} - Dashboard page
   * @memberOf Dashboard
   */
  render() {
    return (
      <div className="row">
        <AddModal />
        <ViewDocuments />
        <AddBtn />
      </div>
    );
  }
}

export default Dashboard;
