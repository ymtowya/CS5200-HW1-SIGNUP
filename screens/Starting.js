import { Button, TextInput, View } from "react-native";
import { Card } from '../component/Card';

export default function Starting(props) {

    return (
        <View>
            <Card>
                <Text>
                    Email address
                </Text>
                <TextInput></TextInput>
                <Text>
                    Please enter a valid email
                </Text>

                <Text>
                    Phone number
                </Text>
                <TextInput></TextInput>
                <Text>
                    Please enter a valid phone number
                </Text>
                
                <Button title="Reset"></Button>

                <Button title="Sign Up"></Button>
            </Card>
        </View>
    );
}