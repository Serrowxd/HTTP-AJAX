import React, { Component } from 'react';
import axios from 'axios';

class FriendsGet extends Component {

    constructor() {
        super();
        this.state = {
            friends: [],
        }
    }

    render() {
        return( 
            <div>
                <div> Friends </div>
                <ul>
                    {this.state.friends.map(friend => {
                        return(
                            <li key={friend.id}>
                                <div className="friend-name">{friend.name}</div>
                                <div className="friend-age">{`Age: ${friend.age}`}</div>
                                <div className="friend-email">{`Email: ${friend.email}`}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data});
        });
    }
}

export default FriendsGet;