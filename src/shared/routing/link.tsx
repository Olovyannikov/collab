import type React from "react";

import { usePageContext } from "vike-react/usePageContext";
import { NavLink } from "@mantine/core";

export function Link({ href, children }: { href: string; children: React.ReactNode }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <NavLink href={href} active={isActive} label={children}/>
  );
}