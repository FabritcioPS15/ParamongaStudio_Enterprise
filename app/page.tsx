'use client'

import Link from 'next/link'
import {
  RiQuillPenLine,
  RiLightbulbLine,
  RiEarthLine,
  RiHeart3Line,
  RiArrowRightUpLine,
} from 'react-icons/ri'
import { ArrowButton, BookCard, CtaBanner, Hero, SectionHeader, SelloCard } from '@/components/site'
import { books, seals } from '@/data/content'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero
        eyebrow="PARAMONGA GRUPO EDITORIAL"
        title={
          <>
            Historias que<br />
            <em className="not-italic text-[#D4A24C]">nos conectan.</em>
          </>
        }
        description="En Paramonga Grupo Editorial impulsamos libros que inspiran, informan y transforman. Apostamos por nuevas voces y por una lectura que construye futuro."
      />
      <section className="bg-[#FBF7EF] px-5 py-20 lg:px-8">
        <StaggerContainer className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {[
            [RiQuillPenLine, 'Publicaciones de calidad', 'Contenido riguroso y relevante para nuestros lectores.'],
            [RiLightbulbLine, 'Nuevas voces', 'Impulsamos autores con mirada contemporánea.'],
            [RiEarthLine, 'Una mirada peruana', 'Editamos desde aquí, dialogando con el mundo.'],
            [RiHeart3Line, 'Libros con propósito', 'Cada título nace del cuidado y la convicción.'],
          ].map(([Icon, title, text]) => (
            <StaggerItem key={title as string} className="border-t border-[#D4A24C] pt-5">
              <Icon size={26} className="text-[#D4A24C] transition duration-300 hover:scale-110" />
              <h3 className="mt-5 font-display text-2xl">{title as string}</h3>
              <p className="mt-2 font-body leading-6 text-[#4A1942]/65">{text as string}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="bg-[#F3ECDD] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeader
              eyebrow="NUESTROS SELLOS"
              title="Tres formas de contar el mundo."
              intro="Una casa editorial, tres sellos que se encuentran en la curiosidad, la memoria y el pensamiento."
            />
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
            {seals.map((s) => (
              <StaggerItem key={s.name}>
                <HoverCard className="h-full">
                  <SelloCard seal={s} />
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow="NOVEDADES" title="Libros para quedarse." />
            <Link
              href="/libros"
              className="font-body text-sm text-[#4A1942] underline decoration-[#D4A24C] underline-offset-8 transition hover:text-[#D4A24C]"
            >
              Ver todos los libros <RiArrowRightUpLine className="inline" size={16} />
            </Link>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {books.slice(0, 4).map((b) => (
              <StaggerItem key={b.title}>
                <HoverCard>
                  <BookCard book={b} />
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.3fr] md:items-end">
          <FadeIn direction="left">
            <p className="eyebrow text-[#D4A24C]">DESDE EL PAPEL</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Lo que estamos leyendo.</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2">
            {[
              'Leer también es una forma de volver a casa',
              'La memoria como territorio compartido',
            ].map((t, i) => (
              <StaggerItem key={t} className="border-t border-white/25 pt-5">
                <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">0{i + 1} / Blog</p>
                <h3 className="mt-4 font-display text-2xl leading-tight">{t}</h3>
                <Link href="/nosotros" className="mt-5 inline-block text-sm text-white/70 underline underline-offset-4 hover:text-[#D4A24C]">
                  Leer artículo
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CtaBanner />
    </main>
  )
}
