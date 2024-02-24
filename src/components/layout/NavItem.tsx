import React, { useState } from "react";

interface NavItem {
  href: string;
  title: string;
}

interface NavItemsProps {
  items: NavItem[];
  selectedOption?: string;
}

const NavItem: React.FC<NavItemsProps> = ({ items, selectedOption }) => {
  const [activeOption, setActiveOption] = useState<string>(
    selectedOption && items.length > 0
      ? items.find((o) => o.title === selectedOption)?.title ||
          items[0]?.title ||
          ""
      : "",
  );
  return (
    <>
      {items.map(({ href, title }) => (
        <li
          aria-current={activeOption}
          key={title}
          className="py-2 text-white transition-all duration-200 hover:brightness-75"
        >
          <a href={href}>{title}</a>
        </li>
      ))}
    </>
  );
};

export default NavItem;
