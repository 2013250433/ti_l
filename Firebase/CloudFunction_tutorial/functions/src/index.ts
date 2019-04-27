import * as functions from 'firebase-functions';
<<<<<<< HEAD

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
=======
import Web3 from 'web3';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

let web3 = new Web3(new Web3.providers.httpProvider("https://ropsten.infura.io/"));
web3.version.getNetwork(function(error,result){
	console.log(result);
})

export const helloWorld = functions.https.onRequest((request, response) => {
	console.log("hi!");
	response.send("Hello from Firebase!"); //express
});
>>>>>>> 1c6a7dadd646f0effc9f0dc71bd814bea8cea25e
