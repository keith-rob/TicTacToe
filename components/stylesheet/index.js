import React from 'react';
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    savContainer: {
        flexGrow: 1,
        backgroundColor: "#000000",
      },
    boardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
        flexGrow: 1,
    },
    greetingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
        flexGrow: 1,
    },
    buttonRow: {
        flexDirection: 'row'
    },
    headerRow: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 60,
        paddingHorizontal: 24,
        
    },
    appTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: 36,
        textAlign: 'center',
        color: "#A736CF",
    },
    playerContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 60,
        paddingHorizontal: 120, 
    },
    playerXContainer: {
        display: 'flex',
        paddingHorizontal: 30,
    },
    playerOContainer: {
        display: 'flex',
        paddingHorizontal: 30,
    },
    playerText: {
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        color: '#000000',
    },
    scoreContainer: {
        display:'flex',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    scoreText: {
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 36,
        color: '#A736CF',
    },
    text: {
        fontSize: 48,
        color: '#FFFFFF',
        position: 'absolute',
      },
    squareButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "25%",
        paddingTop: '25%',
        backgroundColor: "#A736CF",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        position: 'relative',
    },
    squareButtonText: {
      fontSize: 48,
      color: '#FFFFFF',
      position: 'absolute',
    },
    gameContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    innerGameContainer: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },
    gameTitle: {
        fontFamily: 'Roboto Mono',
        color: "#FFFFFF",
        fontSize: 36,
        textAlign: 'center',
    },
    gameText: {
        fontFamily: 'Roboto Mono',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    primaryButton: {
        marginTop: 48,
        marginRight: 12,
        marginBottom: 24,
        maxHeight: 10,
        borderRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    primaryButtonText: {
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        color: '#A736CF',
        fontSize: 14,
        textAlign: 'center',
    },
    CodeTextbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B693C2',
        height: 44,
        paddingHorizontal: 12,
        fontFamily: 'Roboto Mono',
        textAlign: 'center',
        color: '#000000',
        fontSize: 14,
        flexGrow: 1,
    },
    inputField: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 24,
        paddingHorizontal: 12,
        width: '75%',
    },
    textInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 24,
        borderBottomWidth: 3,
        borderRadius: 4,
        borderTopWidth: 3,
        borderTopColor: '#B693C2',
        borderBottomColor: '#B693C2',
        backgroundColor: '#B693C2',
        width: '50%',
    },
    textInputLabel: {
        textAlign: 'center'
    },
    greetingText: {
        fontFamily: 'Roboto Mono',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
    },

})





export default styles;