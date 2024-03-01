import { twMerge } from "tailwind-merge";
import { MainLayoutProps, Theme, WithClassName } from "~/model/react";
import Head from "next/head";
import Header from "./Header";
interface LayoutPros {
  toggleTheme: () => void;
  theme: Theme;
}
const MainLayout: React.FC<WithClassName<MainLayoutProps & LayoutPros>> = ({
  children,
  title,
  description,
  lang,
  image,
  className,
  toggleTheme,
  theme,
}) => (
  <>
    {title && (
      <Head>
        <title>{`${title} | BinPar`}</title>
        <meta name="title" property="og:title" content={`${title} | BinPar`} />
        <meta
          name="description"
          property="og:description"
          content={description || title}
        />
        <meta property="og:image" content={image} />
      </Head>
    )}

    <div
      className={twMerge(
        "mx-auto flex min-h-screen flex-col lg:w-full ",
        className,
      )}
    >
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>{children}</main>
    </div>
  </>
);

export default MainLayout;
