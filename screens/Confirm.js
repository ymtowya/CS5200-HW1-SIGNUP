import { Button, Modal, SafeAreaView, Text, View } from "react-native";
import Cardo from "../component/Cardo";
import myStyling from "../resource/Styling";
import { LinearGradient } from 'expo-linear-gradient';


export default function Confirm(props) {

    const { emailText, phoneText, screenSet, setConfirmedState, clearTxts, showConfirmPage } = props;

    const goBackFunc = function f1() {
        screenSet(0);
    }

    const confirmFunc = function f2() {
        setConfirmedState(true);
        screenSet(2);
    }

    const finishLaterFunc = function f3() {
        clearTxts();
        setConfirmedState(false);
        screenSet(2);
    }

    return (
        <Modal
            visible={ showConfirmPage }
            style={{flex: 1}}
        >
            <LinearGradient
        colors={['#1874CD', '#6E8B3D']}
        style={myStyling.backgroundLinear}
      ></LinearGradient>
            <View style={ myStyling.container }>
                <Cardo>
                    <Text style={myStyling.boldText}>
                        You have entered: {"\n"}
                    </Text>
                    <Text>
                        {emailText}
                    </Text>
                    <Text>
                        {phoneText}
                    </Text>
                    <Text style={myStyling.boldText}>
                    {"\n"}Please confirm they are correct.{"\n"}
                    </Text>

                    <View style={myStyling.buttonContainer}>
                            <View style={myStyling.buttons}>
                                <Button
                                    title="Go back"
                                    onPress={ () => { goBackFunc(); } }
                                    color={myStyling.buttonWarningColor}
                                ></Button>
                            </View>
                            <View style={myStyling.buttons}>
                                <Button title="Confirm" onPress={ () => { confirmFunc(); } }></Button>
                            </View>
                            <View style={myStyling.buttons}>
                                <Button 
                                    title="Finish Later" 
                                    onPress={ () => { finishLaterFunc(); } }
                                ></Button>
                            </View>
                    </View>
                </Cardo>
            </View>
        </Modal>
    );
}