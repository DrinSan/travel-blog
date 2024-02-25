import { twMerge } from "tailwind-merge";
import { MainLayoutProps, WithClassName } from "~/model/react";
import Head from "next/head";
import Header from "./Header";

const DefaultLayout: React.FC<WithClassName<MainLayoutProps>> = ({
  children,
  title,
  description,
  lang,
  image,
  className,
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
      <Header />
      <main>{children}</main>
    </div>
  </>
);

export default DefaultLayout;
