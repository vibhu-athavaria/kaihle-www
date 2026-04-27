import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In — Kaihle',
  description: 'Sign in to your Kaihle portal.',
  robots: { index: false },
};

// Note: no 'as const' — env var interpolation produces string | undefined,
// which conflicts with TypeScript literal type inference from 'as const'.
// The '?? "#"' fallback prevents href="undefined/login" in local dev
// before .env.local is configured.
const roles = [
  {
    id: 'teacher',
    label: 'Teacher',
    description: 'Access your classes, gap maps, and lesson planner.',
    href: process.env.NEXT_PUBLIC_TEACHER_URL
      ? `${process.env.NEXT_PUBLIC_TEACHER_URL}/login`
      : '#',
    dot: '#c9932a',  // brand-gold — Teacher action color per DESIGN_SYSTEM.md §5.3
  },
  {
    id: 'school-admin',
    label: 'School Admin',
    description: 'Manage your school, users, classes, and analytics.',
    href: process.env.NEXT_PUBLIC_ADMIN_URL
      ? `${process.env.NEXT_PUBLIC_ADMIN_URL}/login`
      : '#',
    dot: '#1a5c38',  // brand-primary — School Admin action color per DESIGN_SYSTEM.md §5.2
  },
  {
    id: 'student',
    label: 'Student',
    description: 'View your study plans, progress, and assessments.',
    href: process.env.NEXT_PUBLIC_STUDENT_URL
      ? `${process.env.NEXT_PUBLIC_STUDENT_URL}/login`
      : '#',
    dot: '#1a5c38',  // brand-primary — Student action color per DESIGN_SYSTEM.md §5.4
  },
  {
    id: 'parent',
    label: 'Parent',
    description: "See your child's progress and learning reports.",
    href: process.env.NEXT_PUBLIC_PARENT_URL
      ? `${process.env.NEXT_PUBLIC_PARENT_URL}/login`
      : '#',
    dot: '#c9932a',  // brand-gold — Parent action color per DESIGN_SYSTEM.md §5.5
  },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-black font-nunito text-2xl mx-auto">
            K
          </div>
          <h1 className="font-fraunces text-2xl font-bold text-gray-900 mt-4">
            Sign in to Kaihle
          </h1>
          <p className="text-sm text-gray-500 mt-2">Choose your role to continue.</p>
        </div>

        <div className="flex flex-col gap-3">
          {roles.map((role) => (
            <a
              key={role.id}
              href={role.href}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-gray-400 transition-colors group"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: role.dot }}
              />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 group-hover:text-gray-700">
                  {role.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{role.description}</div>
              </div>
              <span className="text-gray-300 group-hover:text-gray-500 text-lg" aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Don&apos;t have an account?{' '}
          <Link href="/demo" className="text-gray-600 hover:text-gray-900 underline">
            Apply for Pilot
          </Link>
        </p>
      </div>
    </main>
  );
}
