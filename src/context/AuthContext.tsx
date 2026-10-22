import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type AuthValue = {
  signedIn: boolean
  name: string
  signIn: (name: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)
  const [name, setName] = useState('')

  const value: AuthValue = {
    signedIn,
    name,
    signIn: (newName) => {
      setName(newName.trim() || 'Reader')
      setSignedIn(true)
    },
    signOut: () => {
      setSignedIn(false)
      setName('')
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
