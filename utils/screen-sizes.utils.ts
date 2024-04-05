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

// TODO: implement useMedia here
