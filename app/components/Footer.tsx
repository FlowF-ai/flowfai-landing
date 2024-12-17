import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FlowFai. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/privacy" className="text-primary hover:text-primary/80 mr-4">Privacy Policy</Link>
          <Link href="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

