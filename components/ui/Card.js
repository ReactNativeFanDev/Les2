import { StyleSheet, View, Dimensions } from "react-native"
import Colors from "../../constants/colors"

export default function Card ({children}) {
    return(
        <View style={styles.inputContainer}>{children}</View>
    )
}

const deviceWight = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: deviceWight < 380 ? 28 : 36,
        backgroundColor: Colors.primery800,
        borderRadius: 8,
        elevation: 80,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})