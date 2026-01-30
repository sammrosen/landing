import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Next.js 16 Proxy (formerly Middleware)
 * 
 * This runs on the Node.js runtime by default (not Edge like middleware did).
 * Use this for:
 * - Modifying headers
 * - Redirects based on request properties
 * - A/B testing
 * - Authentication checks
 */
export function proxy(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl

  // Example: Add custom headers to all responses
  const response = NextResponse.next()
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  return response
}

// Configure which paths the proxy runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
