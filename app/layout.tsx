"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/lib/apollo";

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
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
