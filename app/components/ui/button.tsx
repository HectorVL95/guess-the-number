import { Pressable, Text } from "react-native";

type ButtonTypes = {
  text: string,
  on_click: () => void
}

const Button: React.FC<ButtonTypes> = ({ text, on_click }) => {
  return (
    <Pressable className="bg-main-box-button-color px-6 w-32 py-2 rounded-full" onPress={on_click}>
      <Text className="text-white text-center">
        {text}
      </Text>
    </Pressable>
  );
}

export default Button;