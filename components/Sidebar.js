"use client";

import { usePathname } from "next/navigation";

const items = [
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
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">

      <nav className="sidebar-nav">

        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(
                  item.href.split("#")[0]
                );

          return (
            <a
              key={item.href}
              href={item.href}
              className={
                active
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <img
                src={item.icon}
                alt=""
                className="sidebar-icon"
              />

              <span>
                {item.label}
              </span>
            </a>
          );
        })}

      </nav>

    </aside>
  );
}