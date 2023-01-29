import { useState } from 'react';
import { View } from 'react-native';


export default function Signup() {
    const {screenState, setScreenState} = useState(0);

    let present;

    switch(screenState) {
        case 0:
            present = (
                <View>

                </View>
            );
            break;
        case 1:
            present = (
                <View>

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
            present = null;
            break;
    }

    return (
        <View>
            {present}
        </View>
    )
};
