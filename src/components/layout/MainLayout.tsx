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
        "bg-mainLight dark:bg-mainDark text-mainGray mx-auto flex min-h-screen flex-col px-7 pt-5 md:px-10 lg:w-full xl:px-32",
        className,
      )}
    >
      <Header />
      <main className="">{children}</main>
    </div>
  </>
);

export default DefaultLayout;
