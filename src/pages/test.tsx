import { useEffect } from "react";
import { api } from "~/utils/api";
import Carousel from "../components/basic/Carousel";
import Slider from "../components/basic/Slider";
import MainLayout from "../components/layout/MainLayout";
import UseParallax from "../hooks/UseParallax";
import useTheme from "../hooks/UseTheme";
import { NextPage } from "../model/react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

const Test: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   // Llama a toggleTheme cada vez que theme cambie
  //   toggleTheme();
  // }, [theme, toggleTheme]); // Agrega theme y toggleTheme como dependencias

  console.log(theme);
  return (
    <>
      <section className="relative   bg-blue-400 p-4">
        <div className="transparent   w-full">
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className="mb-3 h-6 bg-red-400" />
          <div className=" h-[600px] bg-purple-400" />
        </div>

        <div className="z- sticky  top-0 h-[400px] w-full bg-yellow-400" />
      </section>
      <div className="h-[1200px] bg-green-500" />
    </>
  );
};

export default Test;
