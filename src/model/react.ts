import {
  NextComponentType,
  NextPageContext,
} from "../../node_modules/next/dist/shared/lib/utils";

export interface MainLayoutProps {
  children?: React.ReactElement | (React.ReactElement | boolean | string)[];
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
}
export type WithClassName<T = {}> = { className?: string } & T;
export type WithChildren<T = unknown> = {
  children?: React.ReactNode | undefined;
} & T;
export type WithViewBox<T = unknown> = { viewBox?: string } & T;
export type Theme = "light" | "dark";
export interface ThemeInfo {
  theme: Theme;
  img: React.ReactNode;
}

export interface ThemeSelectorProps {
  active?: boolean;
}
export type NextPage<Props = {}, InitialProps = Props> = NextComponentType<
  NextPageContext,
  InitialProps,
  Props
>;
