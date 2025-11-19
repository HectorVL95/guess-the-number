import Button from "./button";
import { View, Text, TextInput, Alert} from "react-native";

type MainBoxTypes = {
  text: string,
  input_value?: string,
  show_input?: boolean,
  left_btn_txt?: string,
  right_btn_txt?: string,
  left_btn_fn: () => void,
  right_btn_fn: () => void
  handle_input_fn?: () => void
}

const MainBox: React.FC<MainBoxTypes> = ({ text, input_value, show_input, left_btn_txt = 'Reset', right_btn_txt = 'Confirm', left_btn_fn, right_btn_fn, handle_input_fn }) => {

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
          onChangeText={handle_input_fn}
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>
      }
      <View className="gap-4 flex-row justify-center">
        <Button 
          text={left_btn_txt} 
          on_click={left_btn_fn}
        />
        <Button 
          text={right_btn_txt} 
          on_click={right_btn_fn}
        />
      </View>
    </View>
  );
}

export default MainBox;