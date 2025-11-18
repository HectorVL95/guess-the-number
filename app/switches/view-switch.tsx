import { ViewEnum } from 'app/enums/view-enums';
import { ViewContext } from 'app/context/view-context';
import { useContext } from 'react';
import GameOver from 'app/views/game-over';
import InputInitialNumber from 'app/views/input-initial-number';
import GuessNumber from 'app/views/guess-number';


const ViewSwitch = () => {
  const { current_view } = useContext(ViewContext)

  switch (current_view) {
    case ViewEnum.INPUT_INITIAL_NUMBER:
      return <InputInitialNumber />;
    case ViewEnum.GUESS_NUMBER:
      return <GuessNumber />;
    case ViewEnum.GAME_OVER:
      return <GameOver />;
    default:
      return <InputInitialNumber />
  }
}

export default ViewSwitch