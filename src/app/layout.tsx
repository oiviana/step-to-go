import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";

const mainFontFamily = JetBrains_Mono({ subsets: ["latin"], display:"swap",  });

export const metadata: Metadata = {
  title: "Step to Go",
  description: "Lucas Viana - Desenvolvedor Full Stack",
  icons:{
    icon: ['/icon.ico']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFontFamily.className} bg-v-white-500 dark:bg-v-dark-500`}>{children}</body>
    </html>
  );
}
