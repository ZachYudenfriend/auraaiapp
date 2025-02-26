import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms & Conditions | Aura AI",
  description: "Licensed Application End User License Agreement for the Aura AI application.",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 