import { create } from 'zustand'

type useShowTurnsTypes = {
  turn: number,
  set_turn: (number: number) => void 
}

export const useShowTurns = create<useShowTurnsTypes>((set) => ({
  turn: 0,
  set_turn: (number) => set({ turn: number })
}))