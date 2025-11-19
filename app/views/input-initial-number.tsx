import { View, TextInput, Alert } from "react-native";
import TitleScreenBox from "app/components/ui/title-screen-box";
import MainBox from "app/components/ui/main-box";
import { useState } from "react";
import RandomnNumber from "app/utils/randon-number";
import { useNumbersToGuess } from "app/hooks/useNumbersToGuess";
import { useNumber } from "app/hooks/useNumber";
import { ViewContext } from "app/context/view-context";
import { useContext } from "react";
import { ViewEnum } from "app/enums/view-enums";

const InputInitialNumber = () => {
    const [input_value, set_input_value] = useState('');
    const { number, set_number } = useNumber()
    const { numbers_to_guess, set_numbers_to_guess } = useNumbersToGuess()
    const { set_current_view } = useContext(ViewContext);

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
    );
    return;
  }

  set_number(chosen_number);

  const random_numbers = [
    RandomnNumber(1, 99),
    RandomnNumber(1, 99),
    RandomnNumber(1, 99),
    RandomnNumber(1, 99),
    RandomnNumber(1, 99),
    chosen_number
  ].sort(() => Math.random() - 0.5);

  set_numbers_to_guess(random_numbers);

  set_current_view(ViewEnum.GUESS_NUMBER);
};
  
  return (
    <View className="pt-8 gap-8">
      <TitleScreenBox title="Guess My Number" />
      <MainBox  
        text="Enter a number" 
        input_value={input_value} 
        show_input left_btn_fn={reset_input} 
        right_btn_fn={confirm_input_handler} 
        handle_input_fn={handle_input}
      />
    </View>
  );
}


export default InputInitialNumber;