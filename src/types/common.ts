export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export interface ButtonVariant {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export type Theme = 'light' | 'dark' | 'system'

export interface ApiResponse<T> {
  data: T
  error?: string
  success: boolean
}

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}
