import {
  Playfair_Display,
  Quicksand,
  Source_Serif_4,
  Roboto_Condensed,
  Oswald,
} from "next/font/google";
import { twMerge } from "tailwind-merge";
import type { MainLayoutProps, Theme, WithClassName } from "~/model/react";
import Head from "next/head";

// Llamada y asignación de los font loaders en el alcance del módulo
const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--serif-font",
});
const ArticleSerifFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--article-serif-font",
});
const sansFont = Quicksand({ subsets: ["latin"], variable: "--sans-font" });
const condensedSansFont = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--condensed-sans-font",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--oswald-font",
});

// interface LayoutPros {
//   toggleTheme: () => void;
//   theme: Theme;
// }
// & LayoutPros
const MainLayout: React.FC<WithClassName<MainLayoutProps>> = ({
  children,
  title,
  description,
  image,
  className,
  //   toggleTheme,
  //   theme,
}) => {
  return (
    <>
      {title && (
        <Head>
          <title>{`${title} | BinPar`}</title>
          <meta
            name="title"
            property="og:title"
            content={`${title} | BinPar`}
          />
          <meta
            name="description"
            property="og:description"
            content={description ?? title}
          />
          <meta property="og:image" content={image} />
        </Head>
      )}
      <div
        className={`${serifFont.variable} ${sansFont.variable} ${ArticleSerifFont.variable} ${oswald.variable} ${condensedSansFont.variable}`}
      >
        <div
          className={twMerge(
            "mx-auto flex min-h-screen flex-col lg:w-full ",
            className,
          )}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
