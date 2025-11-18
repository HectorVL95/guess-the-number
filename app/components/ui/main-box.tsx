import { View, Text, TextInput, Alert} from "react-native";
import Button from "./button";
import { useState } from "react";


const MainBox = ({text}: {text: string}) => {
  const [input_value, set_input_value] = useState('')

  const handle_input = (e: string) => {
    const input = parseInt(input_value)

    set_input_value(e)
  }
  
  const reset_input = () => {
    set_input_value('')
  }

  const confirm_input_handler = () => {
    const chosen_number = parseInt(input_value);

    if (chosen_number < 1 || chosen_number > 99 || isNaN(chosen_number)) {
      Alert.alert(
        'invalid number',
        'Number has to be between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: reset_input }]
      )
      return;
    }

  }


  return (
    <View className="bg-main-box-color rounded-xl flex-col gap-2 py-4">
      <Text className="text-main-box-color text-center text-2xl">{text}</Text>
      <View className="w-full justify-center items-center">
        <TextInput
          className="w-14 border-b input-border-color text-center text-4xl "
          value={input_value}
          onChangeText={handle_input}
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>
      <View className="gap-4 flex-row justify-center">
        <Button text="Reset" on_click={reset_input}/>
        <Button text="Confirm" on_click={confirm_input_handler}/>
      </View>
    </View>
  );
}

export default MainBox;