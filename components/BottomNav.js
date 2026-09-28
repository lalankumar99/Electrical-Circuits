"use client";

import { usePathname } from "next/navigation";

const navigation = [
  {
    href: "/",
    label: "Home",
    icon: "/icons/home.svg"
  },
  {
    href: "/#study-material",
    label: "Units",
    icon: "/icons/unit.svg"
  },
  {
    href: "/practical",
    label: "Practical",
    icon: "/icons/practical.svg"
  },
  {
    href: "/#search",
    label: "Search",
    icon: "/icons/search.svg"
  }
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">

        {navigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(
                  item.href.split("#")[0]
                );

          return (
            <a
              key={item.label}
              href={item.href}
              className={
                active
                  ? "active"
                  : ""
              }
            >
              <img
                src={item.icon}
                alt=""
                className="bottom-nav-icon"
              />

              <span>
                {item.label}
              </span>
            </a>
          );
        })}

      </div>
    </nav>
  );
}