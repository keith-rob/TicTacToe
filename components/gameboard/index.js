import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ProgressViewIOSComponent,
    TouchableOpacity
} from 'react-native';

// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';

import GameButton from '../game-button';


// genrate clear 3 x 3 board
// "x" is the first player to go first, "O" goes second
// alternate turns
// check for win or tie
// const board = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]




const GameBoard = props => {
    const [gameboard, setGameBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [move, setMove] = useState("X");
    const [isWinner, setIsWinner] = useState();
    const [button, setButton] = useState();
    const [status, setStatus] = useState("");
    // const winner = calcWinner(gameboard);
    



    // const calcWinner = (buttons) => {
    //     const combos = [
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [2, 5, 8],
    //         [6, 7, 8],
    //         [0, 4, 8],
    //         [2, 4, 6]
    //     ];
    
    //     for (let i = 0; i < combos.length; i++) {
    //         const [a, b, c] = combos[i];
    //         if(buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
    //             return buttons[a]
    //         }
    //     }
    //     return null;
    // }


    const updateButton = value => {
        setButton(`${move}${value}`);
    }

    const handlePress = (props, action) => {
       if(isXTurn) {
        console.log("X");
           {{props.value = "X"}};
           
       } else {
        console.log("O")
           return (
               <Text style={styles.text}>
                   "O"
               </Text>
           )
           
       }
    }

    return (
        <>
            <View style={props.styles.boardContainer}>
                <View style={props.styles.headerRow}>
                    <Text style={props.styles.appTitle}>
                        Tic-Tac-Toe
                    </Text>
                </View>
                <View style={props.styles.buttonRow}>
                    <GameButton key={1} Action={handlePress} />
                    <GameButton key={2} Action={handlePress} />
                    <GameButton key={3} Action={handlePress} />
                </View>
                <View style={styles.buttonRow}>
                    <Text>
                        {winner ? "Winner:" + winner : null}
                    </Text>
                    <GameButton key={4} Action={handlePress} />
                    <GameButton key={5} Action={handlePress} />
                    <GameButton key={6} Action={handlePress} />
                </View>
                <View style={styles.buttonRow}>
                    <GameButton key={7} Action={handlePress} />
                    <GameButton key={8} Action={handlePress} />
                    <GameButton key={9} Action={handlePress} />
                </View>
                <View style={props.styles.playerContainer}>
                    <View style={props.styles.playerXContainer}>
                        <View style={props.styles.scoreContainer}>
                            <Text style={styles.scoreText}>
                                0
                            </Text>
                        </View>
                        <Text style={styles.playerText}>Player X</Text>
                    </View>
                    <View style={styles.playerOContainer}>
                        <View style={styles.scoreContainer}>
                            <Text style={styles.scoreText}>
                                0
                            </Text>
                        </View>
                        <Text style={styles.playerText}>Player O</Text>
                    </View>
                </View>
            </View>
        </>
    )
    


    

}

    






export default GameBoard;