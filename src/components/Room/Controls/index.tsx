import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";

const Controls = (props: {onChange: (command: string) => void}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => props.onChange('TOP')}>
                <Image source={require('../../../assets/images/chevronTopWhite.png')}/>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => props.onChange('LEFT')}>
                    <Image source={require('../../../assets/images/chevronLeftWhite.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.onChange('DOWN')}>
                    <Image source={require('../../../assets/images/chevronDownWhite.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.onChange('RIGHT')}>
                    <Image source={require('../../../assets/images/chevronRightWhite.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Controls;