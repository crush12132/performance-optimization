import React from 'react';
import MaterialUICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  card: {
    width: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
});

class MyCard extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <MaterialUICard className={this.props.classes.card}>
          <CardMedia className={this.props.classes.media}
            image={this.props.image} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions className={this.props.classes.actions}>
            <Button size="small" color="primary" variant="raised" component={Link} to={this.props.route}>
              Pros & Cons
            </Button>
          </CardActions>
        </MaterialUICard>
      </div>
    );
  }
}

export default withStyles(styles)(MyCard);
