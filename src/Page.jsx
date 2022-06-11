import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  }
});

class Page extends React.Component {
  render() {
    const pros = this.props.pros.map((pro, index) => (
      <li key={index}><Typography variant="body1" key={index}>{pro}</Typography></li>
    ));
    const cons = this.props.cons.map((con, index) => (
      <li key={index}><Typography variant="body1" key={index}>{con}</Typography></li>
    ));
    return (
      <main className={this.props.classes.root} key={this.props.key}>
        <Typography variant="title" key={this.props.key}>{this.props.name}</Typography>
        <Typography variant="body1" key={this.props.key}>Pros:</Typography>
        <ul key={this.props.key}>
          {pros}
        </ul>
        <Typography variant="body1" key={this.props.key}>Cons:</Typography>
        <ul key={this.props.key}>
          {cons}
        </ul>
        <Button component={Link} to="/" variant="raised" color="primary" key={this.props.key}>Back To Home</Button>
      </main>
    );
  }
}

export default withStyles(styles)(Page);
