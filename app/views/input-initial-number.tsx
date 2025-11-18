import { View, TextInput } from "react-native";
import TitleScreenBox from "app/components/ui/title-screen-box";
import MainBox from "app/components/ui/main-box";

const InputInitialNumber = () => {
  return (
    <View className="pt-8 gap-8">
      <TitleScreenBox title="Guess My Number" />
      <MainBox  text="Enter a number"/>
    </View>
  );
}

export default InputInitialNumber;