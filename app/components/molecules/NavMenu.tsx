import Link from "next/link";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Discografia", path: "/pages/discrografia" },
  { name: "Musicas-populares", path: "/blog" },
  { name: "Curiosidades", path: "/about" },
  { name: "Contato", path: "/contact" },
];

export function NavMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
