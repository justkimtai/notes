import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes App | Simple Note Taking and Management",
  description: "A simple and intuitive notes app where users can write, save, and update their notes easily. Organize your thoughts and keep your ideas in one place.",
  keywords: "Notes, Note Taking, Task Management, Writing, Productivity, Simple Notes App",
  authors: {
    name: "Justus Kimtai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
