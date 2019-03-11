import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: []
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
        const { host, data } = this.state;

        const result = data.map((entry, index) => {
            let fullpath = `${host}${entry}`;
            return (
                <p key={index}><video width="400" controls src={fullpath} type="video/mp4" autoPlay></video></p>
            )
        });

        return <div>{result}</div>
    }
}

export default Api;