import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

const mainFontFamily = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Step to Go",
  description: "Lucas Viana - Desenvolvedor Full Stack",
  icons: {
    icon: ["/icon.ico"],
  },
};

const locales = ["en", "pt"];


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!locales.includes(locale as any)) notFound();
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={`${mainFontFamily.className} bg-v-white-500 dark:bg-v-dark-500`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
