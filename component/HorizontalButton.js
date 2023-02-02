import { Button, View } from "react-native";
import myStyling from "../resource/Styling";

/**
 * This component is a button that will line up in the View horizontally
 * @param title the button title
 * @param onPress the callback function when pressed
 * @param isWarning true if the button needs to display a warning color 
 * @returns the button component
 */
export default function HorizontalButton( {title, onPress, isWarning} ) {

    return (<View style={myStyling.buttons}>
            <Button
                title={title}
                onPress={ () => { onPress(); } }
                color={isWarning ? myStyling.colors.buttonWarningColor : myStyling.colors.buttonNormalColor}
            ></Button>
        </View>
    );
}