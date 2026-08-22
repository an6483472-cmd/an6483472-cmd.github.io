import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-6 py-10 md:px-margin-page">
      <div className="saas-panel max-w-xl p-10">
        <p className="font-label-mono text-label-mono text-primary">404</p>
        <h1 className="mt-2 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
          页面不存在
        </h1>
        <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
          你访问的页面不存在或已被移除。
        </p>
        <div className="mt-8">
          <Button to="/">返回首页</Button>
        </div>
      </div>
    </div>
  )
}
