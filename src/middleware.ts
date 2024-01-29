import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url: string[] =  request.url.match('//.*?/(.*)')
  return NextResponse.rewrite('https://www.axis.com/' + url[1]);
}
 
export const config = {
    api: {
      externalResolver: true,
      bodyParser: false,
    },
    matcher: [
      '/(core/.*|modules/.*|themes/.*|sites/.*|partner_pages.*|products.*|support.*)',
      ]
  }