import { useMedia } from 'use-media'

export enum screenSizes {
    MOBILE_S = 'mobile_s',
    MOBILE_M = 'mobile_m',
    MOBILE_L = 'mobile_l',
    TABLET = 'tablet',
    DESKTOP = 'desktop',
    DESKTOP_L = 'desktop_l',
}

export const SCREEN_SIZES = {
    mobile_s: '320px',
    mobile_m: '375px',
    mobile_l: '425px',
    tablet: '768px',
    desktop: '1024px',
    desktop_l: '1440px',
}

export const minWidth = (screen: screenSizes) => {
    return { minWidth: SCREEN_SIZES[screen] }
}

export const maxWidth = (screen: screenSizes) => {
    return { maxWidth: SCREEN_SIZES[screen] }
}

export const useMobile = (width: string, size: string) => {
    if (width == 'min_width' && size == 's') return useMedia(minWidth(screenSizes.MOBILE_S))
    if (width == 'min_width' && size == 'm') return useMedia(minWidth(screenSizes.MOBILE_M))
    if (width == 'min_width' && size == 'l') return useMedia(minWidth(screenSizes.MOBILE_L))

    if (width == 'max_width' && size == 's') return useMedia(maxWidth(screenSizes.MOBILE_S))
    if (width == 'max_width' && size == 'm') return useMedia(maxWidth(screenSizes.MOBILE_M))
    if (width == 'max_width' && size == 'l') return useMedia(maxWidth(screenSizes.MOBILE_L))
}

export const useDesktop = (width: string) => {
    if (width == 'min_width') return useMedia(minWidth(screenSizes.DESKTOP))
    if (width == 'max_width') return useMedia(maxWidth(screenSizes.DESKTOP))
}
