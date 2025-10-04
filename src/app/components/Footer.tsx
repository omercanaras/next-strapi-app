export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-12 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Dienstleistungen. Alle Rechte vorbehalten.
        </div>
      </footer>
    );
  }