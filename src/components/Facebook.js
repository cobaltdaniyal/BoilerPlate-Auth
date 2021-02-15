import React, { Component } from 'react'
import firebase from '../config/firebase'
import Swal from 'sweetalert2'

export class Facebook extends Component {
    state = {
        //objects in state
        facebookuser: { name: '', email: '', uid: '', pic: '' }
    }

    facebookLogin = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                this.setState({
                    facebookuser: {
                        name: user.displayName, email: user.email, uid: user.uid, pic: user.photoURL
                    }
                })
                //sending data to database.............
                let logUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`FacebookUsers/${user.uid}`).set(logUser)
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
                console.log('Facebook Error ==>', error)
            });

    }
    render() {
        return (
            <div>
                <img width='150px' src={this.state.facebookuser.pic} alt='' />
                <h1>
                    Hello, {this.state.facebookuser.name}
                </h1>

                <button onClick={() => this.facebookLogin()}>Facebook Login</button>
            </div>
        )
    }
}

export default Facebook
