import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Starting from '../screens/Starting';
import Confirm from '../screens/Confirm';
import Finish from '../screens/Finish';


export default function Signup() {
    const [ screenState, setScreenState ] = useState(0);
    const [ confirmedState, setConfirmedState ] = useState(false);
    const [ emailText, setEmailText ] = useState('');
    const [ phoneText, setPhoneText ] = useState('');

    let present;

    const clearTxts = function f1() {
        setEmailText('');
        setPhoneText('');
    }

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
                        clearTxts={ () => { clearTxts() } }
                    >
                    </Starting>
                </View>
            );
            break;
        case 1:
            present = (
                <View>
                    <Confirm
                        screenSet={ v => setScreenState(v) }
                        setConfirmedState={ (c) => { setConfirmedState(c) } }
                        emailText={emailText}
                        phoneText={phoneText}
                        clearTxts={ () => { clearTxts() } }
                    >
                    </Confirm>
                </View>
            );
            break;
        case 2:
            present = (
                <View>
                    <Finish
                        screenSet={ v => setScreenState(v) }
                        confirmedState={confirmedState}
                        setConfirmedState={ (c) => { setConfirmedState(c) } }
                        emailText={emailText}
                        phoneText={phoneText}
                        clearTxts={ () => { clearTxts() } }
                    >
                    </Finish>
                </View>
            );
            break;
        default:
            console.error("No element selected!");
            present = null;
            break;
    }

    return (
        <View>
            {present}
        </View>
    )
};
