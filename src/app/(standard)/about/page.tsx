import "server-only";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div>
      <p>About & Contact page goes here</p>
    </div>
  );
}
