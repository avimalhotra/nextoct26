import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Js Oct 2026",
  description: "Next Js October 2026 Batch"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full ">{children}</body>
    </html>
  );
}
