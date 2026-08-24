import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-stack-md px-6 md:flex-row md:px-margin-page">
        <p className="font-label-mono text-label-mono text-on-surface-variant">
          {site.footerCopy}
        </p>
        <div className="flex gap-6">
          {site.social
            .filter((item) => site.showGithub || item.label !== 'GitHub')
            .map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
