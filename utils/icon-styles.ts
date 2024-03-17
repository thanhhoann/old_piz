const navIconSize = '40px'
const inputIconSize = '45px'
const inputErrorIconSize = '35px'

export const iconStyles = {
  nav: {
    active: {
      width: navIconSize,
      height: navIconSize,
      color: '#ffffff',
    },
    inactive: {
      width: navIconSize,
      height: navIconSize,
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
