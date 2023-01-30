import { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
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

    let confirmPage;

    const showConfirmPage = screenState == 1 ? true : false;

    confirmPage = (
        <Modal
            visible={ showConfirmPage }
            transparent={true}
            animationType={"fade"}
        >
            <Confirm
                screenSet={ v => setScreenState(v) }
                setConfirmedState={ (c) => { setConfirmedState(c) } }
                emailText={emailText}
                phoneText={phoneText}
                clearTxts={ () => { clearTxts() } }
            >
            </Confirm>
        </Modal>
    );

    switch(screenState) {
        case 0:
        case 1:
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

                    { confirmPage }
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
