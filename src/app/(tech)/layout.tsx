import Link from "next/link";

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Squarespace stili */}
      <header 
        className="fixed top-0 left-0 right-0 z-10"
        style={{
          lineHeight: 1,
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        }}
      >
        <nav 
          className="w-full box-border"
          style={{
            paddingTop: '1.5vw',
            paddingBottom: '1.5vw',
            paddingLeft: '4vw',
            paddingRight: '4vw',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo / Name - Archivo Black */}
            <Link
              href="/"
              className="uppercase hover:opacity-80 transition"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: '1.2em',
              }}
            >
              Ömercan Aras
            </Link>

            {/* Menu - Space Grotesk */}
            <div className="flex gap-8">
              {[
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/travel", label: "Travel", dim: true },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    uppercase 
                    transition
                    hover:opacity-100
                    ${item.dim ? 'opacity-40' : 'opacity-70'}
                  `}
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    letterSpacing: '0em',
                    lineHeight: '1.3em',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main content - header yüksekliği kadar padding */}
      <main style={{ paddingTop: 'calc(1.5vw * 2 + 1.5rem)' }}>
        {children}
      </main>
    </div>
  );
}