import { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";
import Cardo from '../component/Cardo';
import HorizontalButton from "../component/HorizontalButton";
import myStyling from "../resource/Styling";

// check if the email address is valid or not
function isValidEmail(e) {
    const validRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return e.match(validRegex);
}

// check if the phone number is valid or not
function isValidPhone(p) {
    return p.length == 10 && !isNaN(p);
}

export default function Starting(props) {

    const [ emailFaultFlg, setEmailFaultFlg ] = useState(false);
    const [ phoneFaultFlg, setPhoneFaultFlg ] = useState(false);
    const { emailText, setEmailText, phoneText, setPhoneText, clearTxts, screenSet } = props;

    // clear all values in text inputs
    const clearAll = function a1() {
        clearTxts();
        setEmailFaultFlg(false);
        setPhoneFaultFlg(false);
    }

    const onPressReset = function a2() {
        clearAll();
    };

    const onPressSignup = function a3() {
        // validity check of email
        let boolE = isValidEmail(emailText);
        setEmailFaultFlg(!boolE);
        // validity check of phone
        let boolP = isValidPhone(phoneText);
        setPhoneFaultFlg(!boolP);
        // both valid -> jump
        if (boolE && boolP) {
            screenSet(1);
        }
    };

    return (
        <View>
            <View style={myStyling.textLabelView}>
                <Text style={myStyling.textLabel}>
                    Sign Up
                </Text>
            </View>
            <Cardo>
                <Text style={myStyling.boldText}>
                    Email address
                </Text>
                <TextInput
                    value={emailText}
                    onChangeText={ txt => setEmailText(txt.trim()) }
                    style={ myStyling.inputBox }
                ></TextInput>
                <Text style={[myStyling.warningText, {opacity: emailFaultFlg ? 100 : 0}]}>
                    Please enter a valid email
                </Text>
                
                <Text style={myStyling.boldText}>
                    {"\n"}Phone number
                </Text>
                <TextInput
                    value={phoneText}
                    onChangeText={ txt => setPhoneText(txt.trim()) }
                    style={ myStyling.inputBox }
                ></TextInput>
                <Text style={[myStyling.warningText, {opacity: phoneFaultFlg ? 100 : 0}]}>
                    Please enter a valid phone number
                </Text>

                <View style={myStyling.buttonContainer}>
                    <HorizontalButton
                        title={"Reset"}
                        onPress={() => {onPressReset();}}
                        isWarning={true}
                    ></HorizontalButton>
                    <HorizontalButton
                        title={"Sign Up"}
                        onPress={() => {onPressSignup();}}
                        isWarning={false}
                    ></HorizontalButton>
                </View>

            </Cardo>
        </View>
    );
}

