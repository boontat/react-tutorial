import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '../components/Cards';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class Api extends Component {
    state = {
        data: [],
        spacing: '16',
    };

    componentDidMount() {
        const url = "http://homestead.test/moviebox/api.php";

        fetch(url)
            .then(result => {
                if (!result.ok) {
                    throw new Error('Failed to fetch');
                }
                return result;
            })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    host: result.host,
                    data: result.videos
                });
            }).catch(function(error) {
                console.error(error);
            });
    }

    render() {
        const { host, data, spacing } = this.state;
        const { classes } = this.props;

        const result = data.map((entry, index) => {
            return (
                <Grid key={index} item><Card data={entry} host={host}/></Grid>
            )
        });

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="left" spacing={Number(spacing)}>
                        {result}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Api);