import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    maxHeight: 325,
  },
  media: {
    height: 140,
  },
  CardContent: {
    'overflow-y': 'auto',
    maxHeight: 190
  }
};

function MediaCard(props) {
  const { classes, host, data } = props;

  let fullpath = `${host}${data.src}`;
  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            component='video'
            width="400"
            height="auto"
            type="video/mp4"
            image={fullpath}
            title={data.TMDB.info.title}
            autoPlay="autoPlay"
            controls="controls"
        />
        <div className={classes.CardContent}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.TMDB.info.title}
                </Typography>
                <Typography component="p">
                    {data.TMDB.info.overview}
                </Typography>
                <Typography component="p">
                    {data.TMDB.info.release_date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </div>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
