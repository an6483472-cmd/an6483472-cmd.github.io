import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../../data/site'
import { cn } from '../../utils/helpers'
import Button from './Button'
import Icon from './Icon'

function resolveActive(itemId, pathname) {
  if (itemId === 'product') {
    return pathname.startsWith('/works')
  }
  if (itemId === 'nodes') {
    return pathname.startsWith('/about')
  }
  if (itemId === 'contact') {
    return pathname.startsWith('/contact')
  }
  return false
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-margin-page">
        <Link
          to="/"
          className="font-brand text-[2rem] leading-none font-normal tracking-normal text-on-surface"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const active = resolveActive(item.id, pathname)
            return (
              <NavLink
                key={item.id}
                to={item.href}
                className={cn(
                  'font-label-mono text-label-mono transition-colors duration-200',
                  active
                    ? 'font-medium text-primary'
                    : 'text-on-surface-variant hover:text-on-surface',
                )}
              >
                {item.label}
              </NavLink>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          {site.showCvDownload ? (
            <Button
              href={site.cvHref}
              className="hidden sm:inline-flex"
              download
            >
              下载简历
            </Button>
          ) : null}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-outline-variant bg-card p-2 text-on-surface shadow-sm md:hidden"
            aria-label="打开菜单"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-outline-variant bg-card/95 px-6 py-stack-md backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-stack-md">
            {site.nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={cn(
                    'font-label-mono text-label-mono',
                    resolveActive(item.id, pathname)
                      ? 'text-primary'
                      : 'text-on-surface-variant',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {site.showCvDownload ? (
              <li>
                <Button href={site.cvHref} download className="w-full">
                  下载简历
                </Button>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
