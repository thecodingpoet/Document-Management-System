import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditModal from './EditModal.jsx';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const IconsMenu = () => (
  <div className="cardzIcon">
    <MuiThemeProvider >
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}

      >
        <a href="/editModal"><MenuItem primaryText="Edit" /></a>
        <MenuItem primaryText="Delete" />
      </IconMenu>

    </MuiThemeProvider >
  </div>
);

export default IconsMenu;

/*export default class IconsMenu extends Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
   );
  }

  render() {
    return (
      <div className="cardzIcon">
        <a className="dropdown-button btn" href="#whatever" data-activates="dropdown1">ic</a>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Edit</a></li>
          <li><a href="#!">Delete</a></li>
        </ul>
      </div>
    );
  }
}*/
