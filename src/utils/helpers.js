export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getProjectById(projects, id) {
  return projects.find((project) => project.id === id) ?? null
}

export async function copyText(value) {
  if (!value) return false
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}
