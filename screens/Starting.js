import { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";
import Cardo from '../component/Cardo';

function isValidEmail(e) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return e.match(validRegex);
}

function isValidPhone(p) {
    return p.length == 10 && !isNaN(p);
}

export default function Starting(props) {

    const [ emailFaultFlg, setEmailFaultFlg ] = useState(false);
    const [ phoneFaultFlg, setPhoneFaultFlg ] = useState(false);
    const { emailText, setEmailText, phoneText, setPhoneText } = props;

    // clear all values in text inputs
    const clearAll = function a1() {
        setEmailText('');
        setPhoneText('');
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
            const screenSet = props.screenSet;
            clearAll();
            screenSet(1);
        }
    };

    return (
        <View>
            <Cardo>
                <Text>
                    Email address
                </Text>
                <TextInput
                    value={emailText}
                    onChangeText={ txt => setEmailText(txt.trim()) }
                ></TextInput>
                <Text style={{opacity: emailFaultFlg ? 100 : 0}}>
                    Please enter a valid email
                </Text>

                <Text>
                    Phone number
                </Text>
                <TextInput
                    value={phoneText}
                    onChangeText={ txt => setPhoneText(txt.trim()) }
                ></TextInput>
                <Text style={{opacity: phoneFaultFlg ? 100 : 0}}>
                    Please enter a valid phone number
                </Text>
                
                <Button title="Reset" onPress={onPressReset}></Button>

                <Button title="Sign Up" onPress={onPressSignup}></Button>

            </Cardo>
        </View>
    );
}

