import { create } from 'zustand'
import type { Iradio, IradioData } from '../../interfaces/radio.interface'

type Store = {
  radios: IradioData[]
  setRadios: (radios: IradioData[]) => void
  radioSelected: Iradio | null
  setRadioSelected: (radio: Iradio) => void
  closeRadioSelected: () => void
}

const useStore = create<Store>()((set) => ({
  radios: [],
  radioSelected: null,
  setRadios: (radios: IradioData[]) => set((state) => ({ radios: radios })),
  setRadioSelected: (radio: Iradio) => set((state) => ({ radioSelected: radio })),
    closeRadioSelected: () => set((state) => ({ radioSelected: null }))
}))

export default useStore

