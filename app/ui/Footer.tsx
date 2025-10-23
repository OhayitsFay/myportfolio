export default function Footer() {
  return (
    <footer className="mt-10 pt-6 border-t text-center text-gray-900 text-lg">
      <p>
        © {new Date().getFullYear()} Favourite Atuhu — Built with ❤️ using Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}