"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";
import { CornerDownLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <div className="sticky top-0 py-5 z-50 flex justify-center bg-opacity-80 border-gray-200 border-b-2 backdrop-blur-md bg-white md:px-36 px-5 w-fit rounded-b-lg md:gap-10 gap-2 drop-shadow-2xl">
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 border-2 min-w-[100px]"
        asChild>
          <a href="/">Koti</a>
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-slate-600 border-2 min-w-[100px]"
        asChild>
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
                      md:text-8xl
                      text-6xl
                      pt-48 
                      bg-gradient-to-t from-slate-950 to-slate-600 
                      text-transparent 
                      bg-clip-text 
                      drop-shadow-2xl animation duration-200"
        >
          JOLLEN SIVUSTO
        </h1>
        <h2
          className="font-bold
                      text-center 
                      md:text-4xl
                      text-2xl 
                      bg-gradient-to-t from-slate-800 to-slate-500
                      text-transparent
                      bg-clip-text 
                      drop-shadow-2xl"
        >
          Sivusto kasautuu vähitellen
        </h2>
      </div>

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
                      bg-teal-300 
                      mix-blend-multiply 
                      opacity-80 blur-[150px] 
                      absolute -z-10
                      lg:left-56 lg:top-64
                      left-32 top-48
                      animate-blob
                      animation-delay-4000"
      ></div>

      {/* blobs end */}

      <Dialog>
        <DialogTrigger asChild>
          <a className="group  mt-[130px] md:w-64 md:h-64 w-52 h-52 relative ">
            <img
              src="/herrahiirijpeg.jpg"
              alt="Tietoa minusta"
              className="
                    rounded-full
                    mix-blend-normal
                    drop-shadow-2xl
                    border-4
                    bg-slate-900
                    border-slate-200
                    hover:scale-110
                    hover:cursor-pointer
                    hover:mix-blend-multiply
                    transition duration-200"
            />
            <div className="group-hover:scale-150 transition duration-200 absolute grid md:-right-[100px] -right-[60px] md:top-6 top-3 scale-125">
              <p className=" font-amatic md:text-2xl text-lg font-bold rotate-12 animate-pulse">
                Klikkaa minua
              </p>
              <CornerDownLeft className="-mt-2 ml-2" />
            </div>

            <div
              id="tooltip-default"
              role="tooltip"
              className="absolute z-10 -bottom-5 opacity-0 
                      w-auto ml-auto mr-auto text-center left-[50%] 
                      -translate-x-[50%] block px-3 py-2 
                      text-sm font-medium text-white transition-opacity 
                      duration-300 delay-200 bg-slate-800 rounded-lg shadow-sm
                      group-hover:opacity-100
                      "
            >
              Tietoa minusta
            </div>
          </a>
        </DialogTrigger>
        <DialogContent className="md:max-w-[700px] max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Tietoa minusta</DialogTitle>
          </DialogHeader>
          <div className="md:p-10 md:text-xl text-md font-semibold text-slate-700">
            <p>
              Moi, olen Joel Huovinen, tuleva tekniikan opiskelija Tampereen
              yliopistossa. Vapaa-ajalla teen yleensä jotain luovaa, kuten
              soitan jazzia pianolla tai suunnittelen graafisia ulkoasuja. Tämä
              projekti sai alkunsa, kun kerran sain idean tehdä julkiset
              nettisivut eräälle henkilölle, mutta minulla ei ollut riittävästi
              taitoa niiden tekemiseen.
            </p>
            <br />
            <p>
              Niinpä tämä sivusto toimii loistavana alustana kaikenlaisia
              harjoituksia varten, jotta oppisin luomaan parempia nettisivuja.
              Nyt olen jo oppinut react-applikaatioiden perusteet ja Tailwind
              CSS laajennuksen käytön ulkoasujen luomiseksi!
            </p>
            <br />
            <p>
              Seuraavaksi haluaisin tehdä sivuista interaktiivisia ja toimivia
              kaikilla laitteilla.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <p className="  py-10 text-xl text-slate-700 font-sans font-semibold">
        Joel Huovinen
      </p>
      <Badge variant="outline" className="-mt-5">
        Opiskelija
      </Badge>

      <blockquote className="px-7 text-xl italic text-slate-700 max-w-2xl">
        <svg
          aria-hidden="true"
          className="w-10 h-10 text-slate-300"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <p>
          "Joel on innokas luovan taiteen harrastaja, joka ei pelkää kokeilla
          uusia asioita. Yleensä hänet löytää pianon äärestä, mutta välillä
          häneen voi törmätä, kun hän on suunnittelemassa graafista ulkoasua tai
          koodaamassa nettisivuja."
        </p>
      </blockquote>
      <div className="py-20">
        <Button
          variant="outline"
          className=" text-md
                                            hover:scale-90
                                            transition duration-100"
        asChild>
          <a href="/galleria">Katso lisää <ChevronRight /></a>
          
        </Button>
      </div>
    </main>
  );
}
