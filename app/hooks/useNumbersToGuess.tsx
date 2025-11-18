import { create } from 'zustand'

type useNumbersToGuessTypes = {
  numbers_to_guess: number[],
  set_numbers_to_guess: (numbers: number[]) => void
}

export const useNumbersToGuess = create<useNumbersToGuessTypes>((set) => ({
  numbers_to_guess: [],
  set_numbers_to_guess: (numbers) => set({numbers_to_guess: numbers})
}))