// https://vike.dev/Head

import React from "react";
import logoUrl from "../public/logo.svg";

import { ColorSchemeScript } from "@mantine/core";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <ColorSchemeScript />
    </>
  );
}
