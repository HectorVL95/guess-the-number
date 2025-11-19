import {create} from 'zustand'

type useWinorLoseTypes = {
  win: boolean,
  set_win: (outcome: boolean) => void
}

export const useWinorLose = create<useWinorLoseTypes>((set) => ({
  win: false,
  set_win: (outcome: boolean) => set({win: outcome})
})) 