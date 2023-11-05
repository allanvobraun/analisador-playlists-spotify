import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Pacifico } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-pacifico",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main
        className={`${pacifico.variable} flex h-screen flex-col items-center justify-center`}
      >
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
