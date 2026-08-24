import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import {
  ACCESS_PASSPHRASE,
  clearPortfolioAccess,
  grantPortfolioAccess,
  hasPortfolioAccess,
} from './access'

const AccessContext = createContext(null)

export function AccessProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => hasPortfolioAccess())

  const unlock = useCallback(() => {
    grantPortfolioAccess()
    setUnlocked(true)
  }, [])

  const lock = useCallback(() => {
    clearPortfolioAccess()
    setUnlocked(false)
  }, [])

  const value = useMemo(
    () => ({
      unlocked,
      unlock,
      lock,
      passphrase: ACCESS_PASSPHRASE,
    }),
    [unlocked, unlock, lock],
  )

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
}

export function useAccess() {
  const ctx = useContext(AccessContext)
  if (!ctx) {
    throw new Error('useAccess must be used within AccessProvider')
  }
  return ctx
}
