import React from 'react';

export default class Album extends React.Component {


    render() {
        if (this.props.album !== null) {
            return (
                <div className="album">
                    <strong><a href={`/albums/${this.props.album.id}`}> {this.props.album.title}</a></strong>
                    <br/>
                    <img className="review-album-art" src={this.props.album.art_url} alt="album art"/>
                </div>
            )
        } else {
            return null
        }
    }
}