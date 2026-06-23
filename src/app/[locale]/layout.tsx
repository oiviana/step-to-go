import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { NavigationProvider } from "../../utils/Providers";
import "./styles/globals.css";
const mainFontFamily = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap"
});



export const metadata: Metadata = {
  title: "Oi Viana",
  description: "Lucas Viana - Analista de Sistemas",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${mainFontFamily.className} bg-v-dark-test`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
