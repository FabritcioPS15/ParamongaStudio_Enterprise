'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  RiBookOpenLine,
  RiLeafLine,
  RiLightbulbLine,
  RiGroupLine,
  RiQuillPenLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import { FaLandmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Sellos() {
  return (
    <main className="bg-[#FBF7EF] text-[#4A1942] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[520px] overflow-hidden bg-[#16121D]">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
          alt="Biblioteca y ciudad histórica"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E17]/95 via-[#1A1424]/90 to-[#2A162B]/70" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-5 py-20 md:flex-row lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-white"
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#D4A24C]">
              DISTINTAS MIRADAS, UNA MISMA PASIÓN
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              Nuestros sellos
            </h1>
            <p className="mt-6 max-w-lg font-body text-sm leading-6 text-white/80">
              En Paramonga Grupo Editorial desarrollamos diferentes sellos editoriales para organizar nuestro
              catálogo y conectar con diversos lectores. Cada sello tiene una línea editorial clara, una
              personalidad propia y contribuye a un proyecto común: más libros, más ideas y una sociedad más
              consciente.
            </p>
          </motion.div>

          {/* Book Spines Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {[
              { title: 'LITERATURA', bg: 'from-[#6B281B] to-[#45140C]' },
              { title: 'PENSAMIENTO', bg: 'from-[#7A4B29] to-[#543015]' },
              { title: 'PATRIMONIO', bg: 'from-[#42211A] to-[#2B120C]' },
            ].map((spine) => (
              <motion.div
                key={spine.title}
                whileHover={{ x: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative flex h-16 w-80 sm:w-96 cursor-pointer items-center justify-between overflow-hidden rounded-md border-r-8 border-y-2 border-black/40 bg-gradient-to-r ${spine.bg} px-6 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/15 before:via-transparent before:to-black/40`}
              >
                <div className="h-full w-2 border-r border-[#D4A24C]/30" />
                <span className="relative z-10 flex items-center gap-3 font-display text-xl tracking-[0.25em] text-[#E7C77E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <span className="text-xs text-[#D4A24C]">◈</span>
                  {spine.title}
                  <span className="text-xs text-[#D4A24C]">◈</span>
                </span>
                <div className="h-full w-2 border-l border-[#D4A24C]/30" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO MANIFESTO */}
      <section className="border-b border-[#4A1942]/10 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              UN CATÁLOGO CON IDENTIDAD
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Cada sello, una forma de construir futuro
            </h2>
          </FadeIn>

          <FadeIn className="md:col-span-5 md:border-l md:border-[#4A1942]/15 md:pl-8" delay={0.15}>
            <p className="font-body text-xs leading-6 text-[#4A1942]/80">
              Nuestros sellos editoriales nos permiten explorar distintos géneros y temáticas, dialogar con
              diferentes audiencias y dar espacio tanto a voces consagradas como a nuevas miradas. Juntos,
              conforman un catálogo diverso, sólido y relevante, que refleja nuestro compromiso con la cultura,
              el pensamiento y la sociedad.
            </p>
          </FadeIn>

          <FadeIn className="flex flex-col justify-center md:col-span-3 md:pl-4" delay={0.3}>
            <span className="font-display text-5xl leading-none text-[#D4A24C]/60">“</span>
            <p className="mt-1 font-display text-base italic leading-snug text-[#4A1942]/90">
              Diferentes temas, una misma convicción: los libros transforman.
            </p>
            <div className="mt-4 h-0.5 w-14 bg-[#D4A24C]" />
          </FadeIn>
        </div>
      </section>

      {/* 3. NUESTROS SELLOS EDITORIALES */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FadeIn>
          <p className="mb-6 font-body text-xs uppercase tracking-widest text-[#D4A24C]">
            NUESTROS SELLOS EDITORIALES
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: NUEVA NARRATIVA EDICIONES */}
          <HoverCard className="group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-md bg-[#381427] p-8 text-center text-white shadow-md transition duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=900"
              alt="Nueva Narrativa Ediciones"
              fill
              className="object-cover opacity-35 transition duration-700 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#381427]/80 via-[#270E1C]/85 to-[#1A0712]/95" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#D4A24C]/40 bg-[#D4A24C]/10 text-[#D4A24C] shadow-inner transition duration-300 group-hover:scale-110 group-hover:bg-[#D4A24C] group-hover:text-white">
                <RiBookOpenLine size={32} />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-wide text-white">
                NUEVA NARRATIVA<br />EDICIONES
              </h3>

              <p className="mt-3 max-w-xs font-body text-xs text-white/80">
                Historias que inspiran otros futuros.
              </p>

              <Link
                href="/libros"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-2.5 font-body text-xs font-medium text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
              >
                Conocer más <RiArrowRightLine size={14} />
              </Link>
            </div>
          </HoverCard>

          {/* Card 2: ENSAYO Y SOCIEDAD */}
          <HoverCard className="group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-md bg-[#1B2936] p-8 text-center text-white shadow-md transition duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=900"
              alt="Ensayo y Sociedad"
              fill
              className="object-cover opacity-35 transition duration-700 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#182633]/80 via-[#101A24]/85 to-[#0A1118]/95" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#D4A24C]/40 bg-[#D4A24C]/10 text-[#D4A24C] shadow-inner transition duration-300 group-hover:scale-110 group-hover:bg-[#D4A24C] group-hover:text-white">
                <FaLandmark size={28} />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-wide text-white">
                ENSAYO<br />Y SOCIEDAD
              </h3>

              <p className="mt-3 max-w-xs font-body text-xs text-white/80">
                Ideas para comprender nuestro tiempo.
              </p>

              <Link
                href="/libros"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-2.5 font-body text-xs font-medium text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
              >
                Conocer más <RiArrowRightLine size={14} />
              </Link>
            </div>
          </HoverCard>

          {/* Card 3: PATRIMONIO Y CULTURA */}
          <HoverCard className="group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-md bg-[#253026] p-8 text-center text-white shadow-md transition duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=900"
              alt="Patrimonio y Cultura"
              fill
              className="object-cover opacity-35 transition duration-700 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#212C22]/80 via-[#172018]/85 to-[#0E150F]/95" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#D4A24C]/40 bg-[#D4A24C]/10 text-[#D4A24C] shadow-inner transition duration-300 group-hover:scale-110 group-hover:bg-[#D4A24C] group-hover:text-white">
                <RiLeafLine size={30} />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-wide text-white">
                PATRIMONIO<br />Y CULTURA
              </h3>

              <p className="mt-3 max-w-xs font-body text-xs text-white/80">
                Nuestras raíces, nuestra identidad.
              </p>

              <Link
                href="/libros"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-2.5 font-body text-xs font-medium text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
              >
                Conocer más <RiArrowRightLine size={14} />
              </Link>
            </div>
          </HoverCard>
        </div>
      </section>

      {/* 4. CÓMO SE COMPLEMENTAN */}
      <section className="border-t border-[#4A1942]/10 bg-[#F4EDE0] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-4">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              CÓMO SE COMPLEMENTAN
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Diferentes miradas para un mismo propósito
            </h2>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:col-span-8">
            {[
              {
                icon: RiBookOpenLine,
                title: 'Ficción literaria',
                desc: 'Historias que emocionan, cuestionan e imaginan otros mundos.',
              },
              {
                icon: RiLightbulbLine,
                title: 'Pensamiento y análisis',
                desc: 'Libros que invitan a reflexionar sobre los grandes temas de nuestro tiempo.',
              },
              {
                icon: RiGroupLine,
                title: 'Memoria e identidad',
                desc: 'Obras que rescatan y valorizan nuestro patrimonio, historia y diversidad cultural.',
              },
              {
                icon: RiQuillPenLine,
                title: 'Nuevas voces',
                desc: 'Apostamos por autores emergentes y miradas contemporáneas.',
              },
            ].map((item, i) => (
              <StaggerItem
                key={item.title}
                className={`flex flex-col items-start ${
                  i > 0 ? 'md:border-l md:border-[#4A1942]/15 md:pl-5' : ''
                }`}
              >
                <div className="mb-3 text-[#4A1942] transition duration-300 hover:scale-110 hover:text-[#D4A24C]">
                  <item.icon size={26} />
                </div>
                <h3 className="font-display text-base font-bold text-[#4A1942]">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-xs leading-5 text-[#4A1942]/70">
                  {item.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. ¿QUÉ PUBLICAMOS? / LÍNEAS EDITORIALES */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-3">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              ¿QUÉ PUBLICAMOS?
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Líneas editoriales de nuestros sellos
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-9">
            {/* Card 1 */}
            <HoverCard className="flex overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="relative w-1/3 shrink-0 bg-[#381427]">
                <Image
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400"
                  alt="Nueva Narrativa Ediciones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-2/3 flex-col justify-between p-4">
                <div>
                  <h3 className="font-display text-base font-bold leading-tight text-[#4A1942]">
                    Nueva Narrativa Ediciones
                  </h3>
                  <p className="mt-2 font-body text-[11px] leading-5 text-[#4A1942]/70">
                    Novela, cuento, crónica, poesía y narrativa contemporánea. Obras que exploran la condición
                    humana y abren nuevas posibilidades.
                  </p>
                </div>
                <Link
                  href="/libros"
                  className="mt-3 flex items-center gap-1 font-body text-xs font-semibold text-[#4A1942] hover:text-[#D4A24C]"
                >
                  Ver más <RiArrowRightLine size={13} />
                </Link>
              </div>
            </HoverCard>

            {/* Card 2 */}
            <HoverCard className="flex overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="relative w-1/3 shrink-0 bg-[#182633]">
                <Image
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400"
                  alt="Ensayo y Sociedad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-2/3 flex-col justify-between p-4">
                <div>
                  <h3 className="font-display text-base font-bold leading-tight text-[#4A1942]">
                    Ensayo y Sociedad
                  </h3>
                  <p className="mt-2 font-body text-[11px] leading-5 text-[#4A1942]/70">
                    Ensayo, historia, ciencias sociales, actualidad, educación y pensamiento crítico. Libros
                    para comprender mejor la sociedad en la que vivimos.
                  </p>
                </div>
                <Link
                  href="/libros"
                  className="mt-3 flex items-center gap-1 font-body text-xs font-semibold text-[#4A1942] hover:text-[#D4A24C]"
                >
                  Ver más <RiArrowRightLine size={13} />
                </Link>
              </div>
            </HoverCard>

            {/* Card 3 */}
            <HoverCard className="flex overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="relative w-1/3 shrink-0 bg-[#212C22]">
                <Image
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400"
                  alt="Patrimonio y Cultura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-2/3 flex-col justify-between p-4">
                <div>
                  <h3 className="font-display text-base font-bold leading-tight text-[#4A1942]">
                    Patrimonio y Cultura
                  </h3>
                  <p className="mt-2 font-body text-[11px] leading-5 text-[#4A1942]/70">
                    Historia, arte, patrimonio, territorio y saberes tradicionales. Obras que ponen en valor
                    nuestras raíces y la riqueza cultural de nuestro país.
                  </p>
                </div>
                <Link
                  href="/libros"
                  className="mt-3 flex items-center gap-1 font-body text-xs font-semibold text-[#4A1942] hover:text-[#D4A24C]"
                >
                  Ver más <RiArrowRightLine size={13} />
                </Link>
              </div>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA: PUBLICA CON NOSOTROS */}
      <section className="border-t border-[#4A1942]/10 bg-[#F4EDE0] px-5 py-12 lg:px-8">
        <FadeIn className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-sm shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600"
                alt="Manuscrito y libros"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
                PUBLICA CON NOSOTROS
              </p>
              <h2 className="mt-1 font-display text-3xl text-[#4A1942] md:text-4xl">
                Tu historia también importa
              </h2>
              <p className="mt-2 max-w-md font-body text-xs leading-5 text-[#4A1942]/75">
                Recibimos propuestas de autores que buscan compartir ideas, investigaciones, historias y miradas
                que aporten al debate cultural y al pensamiento de nuestro tiempo.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/publica-con-nosotros"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4A24C] px-7 py-3.5 font-body text-xs font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69] hover:shadow-md"
            >
              Envíanos tu manuscrito <RiArrowRightLine size={16} />
            </Link>
          </motion.div>
        </FadeIn>
      </section>
    </main>
  )
}
