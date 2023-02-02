import { Button, Modal, SafeAreaView, Text, View } from "react-native";
import Cardo from "../component/Cardo";
import myStyling from "../resource/Styling";
import { LinearGradient } from 'expo-linear-gradient';
import HorizontalButton from "../component/HorizontalButton";


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

    // Wrapped in a Modal
    return (
        <Modal
            visible={ showConfirmPage }
            style={{flex: 1}}
        >
            <LinearGradient
                colors={[myStyling.colors.bgColor1, myStyling.colors.bgColor2]}
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
                            <HorizontalButton
                                title={"Go Back"}
                                onPress={() => {goBackFunc();}}
                                isWarning={true}
                            ></HorizontalButton>
                            <HorizontalButton
                                title={"Confirm"}
                                onPress={() => {confirmFunc();}}
                                isWarning={false}
                            ></HorizontalButton>
                            <HorizontalButton
                                title={"Finish Later"}
                                onPress={() => {finishLaterFunc();}}
                                isWarning={false}
                            ></HorizontalButton>
                    </View>
                </Cardo>
            </View>
        </Modal>
    );
}