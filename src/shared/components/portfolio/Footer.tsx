export default function Footer() {
  return (
    <footer className="border-dark-border border-t px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-subtle text-sm">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </span>
        <span className="text-subtle text-sm">
          Built with <span className="text-accent-light">Next.js</span> &{' '}
          <span className="text-accent-light">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  )
}
