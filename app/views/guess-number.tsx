import { View,  } from "react-native";
import TitleScreenBox from "app/components/ui/title-screen-box";
import MainBox from "app/components/ui/main-box";
import NumberBox from "app/components/ui/number-box";
import { useNumbersToGuess } from "app/hooks/useNumbersToGuess";

const GuessNumber = () => {
  const { numbers_to_guess } = useNumbersToGuess()


  const showcase_random_number = () => {
    numbers_to_guess
  }

  return (
    <View className="pt-8 gap-8">
      <TitleScreenBox title="Oponent's Guess" />
      <NumberBox number={numbers_to_guess[1].toString()}/>
      <MainBox text="Higher or lower ?" left_btn_txt="-" right_btn_txt="+"/>
    </View>
  );
}

export default GuessNumber;