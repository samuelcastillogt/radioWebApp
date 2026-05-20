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
  setRadios: (radios: IradioData[]) => set(() => ({ radios: radios })),
  setRadioSelected: (radio: Iradio) => set(() => ({ radioSelected: radio })),
    closeRadioSelected: () => set(() => ({ radioSelected: null }))
}))

export default useStore

