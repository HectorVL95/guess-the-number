import { View, Text, FlatList } from "react-native";
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
import { useWinorLose } from "app/hooks/useWinorLose";

const GuessNumber = () => {
  const { numbers_to_guess, set_numbers_to_guess } = useNumbersToGuess();
  const { number } = useNumber();
  const [index, set_index] = useState(() => Math.floor(Math.random() * numbers_to_guess.length));
  const {set_current_view} = useContext(ViewContext);
  const { turn, set_turn } = useShowTurns()
  const [failed_try, set_failed_try] = useState<number[]>([])
  const { set_win } = useWinorLose()
  

  const select_the_number = () => {
    if (numbers_to_guess[index] === number) {
      set_current_view(ViewEnum.GAME_OVER)
      set_win(true)
    } else {
      const wrong_value = numbers_to_guess[index]
      const remaining_number = numbers_to_guess.filter((_, i) => i !== index)
      set_numbers_to_guess(remaining_number)
      // console.log('remaining: ', numbers_to_guess)
      // console.log('Wrong value: ', wrong_value)
      set_turn(turn + 1)

      set_failed_try([...failed_try, wrong_value])

      if (turn === 4) {
        set_current_view(ViewEnum.GAME_OVER)
       }

    }


  }

  const previous_number = () => {
    set_index(prev => (prev - 1 + numbers_to_guess.length) % numbers_to_guess.length)
  }

  // console.log(failed_try)
  console.log(turn)

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
      <FlatList
        data={failed_try}
        renderItem={({item, index}) => {
          return (
          <View className="bg-unsuccessful-turn border-2 py-4 px-2 rounded-full" key={index}>
            <Text className="text-center">#{index + 1} You guessed {item} which is wrong </Text>
          </View>
         
          )
        }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }}/>}
      />
    </View>
  );
}

export default GuessNumber;