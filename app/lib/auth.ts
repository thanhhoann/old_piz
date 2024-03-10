import { SignInRoute } from '@/utils/app_routes'
import NextAuth from 'next-auth'
import { NextAuthConfig } from 'next-auth'
import Github from "@auth/core/providers/github"
import Facebook from "@auth/core/providers/facebook"
import { SupabaseAdapter } from "@auth/supabase-adapter"

const authOptions: NextAuthConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID as string,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET as string,
        }),
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
    }),
    pages: {
        signIn: SignInRoute
    },
}

export const { handlers: { GET, POST }, auth } = NextAuth(authOptions)
