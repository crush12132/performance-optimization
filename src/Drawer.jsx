import React from 'react';
import Drawer as MaterialUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {};

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = { open: props.open };
  }
  componentWillReceiveProps(next) {
    if (this.state.open !== next.open) this.setState({open: next.open});
  }
  close() {
    this.setState({open: false});
  }
  render() {
    return (
      <MaterialUIDrawer onClose={this.close} open={this.state.open}>
        <List>
          <ListItem button onClick={this.close} component={Link} to="/">
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/elements">
            <ListItemText primary="Elements"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/console">
            <ListItemText primary="Console"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/sources">
            <ListItemText primary="Sources"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/network">
            <ListItemText primary="Network"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/performance">
            <ListItemText primary="Performance"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/memory">
            <ListItemText primary="Memory"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/security">
            <ListItemText primary="Security"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/application">
            <ListItemText primary="Application"/>
          </ListItem>
          <ListItem button onClick={this.close} component={Link} to="/audits">
            <ListItemText primary="Audits"/>
          </ListItem>
        </List>
      </MaterialUIDrawer>
    );
  }
}

export default withStyles(styles)(Drawer);
