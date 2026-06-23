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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://oiviana.com.br"
  ),
  title: "Lucas Viana | Desenvolvedor de Software",
  description:
    "Portfolio de Lucas Viana, desenvolvedor de software focado em produtos web, mobile, performance e automações.",
  openGraph: {
    title: "Lucas Viana | Desenvolvedor de Software",
    description:
      "Portfolio de Lucas Viana, desenvolvedor de software focado em produtos web, mobile, performance e automações.",
    url: "/",
    siteName: "Oi Viana",
    images: [
      {
        url: "/meta-data/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Viana - Desenvolvedor de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Viana | Desenvolvedor de Software",
    description:
      "Portfolio de Lucas Viana, desenvolvedor de software focado em produtos web, mobile, performance e automações.",
    images: ["/meta-data/og-image.png"],
  },
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
