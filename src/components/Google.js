import React, { Component } from 'react'
import firebase from '../config/firebase'
import Swal from 'sweetalert2'

export class Facebook extends Component {
    state = {
        googleUsers: { name: '', email: '', uid: '', pic: '' }
    }

    googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                this.setState({
                    googleUsers: {
                        name: user.displayName,
                        email: user.email,
                        pic: user.photoURL,
                        uid: user.uid
                    }
                })
                //sending data to database...............
                let logUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`GoogleUsers/${user.uid}`).set(logUser)
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Logged in',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                //.........
            }).catch(function (error) {
                console.log('Google Error ==>', error)
            });

    }
    render() {
        return (
            <div>
                <img width='150px' src={this.state.googleUsers.pic} alt='' />
                <h1>
                    Hello, {this.state.googleUsers.name}
                </h1>

                <button onClick={() => this.googleLogin()}>Google Login</button>
            </div>
        )
    }
}

export default Facebook
