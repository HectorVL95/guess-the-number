import { View, Text } from "react-native";

type NumberBoxTypes = {
  number: string
}

const NumberBox: React.FC<NumberBoxTypes> = ({number}) => {
  return (
    <View className="border-4 rounded-lg gold-border py-6">
      <Text className="text-main-box-color text-6xl text-center">{number}</Text>
    </View>
  );
}

export default NumberBox;