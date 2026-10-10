'use client'

import { ArrowButton, BookCard, CtaBanner } from '@/components/site'
import { books } from '@/data/content'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine, RiArrowDownSLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Libros() {
  const featured = books.find((b) => b.featured)
  const restBooks = books.filter((b) => !b.featured)

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] overflow-hidden bg-[#1E1A25]">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
          alt="Biblioteca"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#1E1A25]/90 to-[#4A1942]/60 mix-blend-multiply" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5 py-24 md:flex-row lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-white"
          >
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              LIBROS QUE ABREN HORIZONTES
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[.9] md:text-7xl">Nuestros libros</h1>
            <p className="mt-6 max-w-md font-body text-lg leading-7 text-white/80">
              Un catálogo diverso que inspira, informa y conecta lectores. Historias, ideas y miradas que nos
              ayudan a comprender mejor nuestro tiempo y el mundo que compartimos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden flex-col gap-2 md:flex"
          >
            {['HISTORIA', 'PENSAMIENTO', 'NARRATIVA', 'CULTURA'].map((spine, i) => (
              <motion.div
                key={spine}
                whileHover={{ x: -8, scale: 1.02 }}
                className="relative flex h-16 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-md border-r-8 border-y-2 border-black/30 bg-[#5c2317] shadow-xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:via-transparent before:to-black/30"
                style={{ backgroundColor: ['#5C2518', '#734A31', '#4F231D', '#321D17'][i] }}
              >
                <span className="relative z-10 flex w-full items-center justify-center font-display text-xl tracking-widest text-[#D4A24C] drop-shadow-md">
                  <span className="mx-4 text-xs">◈</span> {spine} <span className="mx-4 text-xs">◈</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="border-b border-[#4A1942]/10 bg-white px-5 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-body text-sm text-[#4A1942]">Explora por categoría:</span>
            <button className="rounded-full bg-[#4A1942] px-5 py-2.5 font-body text-sm text-white shadow-sm transition hover:bg-[#32102d]">
              Todos
            </button>
            {['Narrativa', 'Ensayo', 'Historia', 'Cultura', 'Infantil / Juvenil', 'Novedades'].map(
              (cat) => (
                <button
                  key={cat}
                  className="rounded-full border border-[#4A1942]/20 px-5 py-2.5 font-body text-sm text-[#4A1942] transition hover:border-[#D4A24C] hover:text-[#D4A24C]"
                >
                  {cat}
                </button>
              )
            )}
          </div>
          <div className="flex items-center gap-3 font-body text-sm text-[#4A1942]">
            <span>Ordenar por:</span>
            <button className="flex items-center gap-2 rounded-md border border-[#4A1942]/20 px-4 py-2 hover:border-[#D4A24C]">
              Más recientes <RiArrowDownSLine size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      {featured && (
        <section className="bg-gradient-to-r from-[#F6F1E3] via-[#F6F1E3] to-[#E3E8E3] px-5 py-20 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-3 md:items-center">
              <FadeIn direction="left" className="md:col-span-1 md:pr-10">
                <p className="font-body text-xs uppercase tracking-[.14em] text-[#D4A24C]">
                  LIBRO DESTACADO
                </p>
                <h2 className="mt-3 font-display text-4xl text-[#4A1942] md:text-5xl">{featured.title}</h2>
                <p className="mt-2 font-body text-sm italic text-[#4A1942]">{featured.category}</p>
                <p className="mt-6 font-body text-sm leading-6 text-[#4A1942]/70">{featured.description}</p>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full bg-[#D4A24C] px-6 py-3 font-body text-sm font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69]"
                  >
                    Ver libro <RiArrowRightLine size={16} />
                  </Link>
                </motion.div>
              </FadeIn>
              <FadeIn className="relative mx-auto aspect-[3/4] w-full max-w-[280px] shadow-2xl md:col-span-1">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition duration-700 hover:scale-105" />
              </FadeIn>
              <FadeIn direction="right" className="hidden pl-10 md:col-span-1 md:block">
                <p className="relative font-display text-3xl leading-snug text-[#4A1942]">
                  <span className="absolute -left-6 -top-4 font-display text-6xl text-[#D4A24C]/40">“</span>
                  Una historia luminosa sobre la familia, la tierra y las segundas oportunidades.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Book List */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {restBooks.map((book) => (
            <StaggerItem key={book.title}>
              <HoverCard className="group flex h-full overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-xl">
                <div className="relative w-2/5 shrink-0 bg-[#F3ECDD]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex w-3/5 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-display text-xl leading-tight text-[#4A1942] line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="mt-1 font-body text-[10px] uppercase tracking-wider text-[#D4A24C]">
                      {book.category}
                    </p>
                    <p className="mt-2 font-body text-xs leading-5 text-[#4A1942]/60 line-clamp-4">
                      {book.description}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 flex items-center gap-1 font-body text-xs font-semibold text-[#4A1942] transition group-hover:text-[#D4A24C]"
                  >
                    Ver libro <RiArrowRightLine size={13} />
                  </Link>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 flex justify-center gap-2 font-body">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#4A1942] text-white">
            1
          </span>
          <span className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#4A1942]/20 hover:border-[#D4A24C]">
            2
          </span>
          <span className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#4A1942]/20 hover:border-[#D4A24C]">
            3
          </span>
          <span className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#4A1942]/20 hover:border-[#D4A24C]">
            4
          </span>
          <span className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#4A1942]/20 hover:border-[#D4A24C]">
            <RiArrowRightLine size={14} />
          </span>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
