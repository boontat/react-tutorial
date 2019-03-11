import React, { Component } from 'react';

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

class ModalDialog extends Component {
    state = {
        open: false;
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >
                    <div className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalDialog;