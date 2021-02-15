// import React, { Component } from 'react'
// import firebase from '../config/firebase'

// class App extends Component {
//     state = {
//         number: '',
//         code:''
//     }

//     setUpRecaptcha = () => {
//         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
//             'size': 'invisible',
//             'callback': (response) => {
//                 // reCAPTCHA solved, allow signInWithPhoneNumber.
//                 this.onSignInSubmit();
//             }
//         });
//     }

//     onSignInSubmit = () => {
//         this.setUpRecaptcha();
//         const phoneNumber = this.state.number;
//         const appVerifier = window.recaptchaVerifier;
//         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//             .then((confirmationResult) => {
//                 window.confirmationResult = confirmationResult;
//                 const code = window.prompt('enter code');
//                 confirmationResult.confirm(code)
//                     .then((result) => {
//                         const user = result.user;
//                         console.log(user)
//                     }).catch((error) => {
//                         console.log(error.message)
//                     });
//             }).catch((error) => {
//                 console.log(error.message)
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={(e)=>this.setState({number:e.target.value})} placeholder='phone number' />
//                 <button onClick={()=>this.onSignInSubmit()}>Verify</button>                    
//             </div>
//         )
//     }
// }

// export default App;
