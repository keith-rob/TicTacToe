/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Image,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 import GameBoard from './components/gameboard';
 import Game from './components/game';
 import Greeting from './components/greeting';
 import styles from './components/stylesheet';
 
//  import auth from '@react-native-firebase/auth';
//  import firebase from '@react-native-firebase/app';
//  import firestore from '@react-native-firebase/firestore';

 const App: () => React$Node = () => {
   const [userAuth, setUserAuth] = useState(null);
   const [currentScreen, setCurrentScreen] = useState('playing');
   const [gameData, setGameData] = useState({});
   const [gameID, setGameID] = useState();
   const [initializing, setInitializing] = useState(true);
   const [error, setError] = useState('');
 
  // var subscriber = null;

  // //change the current screen to a new screen
  // const changeScreen = newScreen => {
  //   setCurrentScreen(newScreen);
  // };

  // //update the stored game data when the db game data changes
  // const updateGameData = newGameData => {
  //   setGameData(newGameData);
  // };

  // //create the updatePlayers function here
  // const updatePlayers = (gameDocID, playersArray) => {
  //   return firestore().collection("games").doc(gameDocID).update({
  //     players: playersArray,
  //   })
  //   .then(() => {
  //     return { hasError: false, value: null }
  //   })
  //   .catch(err => {
  //     return { hasError: true, value: err }
  //   });
  // };

  // //create the getPlayers function here
  // const getPlayers = gameDocID => {
  //   return firestore().collection("games").doc(gameDocID).get()
  //     .then(doc => {
  //       if (doc.exists) {
  //         return doc.data().players;
  //       } else {
  //         return { hasError: true, value: 'doc-not-found' };
  //       }
  //     })
  //     .catch(err => {
  //       return { hasError: true, value: err };
  //     });
  // };


  // const onAuthStateChanged = user => {
  //   setUserAuth(user);
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }

  // //write your useEffect code here
  // useEffect(() => {
  //   //declare the listener that will listen for changes to authentication state
  //   const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

  //   //we don't use user accounts for this app, so sign in the user anonymously
  //   auth()
  //     .signInAnonymously()
  //       .then(() => {
  //         console.log('User signed in anonymously');
  //       })
  //       .catch(err => {
  //         let friendlyError = { friendly: "We couldn't authenticate you with the game service.", technical: err.toString() };
  //       });

  //   //when the component is destroyed, unsubscribe to any listeners
  //   return (() => {
  //     if (subscriber !== null) {
  //       subsciber();
  //       authSubscriber;
  //     }
  //   });
  // }, []);
  

  // //while we wait for the authentication process to complete, show a blank screen
  // if (initializing) {
  //   return null;
  // };

 
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style={styles.savContainer}>
       
         {/* {(() => {
 
           if(currentScreen === 'greeting') {
             return <Greeting currentScreen={currentScreen} changeScreen={changeScreen} joinGame={joinGame} />
           }
 
           if ((gameData !== undefined) && (gameData.status === "playing")) {
             return <GameBoard  gameData={gameData} />
           }
 
         })()} */}
         <Greeting styles={styles} />

         {currentScreen === 'playing' ? (
           <GameBoard style={styles} />
         ) : (
           null
         )} 
           
       </SafeAreaView>
     </>
   );
 };
 
 
 export default App;
 