import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBF3vPDfHnDzO88-2CxnuDPTg7a4-cr8gQ",
//   authDomain: "quiz-app-react-mahir.firebaseapp.com",
//   projectId: "quiz-app-react-mahir",
//   storageBucket: "quiz-app-react-mahir.appspot.com",
//   messagingSenderId: "962939475141",
//   appId: "1:962939475141:web:534dcedd1c2faead32ccac"
// };


// const app = initializeApp(firebaseConfig);
// export default app;

// firebase configuration
// console.log(process.env.REACT_APP_API_KEY);
// console.log(process.env.REACT_APP_PEXELS_API_KEY);
// console.log(process.env.REACT_APP_API_KEY);
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
});

export default app;