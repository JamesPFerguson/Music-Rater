import React from 'react';
import User from '../User';

export default class AlbumReview extends React.Component {

    render() {
        return (
            <div className="album-review">
                <div className="">
                    <User user={this.props.user} />
                    <label> gives this album: </label> {this.props.rating}/5
                </div>
                <div className=""><p> {this.props.content} </p></div>
            </div>
        )
    }
}

// export const AlbumReview = (...props) =>  (
//         <div className="album-review">
//                 <div className="">
//                     <User user={user} />
//                     <label> gives this album: </label> {rating}/5
//                 </div>
//                 <div className=""><p> {content} </p></div>
//             </div>
//     );