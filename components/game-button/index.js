import React, { useState } from 'react';

import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


const GameButton = (props) => {

    return (
        <TouchableOpacity style={props.styles.squareButtonocntainer}
        onPress={() => props.Action(props.value)}
    >
        <Text style={styles.squareButtonText}>
            {props.value}
        </Text>    
    </TouchableOpacity>
    )
       

    };
        




  export default GameButton;