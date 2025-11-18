import Button from "./button";
import { useState } from "react";
import { useContext } from "react";
import { ViewEnum } from "app/enums/view-enums";
import { useNumber } from "app/hooks/useNumber";
import RandomnNumber from "app/utils/randon-number";
import { ViewContext } from "app/context/view-context";
import { View, Text, TextInput, Alert} from "react-native";
import { useNumbersToGuess } from "app/hooks/useNumbersToGuess";

type MainBoxTypes = {
  text: string,
  show_input?: boolean,
  left_btn_txt?: string,
  right_btn_txt?: string,
}

const MainBox: React.FC<MainBoxTypes> = ({ text, show_input, left_btn_txt = 'Reset', right_btn_txt = 'Confirm' }) => {
  const [input_value, set_input_value] = useState('');
  const { set_current_view } = useContext(ViewContext);
  const { number, set_number } = useNumber()
  const { numbers_to_guess, set_numbers_to_guess } = useNumbersToGuess()

  const handle_input = (e: string) => {
    set_input_value(e);
  }
  
  const reset_input = () => {
    set_input_value('');
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
    set_number(parseInt(input_value))
    set_current_view(ViewEnum.GUESS_NUMBER) 

    const new_number = useNumber.getState().number

    const random_numbers = [RandomnNumber(1, 99), RandomnNumber(1, 99), RandomnNumber(1, 99), new_number]
    set_numbers_to_guess([...random_numbers])
    
  }

  console.log(number)
  console.log(numbers_to_guess)

  return (
    <View className="bg-main-box-color rounded-xl flex-col gap-4 py-4">
      <Text className="text-main-box-color text-center text-2xl">{text}</Text>
     {
      show_input && 
      <View className="w-full justify-center h-[60px] items-center px-4">
        <TextInput
          className="w-14 border-b input-border-color text-center text-4xl text-main-box-color"
          value={input_value}
          style={{color: '#c7aa08'}}
          onChangeText={handle_input}
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>
      }
      <View className="gap-4 flex-row justify-center">
        <Button 
          text={left_btn_txt} 
          on_click={reset_input}
        />
        <Button 
          text={right_btn_txt} 
          on_click={confirm_input_handler}
        />
      </View>
    </View>
  );
}

export default MainBox;