import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card.jsx';
import model from './model.js';
import Pages from './Pages.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  }
});

class Home extends React.Component {
  render() {
    const cards = model.map(panel => (
      <Card key={panel.name} image={panel.image} title={panel.name} 
        route={panel.route} description={panel.body} />
    ));
    return (
      <main className={this.props.classes.root}>
        {cards}
      </main>
    );
  }
}

export default withStyles(styles)(Home);
