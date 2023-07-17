import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export default function InstractionText({children, style}) {
    return(
        <Text style={[styles.instractionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instractionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
})