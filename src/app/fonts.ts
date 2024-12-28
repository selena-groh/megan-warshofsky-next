import { Roboto, Parkinsans } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
});
