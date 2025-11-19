import { View,  } from "react-native";
import TitleScreenBox from "app/components/ui/title-screen-box";
import MainBox from "app/components/ui/main-box";
import NumberBox from "app/components/ui/number-box";
import { useNumbersToGuess } from "app/hooks/useNumbersToGuess";
import Button from "app/components/ui/button";
import { useNumber } from "app/hooks/useNumber";
import { useState } from "react";
import { ViewEnum } from "app/enums/view-enums";
import { useContext } from "react";
import { ViewContext } from "app/context/view-context";
import { useShowTurns } from "app/hooks/useShowTurns";

const GuessNumber = () => {
  const { numbers_to_guess } = useNumbersToGuess();
  const { number } = useNumber();
  const [index, set_index] = useState(() => Math.floor(Math.random() * numbers_to_guess.length));
  const {set_current_view} = useContext(ViewContext);
  const { turn, set_turn } = useShowTurns()

  const select_the_number = (idx: number) => {
    if (numbers_to_guess[index] === number) {
      set_current_view(ViewEnum.GAME_OVER)
    } else {
      numbers_to_guess.filter(number => number !== numbers_to_guess[index])
      set_turn(turn + 1)
    }
  }

  const previous_number = () => {
    set_index(prev => (prev - 1 + numbers_to_guess.length) % numbers_to_guess.length)
  }

  const next_number = () => {
    set_index(prev => (prev + 1) % numbers_to_guess.length)
  }

  return (
    <View className="pt-8 gap-8">
      <TitleScreenBox title="Oponent's Guess" />
      <NumberBox number={numbers_to_guess[index].toString()}/>
      <View className="flex justify-center items-center">
        <Button 
          text="Select this one"
          on_click={select_the_number}
        />
      </View>
      <MainBox text="Check the numbers" left_btn_txt="<" right_btn_txt=">" right_btn_fn={previous_number} left_btn_fn={next_number}/>
    </View>
  );
}

export default GuessNumber;