export const ACCESS_PASSPHRASE = 'hello AI'

/** In-memory only: refresh always returns to the entry gate. */
let granted = false

export function hasPortfolioAccess() {
  return granted
}

export function grantPortfolioAccess() {
  granted = true
}

export function clearPortfolioAccess() {
  granted = false
}
