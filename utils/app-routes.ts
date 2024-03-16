export const HomeRoute = '/'

// user authentication
export const SignUpRoute = '/signup'
export const SignInRoute = '/signin'
export const ForgotPasswordRoute = '/forgot-password'

// nav
export const SearchRoute = '/search'
export const ActivityRoute = '/activity'
export const ProfileRoute = ({ username }: { username: string }) => `/${username}`
