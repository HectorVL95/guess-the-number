import { Text, View, Image } from "react-native";
import TitleScreenBox from "app/components/ui/title-screen-box";
import { useNumber } from "app/hooks/useNumber";
import Button from "app/components/ui/button";
import { useNumbersToGuess } from "app/hooks/useNumbersToGuess";
import { ViewEnum } from "app/enums/view-enums";
import { useContext } from "react";
import { ViewContext } from "app/context/view-context";
import { useWinorLose } from "app/hooks/useWinorLose";
import { useShowTurns } from "app/hooks/useShowTurns";


const GameOver = () => {
  const { number, set_number } = useNumber();
  const { set_numbers_to_guess } = useNumbersToGuess();
  const { set_current_view } = useContext(ViewContext)
  const { win } = useWinorLose()
  const { turn } = useShowTurns()

  const reset_game = () => {
    set_number(null)
    set_numbers_to_guess([])
    set_current_view(ViewEnum.INPUT_INITIAL_NUMBER)
  }

  return (
    <View className="flex-col gap-12 py-8 justify-center items-center px-2">
        <TitleScreenBox title="Game over"/>
        <Image 
          source={require('../../assets/mountain.webp')}
          className="rounded-full w-72 h-72"
        />
        <View>
          <Text className="text-center text-2xl font-semibold">{win ? 'You won' : 'You lost'}</Text>
          <Text className="text-center text-2xl font-semibold">{win ? `It took you ${turn} turn${turn > 1 || turn === 0  ? 's' : ''} to guess ${number}` : `the correct number is ${number}`}
          </Text>
        </View>
        <Button text="Reset game" on_click={reset_game} />
    </View>
  );
}

export default GameOver;