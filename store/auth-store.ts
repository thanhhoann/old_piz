import type { SignInProps, SignUpProps } from "@/utils/types.utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const supabase = createClientComponentClient();

type UserState = {
	id?: string;
	email?: string;
	username?: string;
	create_at?: string;
	last_sign_in_at?: string;
	phone_number?: string;
	avatar_url?: string;
};

type TokenState = {
	token_type?: string;
	access_token?: string;
	refresh_token?: string;
};

type AuthState = {
	isAuthenticated: boolean;
	tokens: null | TokenState;
	user: null | UserState;
	setUser: (user: UserState) => void;
	setTokens: (tokens: TokenState) => void;
	setAuthStatus: (isAuthenticated: boolean) => void;
	getUser: () => Promise<UserState | null>;
	signIn: (props: SignInProps) => void;
	signUp: (props: SignUpProps) => void;
	signOut: () => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuthenticated: false,
			tokens: null,
			user: null,
			// sets
			setUser: (user: UserState) => set({ user }),
			setTokens: (tokens: TokenState) => set({ tokens }),
			setAuthStatus: (isAuthenticated: boolean) => set({ isAuthenticated }),
			// GET user (isAuthenticated = true)
			getUser: async () => {
				const {
					data: { user },
				} = await supabase.auth.getUser();
				const user_info = {
					id: user?.id,
					email: user?.email,
					username: user?.user_metadata.username,
					created_at: user?.created_at,
					last_sign_in_at: user?.last_sign_in_at,
					phone_number: user?.phone,
				};
				set({ user: user_info });
				return user_info;
			},
			// sign in
			signIn: async ({ email, password }: SignInProps) => {
				const { data, error } = await supabase.auth.signInWithPassword({
					email,
					password,
				});
				if (error) throw error;
				const user_data = data.user;
				const session_data = data.session;
				const user_info = {
					id: user_data?.id,
					email: user_data?.email,
					username: user_data?.user_metadata.username,
					created_at: user_data?.created_at,
					last_sign_in_at: user_data?.last_sign_in_at,
					phone_number: user_data?.phone,
				};
				const tokens = {
					token_type: session_data?.token_type,
					access_token: session_data?.access_token,
					refresh_token: session_data?.refresh_token,
				};
				set({ user: user_info });
				set({ tokens: tokens });
				set({ isAuthenticated: true });
			},
			// sign up
			signUp: async ({ username, email, password }: SignUpProps) => {
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						data: { username: username },
						emailRedirectTo: `${location.origin}/api/auth/callback`,
					},
				});
				if (error) throw error;
				const user_data = data.user;
				const session_data = data.session;

				const user_info = {
					id: user_data?.id,
					email: user_data?.email,
					username: user_data?.user_metadata.username,
					created_at: user_data?.created_at,
					last_sign_in_at: user_data?.last_sign_in_at,
					phone_number: user_data?.phone,
				};

				const tokens = {
					token_type: session_data?.token_type,
					access_token: session_data?.access_token,
					refresh_token: session_data?.refresh_token,
				};

				set({ user: user_info });
				set({ tokens: tokens });
				set({ isAuthenticated: true });
			},
			// sign out
			signOut: async () => {
				await supabase.auth.signOut();
				set({ user: null });
				set({ tokens: null });
				set({ isAuthenticated: false });
			},
			// reset password
			// resetPassword: async (email: string) => {
			//
			//     const { data, error } = await supabase.auth
			//         .resetPasswordForEmail('user@email.com')
			//
			//     useEffect(() => {
			//         supabase.auth.onAuthStateChange(async (event, session) => {
			//             if (event == "PASSWORD_RECOVERY") {
			//                 const newPassword = prompt("What would you like your new password to be?");
			//                 const { data, error } = await supabase.auth
			//                     .updateUser({ password: newPassword })
			//
			//                 if (data) alert("Password updated successfully!")
			//                 if (error) alert("There was an error updating your password.")
			//             }
			//         })
			//     }, [])
			// }
		}),
		{
			name: "user-auth",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export const authStore = createSelectorFunctions(useAuthStore);
