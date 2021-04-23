import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from  'react-native';




const Lobby = props => {
    const [currentStep, setCurrentStep] = useState('intro');
    const [gameCode, setGameCode] = useState('');
    
    
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={props.styles.innerGameContainer}>
                            <Text style={props.styles.gameTitle}>
                                {"Tic-Tac-Toe"}
                            </Text>
                            <Text style={props.styles.gameText}>
                                {"Press play to start a game"}
                            </Text>
                            <TouchableOpacity style={props.styles.primaryButton}
                                onPress={() => setCurrentStep('create-or-join')}>
                                <Text style={props.styles.primaryButtonText}>
                                    {"Create game"}
                                </Text>
                            </TouchableOpacity>
                            <Text style={props.styles.gameText}>
                                {"or"}
                            </Text>
                            <Text style={props.styles.gameText}>
                                {"Enter a code to join"}
                            </Text>
                            <TouchableOpacity style={props.styles.primaryButton}
                                onPress={() => setCurrentStep('create-or-join')}>
                                <Text style={props.styles.primaryButtonText}>
                                    {"Join game"}
                                </Text>
                            </TouchableOpacity>
                    </View>
            </TouchableWithoutFeedback>
        ) 
                        
    
        


   

}


const styles = StyleSheet.create({
    
})




export default Lobby;