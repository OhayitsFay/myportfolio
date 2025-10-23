import NavLink from './NavLink';

export default function SideNav() {
  return (
    <aside className="w-64 bg-[#5a1017] shadow-lg h-screen fixed left-0 top-0 flex flex-col justify-between p-6">
      <div>
        <h2 className="text-2xl font-bold text-[#fffff1] mb-10">FAYCLOUD DEV</h2>
        <nav className="space-y-2">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>

      <div className="text-lg text-gray-900">
        © {new Date().getFullYear()} Favourite Atuhu
      </div>
    </aside>
  );
}