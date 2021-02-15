// import React, { Component } from 'react'
// import firebase from '../config/firebase'

// class App extends Component {
//     state = {
//         number: ''
//     }


//     setUpRecaptcha = () => {
//         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//             'recaptcha-container',
//             {
//                 'size': 'invisible',
//                 'callback': function (response) {
//                     console.log("Captcha Resolved");
//                     this.onSignInSubmit();
//                 }
//             });
//     }
   

//     onSignInSubmit = (event) => {
//         event.preventDefault();
//         this.setUpRecaptcha();
//         var phoneNumber = this.state.number;
//         var appVerifier = window.recaptchaVerifier;
//         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//             .then(function (confirmationResult) {
//                 window.confirmationResult = confirmationResult;
//                 alert("OTP is sent");
//                 var code = window.prompt('Enter OTP')
//                 confirmationResult.confirm(code)
//                     .then(function (result) {
//                         console.log("User Signed In")
//                     }).catch(function (error) {
//                         console.log(error)
//                         alert("Incorrect OTP")
//                     });
//             }).catch(function (error) {
//                 console.log(error)
//             });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <form onSubmit={this.onSignInSubmit}>
//                         <div id='recaptcha-container'>

//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
//                             <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => this.setState({ number: e.target.value })} />
//                             <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
//                         </div>
//                         {/* <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" />
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//         </div> */}
//                         <button type="submit" className="btn btn-primary">login</button>
//                     </form>
//                 </header>
//             </div>
//         )
//     }
// }

// export default App;
