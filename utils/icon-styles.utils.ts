const navDesktopIconSize = '30px'
const navMobileIconSize = '20px'
const inputIconSize = '45px'
const inputErrorIconSize = '35px'

export const iconStyles = {
    nav_desktop: {
        active: {
            width: navDesktopIconSize,
            height: navDesktopIconSize,
            color: '#ffffff',
        },
        inactive: {
            width: navDesktopIconSize,
            height: navDesktopIconSize,
            color: '#444444',
        },
    },
    nav_mobile: {
        active: {
            width: navMobileIconSize,
            height: navMobileIconSize,
            color: '#ffffff',
        },
        inactive: {
            width: navMobileIconSize,
            height: navMobileIconSize,
            color: '#444444',
        },
    },
    input: {
        width: inputIconSize,
        height: inputIconSize,
        color: '#ffffff',
        error: {
            width: inputErrorIconSize,
            height: inputErrorIconSize,
            color: 'red',
        },
    },
}
