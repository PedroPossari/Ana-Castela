import { FaInstagram, FaTwitter, FaSpotify, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/anacastelacantora/",
    icon: <FaInstagram />,
  },
  { name: "Twitter", url: "https://x.com/boiadeirahits", icon: <FaTwitter /> },
  {
    name: "Spotify",
    url: "https://open.spotify.com/intl-pt/artist/2CKOmarVWvWqkNWUatHCex",
    icon: <FaSpotify />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@anacastelaoficial",
    icon: <FaYoutube />,
  },
];

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors text-2xl"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
