import { SocialIcons } from "../molecules/SocialIcons";
import { NavMenu } from "../molecules/NavMenu";
import { Logo } from "../atoms/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <NavMenu />
        <SocialIcons />
      </div>
    </header>
  );
}
