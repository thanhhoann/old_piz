import { create } from 'zustand'
import { createSelectorFunctions } from 'auto-zustand-selectors-hook'

interface UserState {
  username: string
  email: string
  id: string
  create_at: string
  last_sign_in_at: string
  phone_number: string
  setUsername: (username: string) => void
  setEmail: (email: string) => void
  setId: (id: string) => void
  setCreateAt: (create_at: string) => void
  setLastSignInAt: (last_sign_in_at: string) => void
  setPhoneNumber: (phone_number: string) => void
}

export const useUserStore = create<UserState>()((set) => ({
  username: '',
  email: '',
  id: '',
  create_at: '',
  last_sign_in_at: '',
  phone_number: '',
  setUsername: (username: string) => set({ username }),
  setEmail: (email: string) => set({ email }),
  setId: (id: string) => set({ id }),
  setCreateAt: (create_at: string) => set({ create_at }),
  setLastSignInAt: (last_sign_in_at: string) => set({ last_sign_in_at }),
  setPhoneNumber: (phone_number: string) => set({ phone_number }),
}))

export const userStore = createSelectorFunctions(useUserStore)
