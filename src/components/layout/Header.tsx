import NavItem from "./NavItem";

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-40 flex w-full items-center justify-between border-b border-white/60 bg-[#2e026d] px-10 py-2 xl:px-40">
      <a href="index" className="w-fit text-2xl text-white">
        Soy Un Logo
      </a>
      <div>
        <nav>
          <ul className="flex w-fit items-center gap-3">
            <NavItem
              items={[
                { href: "#", title: "Nosotros" },
                { href: "#", title: "Paises" },
                { href: "#", title: "contacto" },
              ]}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
