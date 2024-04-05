import { HomeRoute } from '@/utils/app-routes.utils'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type RouteState = {
    current?: string
}

export const useAuthStore = create<RouteState>()(
    persist(
        (set) => ({
            current: HomeRoute,
            setRoute: (route: string) => set({ current: route }),
        }),
        {
            name: 'route',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)
