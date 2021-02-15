import React, { Component } from 'react'
import firebase from '../config/firebase'

class Signout extends Component {
    signOut = () => {
        firebase.auth().signOut().then(() => {
            alert('logged Out')
        }).catch((error) => {
            alert(error.message)
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.signOut()}>Sign Out</button>
            </div>
        )
    }
}

export default Signout
