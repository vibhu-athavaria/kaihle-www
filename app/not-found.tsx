import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-fraunces text-[80px] font-bold text-ink tracking[-3px] leading-none mb-4">404</h1>
      <p className="text-[18px] text-gray-600 mb-8">Page not found.</p>
      <Link href="/" className="bg-primary text-white rounded-full px-7 py-3.5 text-[15px] font-bold hover:bg-primary-dark transition-colors font-nunito">
        Back to Home
      </Link>
    </div>
  )
}
