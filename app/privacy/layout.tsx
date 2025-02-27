import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Aura AI",
  description: "Privacy Policy for the Aura AI application.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 