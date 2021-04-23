import React, { useState } from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Image,
} from 'react-native';

import GameBoard from '../gameboard';


// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';


const Greeting = props => {
const [currentStep, setCurrentStep] = useState('intro');
const [gameCode, setGameCode] = useState('');
const [gameDocID, setGameDocID] = useState('');
const [userName, setUserName] = useState('');
const [error, setError] = useState('');



//write the updateName function here
const updateName = () => {
    if (userName.length > 0) {
      return auth().currentUser.updateProfile({
        displayName: userName,
      })
      .then((r) => {
        props.joinGame(gameDocID);
      })
      .catch(err => {
        let friendlyError = { friendly: "Something has gone terribly wrong.", technical: err.toString() };
        setError(() => { throw friendlyError });
      });
    }
  };

//write the saveGame function here
const saveGame = newGameCode => {
    return firestore().collection("games").add({
      gameCode: newGameCode,
      status: "waiting",
      players: [],
      owner: auth().currentUser.uid,
      answer: '',
      question: '',
    })
    .then(gameDoc => {
      return gameDoc.id;
    })
    .catch(err => {
      return { hasError: true, error: err };
    });
  };


//write the createGame function here
const createGame = () => {
    generateGameCode()
      .then(response => {
        if (!response.hasError) {
          setGameDocID(response);
          setCurrentStep('get-name');
        } else {
          let friendlyError = { friendly: "Something has gone terribly wrong.", technical: response.value !== undefined ? response.value.toString() : '' };
          setError(() => { throw friendlyError });
        }
      })
      .catch (err => {
        let friendlyError = { friendly: "Something has gone terribly wrong.", technical: err.toString() };
        setError(() => { throw friendlyError });
      });
  };

//write the generateGameCode function here
const generateGameCode = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newGameCode = '';
    for (var x=0; x<4; x++) {
      newGameCode+= letters[Math.floor(Math.random() * (25 - 0 + 1) + 0)];
    }
    return checkGameCode(newGameCode);
  };

  //write the joinGame function here
  const joinGame = () => {
    if (gameCode.length === 4) {
      return firestore().collection("games").where("gameCode", "==", gameCode.toUpperCase())
      .get()
      .then(results => {
        if (results.size > 0) {
          let thisGameDocID = null;
          results.forEach(game => {
            thisGameDocID = game.id;
          });
          setGameDocID(thisGameDocID);
          setCurrentStep('get-name');
        } else {
          setCurrentStep('error-game-not-found');
        }
      })
      .catch(err => {
        let friendlyError = { friendly: "Something has gone terribly wrong.", technical: err.toString() };
        setError(() => { throw friendlyError });
      });
    }
  };


    return (
        <>
            <View style={props.styles.greetingContainer}>
            <Image source={require('../../images/purpGradient.png')} style={props.styles.bgImage} resizeMode={'cover'} />
                <View style={props.styles.headerRow}>
                    <Text style={{...props.styles.appTitle, color: "#FFFFFF"}}>
                        Tic-Tac-Toe
                    </Text>
                </View>

                {currentStep === 'intro' ? (
                
                <>

                    <View>
                        <TouchableOpacity style={props.styles.primaryButton} onPress={() => createGame()} >
                            <Text style={props.styles.primaryButtonText} >
                                {"Create game"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={props.styles.textInputLabel} >
                        <Text style={props.styles.greetingText} >
                            {"or"}
                        </Text>
                    </View>
                    <View style={props.styles.textInputLabel} >
                        <Text style={props.styles.greetingText}>
                            {"Enter a code to join a game:"}
                        </Text>
                    </View>
                        
                        <View style={props.styles.textInputContainer} >
                            <TextInput style={props.styles.codeTextbox} 
                            placeholder="????" value={gameCode} 
                            onChangeText={text => setGameCode(text)} 
                            maxLength={4} />
                        </View>

                        <View >
                            <TouchableOpacity style={props.styles.primaryButton}
                            onPress={() => joinGame()} >
                                <Text style={props.styles.primaryButtonText} >
                                    {"Join game"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    null
                )}

                {currentStep === 'get-name' ? (
                    <>
                        <View style={{...props.styles.textInputLabel, marginTop: 75}} >
                            <Text style={props.styles.greetingText}>
                                {"Enter player name:"}
                            </Text>
                        </View>
                            
                            <View style={props.styles.textInputContainer} >
                                <TextInput style={props.styles.codeTextbox} 
                                placeholder="" value={gameCode} 
                                onChangeText={text => setGameCode(text)} 
                                maxLength={4} />
                            </View>

                            <View>
                                <TouchableOpacity style={props.styles.primaryButton}
                                onPress={() => updateName()} >
                                    <Text style={{...props.styles.primaryButtonText, fontSize: 18}} >
                                        {"Join"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </>
                ) : (
                    null
                )}


                {currentStep === 'error-game-not-found' ? (
                    <>
                    <View style={{...props.styles.textInputLabel, width: '75%'}} >
                        <Text style={props.styles.greetingText}>
                            {"Error connecting you to your game. Please try again."}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={props.styles.primaryButton}
                            onPress={() => updateName()} >
                            <Text style={{...props.styles.primaryButtonText, fontSize: 18}} >
                                        {"Go back"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </>
                ) : (
                    null
                )}

                
                
            </View>
        </>
                    ) 
                    

    }

         









export default Greeting;
