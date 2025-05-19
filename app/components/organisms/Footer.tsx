export const Footer = () => {
  return (
    <footer className={`py-4 text-center bg-gray-100 border-t border-gray-300` }>
      <p className={`text-gray-600`}>
        Contato:{" "}
        <a 
          href="mailto:contato@FansAnaCastelo.com" 
          className={`text-blue-600 hover:underline`}
        >
          contato@FansAnaCastelo.com
        </a>
      </p>
    </footer>
  );
};