'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  RiBookOpenLine,
  RiGroupLine,
  RiLineChartLine,
  RiLightbulbLine,
  RiShakeHandsLine,
  RiFocus3Line,
  RiEyeLine,
  RiLeafLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import { FaLandmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Nosotros() {
  return (
    <main className="bg-[#FBF7EF] text-[#4A1942] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[500px] overflow-hidden bg-[#16121D]">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
          alt="Biblioteca y paisaje histórico"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E17]/95 via-[#1A1424]/90 to-[#2A162B]/75" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-5 py-20 md:flex-row lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-white"
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#D4A24C]">
              IDEAS QUE DEJAN HUELLA
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              Nuestra historia
            </h1>
            <p className="mt-6 max-w-lg font-body text-sm leading-6 text-white/80">
              En Paramonga Grupo Editorial creemos en el poder de los libros para inspirar, informar y
              transformar. Somos un proyecto editorial comprometido con la cultura, el pensamiento y las
              nuevas voces que construyen futuro.
            </p>
          </motion.div>

          {/* Book Spines Graphic with stagger */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {[
              { title: 'EDITORIAL', bg: 'from-[#6B281B] to-[#45140C]' },
              { title: 'CULTURA', bg: 'from-[#7A4B29] to-[#543015]' },
              { title: 'COMUNIDAD', bg: 'from-[#42211A] to-[#2B120C]' },
            ].map((spine, i) => (
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

      {/* 2. QUIÉNES SOMOS, MISIÓN Y VISIÓN */}
      <section className="border-b border-[#4A1942]/10 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-12">
          {/* Quiénes somos */}
          <FadeIn className="md:col-span-4" delay={0.1}>
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">QUIÉNES SOMOS</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Una editorial con propósito
            </h2>
            <p className="mt-4 font-body text-xs leading-6 text-[#4A1942]/80">
              Paramonga Grupo Editorial es un proyecto independiente que nace del amor por los libros y la
              convicción de que la lectura es una fuerza transformadora. Publicamos obras que dialogan con
              nuestro tiempo, impulsamos nuevas voces y contribuimos al desarrollo de una sociedad más
              informada, crítica y sensible a su entorno.
            </p>
          </FadeIn>

          {/* Nuestra misión */}
          <FadeIn className="md:col-span-4 md:border-l md:border-[#4A1942]/15 md:pl-8" delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full border border-[#D4A24C]/40 bg-[#FBF7EF] text-[#D4A24C]">
                <RiFocus3Line size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#4A1942]">Nuestra misión</h3>
            </div>
            <p className="mt-4 font-body text-xs leading-6 text-[#4A1942]/80">
              Publicar libros de calidad que inspiren, informen y generen conversaciones significativas,
              contribuyendo al desarrollo cultural y al pensamiento crítico en nuestra sociedad.
            </p>
          </FadeIn>

          {/* Nuestra visión */}
          <FadeIn className="md:col-span-4 md:border-l md:border-[#4A1942]/15 md:pl-8" delay={0.3}>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full border border-[#D4A24C]/40 bg-[#FBF7EF] text-[#D4A24C]">
                <RiEyeLine size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#4A1942]">Nuestra visión</h3>
            </div>
            <p className="mt-4 font-body text-xs leading-6 text-[#4A1942]/80">
              Ser un grupo editorial referente en el mundo hispanohablante, reconocido por la excelencia de
              nuestras publicaciones, la diversidad de nuestras voces y nuestro compromiso con la cultura y la
              construcción de un futuro más consciente.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. NUESTROS VALORES / PRINCIPIOS QUE NOS GUÍAN */}
      <section className="border-b border-[#4A1942]/10 bg-[#F4EDE0] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">NUESTROS VALORES</p>
            <div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <h2 className="font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
                Principios que nos guían
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: RiBookOpenLine,
                title: 'Calidad editorial',
                desc: 'Cuidamos cada detalle para ofrecer contenidos rigurosos y relevantes.',
              },
              {
                icon: RiGroupLine,
                title: 'Diversidad de voces',
                desc: 'Impulsamos miradas plurales, inclusivas y contemporáneas.',
              },
              {
                icon: RiLineChartLine,
                title: 'Compromiso cultural',
                desc: 'Creemos en los libros como motor de desarrollo social y cultural.',
              },
              {
                icon: RiLightbulbLine,
                title: 'Pensamiento crítico',
                desc: 'Fomentamos ideas que invitan a cuestionar, reflexionar y dialogar.',
              },
              {
                icon: RiShakeHandsLine,
                title: 'Cercanía con autores',
                desc: 'Acompañamos a nuestros autores en cada etapa de su proyecto.',
              },
            ].map((val, i) => (
              <StaggerItem
                key={val.title}
                className={`flex flex-col items-start ${
                  i > 0 ? 'lg:border-l lg:border-[#4A1942]/15 lg:pl-5' : ''
                }`}
              >
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white text-[#4A1942] shadow-sm transition duration-300 hover:scale-110 hover:bg-[#D4A24C] hover:text-white">
                  <val.icon size={24} />
                </div>
                <h3 className="font-display text-base font-bold text-[#4A1942]">{val.title}</h3>
                <p className="mt-2 font-body text-xs leading-5 text-[#4A1942]/70">{val.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. NUESTRO PROPÓSITO */}
      <section className="border-b border-[#4A1942]/10 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          {/* Image */}
          <FadeIn direction="left" className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=900"
              alt="Libros y arquitectura clásica"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </FadeIn>

          {/* Text Content */}
          <FadeIn className="lg:col-span-4 lg:pl-4" delay={0.15}>
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">NUESTRO PROPÓSITO</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Más libros,<br />más posibilidades
            </h2>
            <p className="mt-4 font-body text-xs leading-6 text-[#4A1942]/80">
              Construimos un catálogo diverso y sólido que aporte al debate cultural, amplíe horizontes y
              conecte personas a través de la lectura. Creemos en una sociedad más informada, empática y
              creativa, y trabajamos cada día para que los libros sigan siendo un puente hacia un futuro mejor.
            </p>
          </FadeIn>

          {/* Quote */}
          <FadeIn direction="right" className="flex flex-col justify-center lg:col-span-3 lg:border-l lg:border-[#4A1942]/15 lg:pl-8" delay={0.3}>
            <span className="font-display text-5xl leading-none text-[#D4A24C]/60">“</span>
            <p className="mt-1 font-display text-base italic leading-snug text-[#4A1942]/90">
              Los libros nos permiten imaginar otros mundos y, al mismo tiempo, construir uno mejor.
            </p>
            <div className="mt-4 h-0.5 w-14 bg-[#D4A24C]" />
          </FadeIn>
        </div>
      </section>

      {/* 5. NUESTROS SELLOS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Header left */}
          <FadeIn className="lg:col-span-3">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">NUESTROS SELLOS</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#4A1942] md:text-4xl">
              Diversas miradas,<br />una misma pasión
            </h2>
            <p className="mt-3 font-body text-xs leading-5 text-[#4A1942]/70">
              A través de nuestros sellos desarrollamos libros de distintos géneros y temáticas, con el
              propósito de llegar a más lectores y construir un catálogo sólido y diverso.
            </p>
          </FadeIn>

          {/* 3 Seal Cards */}
          <div className="grid gap-5 md:grid-cols-3 lg:col-span-9">
            {/* Card 1: NUEVA NARRATIVA EDICIONES */}
            <HoverCard className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md bg-[#381427] p-6 text-white shadow-sm transition hover:shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600"
                alt="Nueva Narrativa"
                fill
                className="object-cover opacity-20 transition duration-500 group-hover:scale-110 group-hover:opacity-35"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="text-[#D4A24C]">
                    <RiBookOpenLine size={24} />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wider text-white">
                    NUEVA NARRATIVA<br />EDICIONES
                  </h3>
                </div>
                <p className="mt-3 font-body text-[11px] leading-4 text-white/80">
                  Historias que inspiran otros futuros.
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <Link
                  href="/sellos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 font-body text-[11px] text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
                >
                  Conocer más <RiArrowRightLine size={12} />
                </Link>
              </div>
            </HoverCard>

            {/* Card 2: ENSAYO Y SOCIEDAD */}
            <HoverCard className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md bg-[#182633] p-6 text-white shadow-sm transition hover:shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600"
                alt="Ensayo y Sociedad"
                fill
                className="object-cover opacity-20 transition duration-500 group-hover:scale-110 group-hover:opacity-35"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="text-[#D4A24C]">
                    <FaLandmark size={20} />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wider text-white">
                    ENSAYO<br />Y SOCIEDAD
                  </h3>
                </div>
                <p className="mt-3 font-body text-[11px] leading-4 text-white/80">
                  Ideas para comprender nuestro tiempo.
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <Link
                  href="/sellos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 font-body text-[11px] text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
                >
                  Conocer más <RiArrowRightLine size={12} />
                </Link>
              </div>
            </HoverCard>

            {/* Card 3: PATRIMONIO Y CULTURA */}
            <HoverCard className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-md bg-[#212C22] p-6 text-white shadow-sm transition hover:shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600"
                alt="Patrimonio y Cultura"
                fill
                className="object-cover opacity-20 transition duration-500 group-hover:scale-110 group-hover:opacity-35"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="text-[#D4A24C]">
                    <RiLeafLine size={22} />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wider text-white">
                    PATRIMONIO<br />Y CULTURA
                  </h3>
                </div>
                <p className="mt-3 font-body text-[11px] leading-4 text-white/80">
                  Nuestras raíces, nuestra identidad.
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <Link
                  href="/sellos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 font-body text-[11px] text-white backdrop-blur transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
                >
                  Conocer más <RiArrowRightLine size={12} />
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
                Recibimos propuestas de autores que buscan compartir ideas, investigaciones y relatos que dejen
                huella.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/publica-con-nosotros"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4A24C] px-7 py-3.5 font-body text-xs font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69] hover:shadow-md"
            >
              Envíanos tu manuscrito <RiArrowRightLine size={14} />
            </Link>
          </motion.div>
        </FadeIn>
      </section>
    </main>
  )
}
