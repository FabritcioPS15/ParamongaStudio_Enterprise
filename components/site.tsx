'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6'
import {
  RiSearchLine,
  RiShoppingBag3Line,
  RiMenu3Line,
  RiCloseLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiBookOpenLine,
  RiSparklingLine,
  RiMailLine,
  RiArrowDownSLine,
} from 'react-icons/ri'
import { navLinks, books, type Book, type Seal } from '@/data/content'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${light ? 'text-white' : 'text-[#4A1942]'}`}>
      <span className="flex size-10 items-center justify-center border border-current font-serif text-xl font-semibold">
        P
      </span>
      <span className="font-display text-xl leading-none tracking-wide">
        PARAMONGA<br />
        <small className="font-body text-[9px] tracking-[.28em]">GRUPO EDITORIAL</small>
      </span>
    </Link>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#4A1942]/10 bg-[#FBF7EF]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map(([label, href]) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-body text-sm transition ${
                    isActive
                      ? 'font-semibold text-[#D4A24C]'
                      : 'text-[#4A1942] hover:text-[#D4A24C]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#D4A24C]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="relative flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
              className={`rounded-full p-2 transition ${
                searchOpen
                  ? 'bg-[#4A1942] text-white'
                  : 'text-[#4A1942] hover:bg-[#F3ECDD]'
              }`}
            >
              {searchOpen ? <RiCloseLine size={20} /> : <RiSearchLine size={20} />}
            </button>
            <Link
              href="/libros"
              className="hidden items-center gap-2 rounded-full bg-[#4A1942] px-5 py-2.5 font-body text-sm text-white transition hover:bg-[#32102d] sm:flex"
            >
              Tienda <RiShoppingBag3Line size={16} />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="flex size-10 items-center justify-center rounded-full text-[#4A1942] transition hover:bg-[#F3ECDD] xl:hidden"
            >
              {mobileMenuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={24} />}
            </button>

            {/* Floating Dropdown Search Popover (Absolute - does NOT push layout) */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-3 w-80 sm:w-[400px] overflow-hidden rounded-xl border border-[#4A1942]/15 bg-white shadow-2xl z-50"
                >
                  <div className="flex items-center gap-3 border-b border-[#4A1942]/10 bg-[#FBF7EF] px-4 py-3">
                    <RiSearchLine size={18} className="text-[#4A1942]/60 shrink-0" />
                    <input
                      type="text"
                      placeholder="Buscar libros, autores, temas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent font-body text-sm text-[#4A1942] placeholder-[#4A1942]/50 outline-none"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-xs text-[#4A1942]/50 hover:text-[#4A1942]"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Live Search Results in Dropdown */}
                  <div className="max-h-72 overflow-y-auto p-2">
                    {searchQuery.trim() === '' ? (
                      <div className="py-4 text-center">
                        <p className="font-body text-xs text-[#4A1942]/60">
                          Escribe para buscar en nuestro catálogo
                        </p>
                      </div>
                    ) : (
                      (() => {
                        const filtered = books.filter(
                          (b) =>
                            b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            b.category.toLowerCase().includes(searchQuery.toLowerCase())
                        )

                        if (filtered.length === 0) {
                          return (
                            <div className="py-6 text-center">
                              <p className="font-body text-xs text-[#4A1942]/60">
                                No se encontraron resultados para &ldquo;{searchQuery}&rdquo;
                              </p>
                            </div>
                          )
                        }

                        return (
                          <div className="flex flex-col gap-1">
                            {filtered.slice(0, 5).map((b) => (
                              <Link
                                key={b.title}
                                href="/libros"
                                onClick={() => setSearchOpen(false)}
                                className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-[#F3ECDD]"
                              >
                                <div className="relative h-12 w-9 shrink-0 overflow-hidden rounded bg-[#F3ECDD]">
                                  <Image
                                    src={b.image}
                                    alt={b.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h4 className="truncate font-display text-sm font-semibold text-[#4A1942]">
                                    {b.title}
                                  </h4>
                                  <p className="truncate font-body text-[11px] text-[#4A1942]/60">
                                    {b.author} · <span className="text-[#D4A24C]">{b.category}</span>
                                  </p>
                                </div>
                                <RiArrowRightLine size={14} className="text-[#4A1942]/40" />
                              </Link>
                            ))}
                            <Link
                              href="/libros"
                              onClick={() => setSearchOpen(false)}
                              className="mt-1 block border-t border-[#4A1942]/10 pt-2 text-center font-body text-xs font-semibold text-[#4A1942] hover:text-[#D4A24C]"
                            >
                              Ver todos los libros ➔
                            </Link>
                          </div>
                        )
                      })()
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Backdrop for Floating Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 top-16 z-30 bg-black/10 backdrop-blur-[1px]"
            />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-[#FBF7EF] xl:hidden"
          >
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-6">
              {/* Mobile Search input with live results */}
              <div className="flex flex-col gap-2">
                <div className="relative flex items-center rounded-lg border border-[#4A1942]/15 bg-white px-4 py-2.5 shadow-sm">
                  <RiSearchLine size={18} className="text-[#4A1942]/50 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Buscar libros, autores..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent font-body text-sm text-[#4A1942] placeholder-[#4A1942]/50 outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-[#4A1942]/50 hover:text-[#4A1942]"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {searchQuery.trim() !== '' && (
                  <div className="overflow-hidden rounded-lg border border-[#4A1942]/10 bg-white p-2 shadow-sm">
                    {(() => {
                      const filtered = books.filter(
                        (b) =>
                          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(searchQuery.toLowerCase())
                      )

                      if (filtered.length === 0) {
                        return (
                          <p className="p-3 text-center font-body text-xs text-[#4A1942]/60">
                            No se encontraron resultados para &ldquo;{searchQuery}&rdquo;
                          </p>
                        )
                      }

                      return (
                        <div className="flex flex-col gap-1">
                          {filtered.slice(0, 3).map((b) => (
                            <Link
                              key={b.title}
                              href="/libros"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setSearchQuery('')
                              }}
                              className="flex items-center gap-3 rounded-md p-2 transition hover:bg-[#F3ECDD]"
                            >
                              <div className="relative h-10 w-7 shrink-0 overflow-hidden rounded bg-[#F3ECDD]">
                                <Image src={b.image} alt={b.title} fill className="object-cover" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="truncate font-display text-sm font-semibold text-[#4A1942]">
                                  {b.title}
                                </h4>
                                <p className="truncate font-body text-[10px] text-[#4A1942]/60">
                                  {b.author}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )
                    })()}
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col divide-y divide-[#4A1942]/10">
                {navLinks.map(([label, href]) => {
                  const isActive = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-4 font-display text-xl transition ${
                        isActive
                          ? 'font-bold text-[#D4A24C]'
                          : 'text-[#4A1942] hover:text-[#D4A24C]'
                      }`}
                    >
                      <span>{label}</span>
                      <RiArrowRightLine
                        size={18}
                        className={isActive ? 'text-[#D4A24C]' : 'opacity-40'}
                      />
                    </Link>
                  )
                })}
              </nav>

              {/* Mobile Tienda CTA */}
              <Link
                href="/libros"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 rounded-full bg-[#4A1942] py-3.5 font-body text-sm font-semibold text-white shadow-md transition hover:bg-[#32102d]"
              >
                <RiShoppingBag3Line size={18} /> Visitar Tienda
              </Link>
            </div>

            {/* Mobile Menu Footer Info */}
            <div className="mt-8 border-t border-[#4A1942]/10 pt-6">
              <p className="font-body text-xs text-[#4A1942]/60">
                Paramonga Grupo Editorial
              </p>
              <p className="mt-1 font-body text-xs text-[#4A1942]/60">
                hola@paramonga.pe
              </p>
              <div className="mt-4 flex gap-3">
                {[
                  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
                  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: FaWhatsapp, href: 'https://whatsapp.com', label: 'WhatsApp' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-8 items-center justify-center rounded-full border border-[#4A1942]/20 text-[#4A1942] transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
)
}

export function Footer() {
  return (
    <footer className="bg-[#4A1942] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs font-body text-sm leading-6 text-white/70">
            Publicamos libros que abren conversaciones y dejan huella.
          </p>
        </div>
        <div>
          <p className="eyebrow text-[#D4A24C]">Explora</p>
          <div className="mt-5 grid gap-3 font-body text-sm text-white/80">
            {navLinks.slice(1).map(([label, href]) => (
              <Link href={href} key={href} className="hover:text-[#D4A24C]">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow text-[#D4A24C]">Síguenos</p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
              { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
              { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
              { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#4A1942]"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
          <p className="mt-10 font-body text-xs text-white/50">
            hola@paramonga.pe
            <br />© 2026 Paramonga Grupo Editorial. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-[#D4A24C]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[.95] text-[#4A1942] md:text-6xl">{title}</h2>
      {intro && <p className="mt-5 max-w-xl font-body text-lg leading-7 text-[#4A1942]/70">{intro}</p>}
      <span className="mt-7 block h-1 w-14 bg-[#D4A24C]" />
    </div>
  )
}

export function Hero({
  title,
  eyebrow,
  description,
  image = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000',
}: {
  title: React.ReactNode
  eyebrow: string
  description?: string
  image?: string
}) {
  return (
    <section className="relative flex min-h-[410px] items-end overflow-hidden bg-[#1E2A4A] md:min-h-[455px]">
      <Image
        src={image}
        alt="Biblioteca cálida con estanterías de libros"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1A25] via-[#1E1A25]/75 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 lg:px-8">
        <p className="eyebrow text-[#D4A24C]">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-6xl leading-[.9] text-white md:text-8xl">{title}</h1>
        {description && (
          <p className="mt-7 max-w-lg font-body text-lg leading-7 text-white/80">{description}</p>
        )}
      </div>
    </section>
  )
}

export function ArrowButton({
  children,
  href = '#',
}: {
  children: React.ReactNode
  href?: string
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-4 rounded-full bg-[#D4A24C] px-5 py-3 font-body text-sm font-semibold text-[#4A1942] transition hover:bg-[#e8bb69]"
    >
      {children}
      <span className="flex size-7 items-center justify-center rounded-full bg-[#4A1942] text-white">
        <RiArrowRightUpLine size={16} />
      </span>
    </Link>
  )
}

export function SelloCard({
  seal,
  large = false,
}: {
  seal: Seal
  large?: boolean
}) {
  return (
    <article
      className={`group relative overflow-hidden ${
        large ? 'min-h-[330px]' : 'min-h-[260px]'
      } ${seal.color === 'olive' ? 'bg-[#3E4A2E]' : 'bg-[#1E2A4A]'}`}
    >
      <Image
        src={seal.image}
        alt={seal.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
        className="object-cover opacity-45 mix-blend-luminosity transition duration-500 group-hover:scale-105 group-hover:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-7 text-white">
        <p className="eyebrow text-[#D4A24C]">{seal.eyebrow}</p>
        <h3 className="mt-3 max-w-sm font-display text-3xl leading-none">{seal.name}</h3>
        <p className="mt-4 max-w-sm font-body text-sm leading-6 text-white/75">{seal.description}</p>
        <Link href="/sellos" className="mt-6 inline-flex items-center gap-2 font-body text-sm text-white">
          Ver más <RiArrowRightUpLine size={16} />
        </Link>
      </div>
    </article>
  )
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F3ECDD]">
        <Image
          src={book.image}
          alt={`Portada de ${book.title}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 font-body text-xs uppercase tracking-[.14em] text-[#D4A24C]">{book.category}</p>
      <h3 className="mt-2 font-display text-2xl leading-none text-[#4A1942]">{book.title}</h3>
      <p className="mt-2 font-body text-sm text-[#4A1942]/60">{book.author}</p>
    </article>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-[#D4A24C] px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="eyebrow text-[#4A1942]">PUBLICA CON NOSOTROS</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[#4A1942] md:text-5xl">
            Tu historia también importa.
          </h2>
        </div>
        <ArrowButton href="/publica-con-nosotros">Envíanos tu manuscrito</ArrowButton>
      </div>
    </section>
  )
}

export function Accordion({
  question,
  children,
}: {
  question: string
  children: React.ReactNode
}) {
  return (
    <details className="group border-b border-[#4A1942]/15 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl text-[#4A1942] marker:hidden">
        {question}
        <RiArrowDownSLine className="transition group-open:rotate-180" size={22} />
      </summary>
      <div className="pt-4 font-body leading-7 text-[#4A1942]/65">{children}</div>
    </details>
  )
}

export { RiBookOpenLine as BookOpen, RiSparklingLine as Sparkles, RiMailLine as Mail }
