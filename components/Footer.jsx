export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 py-6 mt-12">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Therafy. All rights reserved.
      </div>
    </footer>
  );
}
