import { createSelectorFunctions } from 'auto-zustand-selectors-hook'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserState = {
  username?: string
  email?: string
  id?: string
  create_at?: string
  last_sign_in_at?: string
  phone_number?: string
}

type TokenState = {
  access_token?: string
  refresh_token?: string
}

type AuthState = {
  isAuthenticated?: boolean
  token: null | TokenState
  user: null | UserState
  setUser: (user: UserState) => void
  setToken: (token: TokenState) => void
  setAuthStatus: (isAuthenticated: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      setUser: (user: UserState) => set({ user }),
      setToken: (token: TokenState) => set({ token }),
      setAuthStatus: (isAuthenticated: boolean) => set({ isAuthenticated }),
    }),
    {
      name: 'user-auth',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export const authStore = createSelectorFunctions(useAuthStore)
