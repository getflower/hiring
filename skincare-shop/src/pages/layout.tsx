import { NavBar } from "@/components/NavBar";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      className={roboto.className}
      style={{
        background: "linear-gradient(135deg, #f3e8ff 0%, #e0c3fc 100%)",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
