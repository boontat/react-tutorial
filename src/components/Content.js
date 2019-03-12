import React, { Component } from 'react';

// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Api from '../Api/Api';

const styles = theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
  });

class Content extends Component {
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Api />
            </main>
        );
    }
};

export default withStyles(styles, { withTheme: true })(Content);