"use client";
import Image from "next/image";
import React, { BaseSyntheticEvent } from "react";

import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";
import { CornerDownLeft } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  let lastTarget: EventTarget & HTMLImageElement;

  const Enlarge = (event: React.MouseEvent<HTMLImageElement>) => {
    if (lastTarget) {
      lastTarget.style.scale = "1";
      lastTarget.style.margin = "0";
    }

    event.currentTarget.style.scale = "2.5";
    event.currentTarget.style.margin = "200px";

    lastTarget = event.currentTarget;
  };

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <div className="sticky top-0 py-5 z-50 flex justify-center bg-opacity-80 border-gray-200 border-b-2 backdrop-blur-md bg-white md:px-36 px-5 w-fit rounded-b-lg md:gap-10 gap-2 drop-shadow-2xl">
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 border-2 min-w-[100px]"
          asChild
        >
          <a href="/">Koti</a>
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 border-2 min-w-[100px]"
          asChild
        >
          <a href="/galleria">Galleria</a>
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 border-2 min-w-[100px]"
        >
          Lisätietoja
        </Button>
      </div>
      <div className="relative w-auto h-auto">
        {/* Otsikot */}

        <h1
          className="font-extrabold
                      text-center
                      md:text-6xl
                      text-4xl
                      pt-48 
                      bg-gradient-to-t from-slate-950 to-slate-600 
                      text-transparent 
                      bg-clip-text 
                      drop-shadow-2xl"
        >
          Galleria
        </h1>
        <h2
          className="font-bold
                      text-center
                      md:max-w-md
                      max-w-sm  
                      md:text-2xl
                      text-xl 
                      bg-gradient-to-t from-slate-800 to-slate-500
                      text-transparent
                      bg-clip-text 
                      drop-shadow-2xl"
        >
          Tänne tulee kuvia projekteista ja kaikesta hauskasta
        </h2>
      </div>
      <Separator className=" my-32 bg-white py-[1px] max-w-[80%] border-gray-100 border-b-2" />
      {/* blobs start */}

      <div
        className="rounded-full 
        lg:w-96 lg:h-96
        w-64 h-64 
                      bg-amber-300 
                      mix-blend-multiply 
                      opacity-80 blur-[150px] 
                      absolute -z-10 
                      animate-blob"
      ></div>
      <div
        className="rounded-full 
        lg:w-96 lg:h-96
        w-64 h-64
                      bg-sky-300 
                      mix-blend-multiply 
                      opacity-80 blur-[150px] 
                      absolute -z-10 
                      lg:right-64 lg:top-72
                      right-32 top-48 
                      animate-blob 
                      animation-delay-2000"
      ></div>
      <div
        className="rounded-full 
                      lg:w-96 lg:h-96
                      w-64 h-64 
                      bg-pink-300 
                      mix-blend-multiply 
                      opacity-80 blur-[150px] 
                      absolute -z-10
                      lg:left-56 lg:top-64
                      left-32 top-48
                      animate-blob
                      animation-delay-4000"
      ></div>

      {/* blobs end */}

      <div className="flex flex-wrap justify-center gap-3 mb-10 drop-shadow-2xl [&>*]:rounded-lg relative">
        <img
          src="/gallery/Arcs.jpg"
          onClick={Enlarge}
          id="arcs"
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/bananaduck.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/CropGlitchArt.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/desert.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/igpf.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/jol-1.jpg"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/kaljio.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/PROFpianomiäs.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/kukkatest.webp"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/leaf.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/leikkauspöytä.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
        <img
          src="/gallery/PianoKeys.png"
          onClick={Enlarge}
          className="md:w-[256px] md:h-[256px] w-[200px] h-[200px] object-cover hover:scale-90 duration-500"
        />
      </div>
    </main>
  );
}
