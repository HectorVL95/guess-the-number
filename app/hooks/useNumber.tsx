import { create } from 'zustand'

type useNumberTypes = {
  number: null | number,
  set_number: (selected_number: number | null)  =>  void,
  reset_number: () => void
}

export const useNumber = create<useNumberTypes>((set) => ({
  number: null,
  set_number: (selected_number) => set(({number: selected_number})),
  reset_number: () => set({number: null})
}))