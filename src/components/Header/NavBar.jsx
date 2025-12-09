import Logo from "./Logo.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
import BurgerButton from "./BurgerButton.jsx";

export default function NavBar({ mobileOpen, setMobileOpen }) {
  return (
    <div className="py-4 bg-transparent backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        <DesktopMenu />
        <BurgerButton open={mobileOpen} setOpen={setMobileOpen} />
      </div>
    </div>
  );
}
