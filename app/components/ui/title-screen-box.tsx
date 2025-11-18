import { View, Text } from "react-native";

const TitleScreenBox = ({title}: {title: string}) => {
  return (
    <View className="border p-4 border-white border-8" >
      <Text className="text-white font-bold text-4xl" >{title}</Text>
    </View>
  );
}

export default TitleScreenBox;