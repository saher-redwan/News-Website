import "./globals.css";
import localFont from "next/font/local";

const fontIndustry = localFont({
  src: [
    {
      path: "../public/fonts/Industry-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Industry-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Industry-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Industry-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Industry-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-main",
});


export const metadata = {
  title: "MC News",
  description: "News For Everything",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${fontIndustry.variable} *:font-(family-name:--font-main) min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
