import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Starting from '../screens/Starting';


export default function Signup() {
    const [ screenState, setScreenState ] = useState(0);
    const [ emailText, setEmailText ] = useState('');
    const [ phoneText, setPhoneText ] = useState('');

    let present;

    switch(screenState) {
        case 0:
            present = (
                <View>
                    <Starting 
                        screenSet={ v => setScreenState(v) }
                        emailText={emailText}
                        phoneText={phoneText}
                        setEmailText={ t => setEmailText(t) }
                        setPhoneText={ t => setPhoneText(t) }
                    >
                    </Starting>
                </View>
            );
            break;
        case 1:
            present = (
                <View>
                    <Text>
                        Screen 2
                    </Text>
                    <Button title='Back' onPress={ () => { setScreenState(0) } }></Button>
                </View>
            );
            break;
        case 2:
            present = (
                <View>

                </View>
            );
            break;
        default:
            console.log("xx");
            present = null;
            break;
    }

    return (
        <View>
            {present}
        </View>
    )
};
