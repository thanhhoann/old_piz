import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { clerkMiddleware } from "@clerk/nextjs/server";

import type { Database } from "@/lib/database.types";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	// Create a Supabase client configured to use cookies
	const supabase = createMiddlewareClient<Database>({ req, res });

	// Refresh session if expired - required for Server Components
	await supabase.auth.getSession();

	return res;
}

export default clerkMiddleware();

// Ensure the middleware is only called for relevant paths.
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico).*)",
		"/((?!.*\\..*|_next).*)",
		"/",
		"/(api|trpc)(.*)",
	],
};
