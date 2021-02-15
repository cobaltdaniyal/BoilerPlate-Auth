import React, { Component } from 'react'
import firebase from '../config/firebase'
import Swal from 'sweetalert2'

export class Mail extends Component {
    state = {
        email: '',
        password: '',

    }
    createMail = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Account Created',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    loginMail = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                console.log(error.message)
            });

    }
    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <input onChange={(e) => this.setState({ email: e.target.value })} placeholder='Enter Mail' autoComplete='off' />
                <input onChange={(e) => this.setState({ password: e.target.value })} placeholder='Enter Password' autoComplete='off' type="password" />
                <button onClick={() => this.createMail()}>Create Account</button>
                <br />
                <h1>Log in with Mail</h1>
                <input onChange={(e) => this.setState({ email: e.target.value })} placeholder='Enter Mail' autoComplete='off' />
                <input onChange={(e) => this.setState({ password: e.target.value })} placeholder='Enter Password' autoComplete='off' type="password" />
                <button onClick={() => this.loginMail()}>login</button>

            </div>
        )
    }
}

export default Mail
