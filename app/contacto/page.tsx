'use client'

import { Accordion } from '@/components/site'
import Image from 'next/image'
import Link from 'next/link'
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiTimeLine,
  RiTrainLine,
  RiMessage3Line,
  RiArrowRightLine,
  RiSendPlaneFill,
} from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Contacto() {
  return (
    <main className="text-[#4A1942] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[450px] overflow-hidden bg-[#1E1A25]">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000"
          alt="Libros antiguos"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#1E1A25]/90 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              ESTAMOS PARA ESCUCHARTE
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[.9] md:text-8xl">Contacto</h1>
            <p className="mt-6 font-display text-3xl leading-tight">
              Conversemos sobre libros, autores<br />y nuevas historias.
            </p>
            <p className="mt-6 max-w-lg font-body text-base leading-7 text-white/80">
              En Paramonga Grupo Editorial creemos en el diálogo, en las ideas que se comparten y en los proyectos
              que transforman. Escríbenos, estaremos encantados de leerte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels Strip */}
      <section className="border-b border-[#4A1942]/10 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-4">
          <FadeIn className="w-full shrink-0 lg:w-1/6">
            <p className="font-body text-xs uppercase leading-relaxed tracking-widest text-[#D4A24C]">
              NUESTROS<br />CANALES DE CONTACTO
            </p>
          </FadeIn>

          <StaggerContainer className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: RiMailLine,
                title: 'Correo electrónico',
                detail: 'info@paramongaeditorial.com',
                sub: 'Te responderemos a la brevedad.',
              },
              {
                icon: FaWhatsapp,
                title: 'WhatsApp',
                detail: '+51 987 654 321',
                sub: 'Lunes a viernes\nde 9:00 a 18:00 h.',
              },
              {
                icon: RiPhoneLine,
                title: 'Teléfono',
                detail: '(01) 234 5678',
                sub: 'Lunes a viernes\nde 9:00 a 18:00 h.',
              },
              {
                icon: RiMapPin2Line,
                title: 'Nuestra oficina',
                detail: 'Av. Los Editores 123,\nSan Isidro, Lima, Perú.',
                sub: '',
              },
              {
                icon: RiTimeLine,
                title: 'Horario de atención',
                detail: 'Lunes a viernes\n9:00 a 18:00 h.',
                sub: 'Sábados: previa coordinación.',
              },
            ].map((item) => (
              <StaggerItem key={item.title} className="flex flex-col items-start gap-3">
                <div className="flex gap-3">
                  <div className="text-[#4A1942] transition duration-300 hover:scale-110 hover:text-[#D4A24C]">
                    <item.icon size={26} className="shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-body text-[13px] leading-tight text-[#4A1942]/70">{item.title}</h4>
                    <p className="mt-1 font-body text-[13px] font-medium leading-tight whitespace-pre-line">
                      {item.detail}
                    </p>
                    {item.sub && (
                      <p className="mt-2 font-body text-[11px] whitespace-pre-line text-[#4A1942]/60">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-[#FBF7EF] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Left Column (Form) */}
          <FadeIn direction="left" className="flex flex-col">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">ESCRÍBENOS</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Nos encantaría saber de ti</h2>
            <p className="mt-4 font-body text-sm leading-6 text-[#4A1942]/80">
              Completa el formulario y cuéntanos cómo podemos ayudarte.<br />Te responderemos lo antes posible.
            </p>

            <form className="mt-10 grid gap-6" aria-label="Formulario de contacto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="font-body text-sm font-medium">
                  Nombre completo <span className="text-[#D4A24C]">*</span>
                  <input
                    required
                    className="mt-2 w-full border-b border-[#4A1942]/20 bg-white/50 px-3 py-3 font-body text-sm outline-none transition focus:border-[#D4A24C] focus:bg-white"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="font-body text-sm font-medium">
                  Correo electrónico <span className="text-[#D4A24C]">*</span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border-b border-[#4A1942]/20 bg-white/50 px-3 py-3 font-body text-sm outline-none transition focus:border-[#D4A24C] focus:bg-white"
                    placeholder="tu@correo.com"
                  />
                </label>
              </div>

              <label className="font-body text-sm font-medium">
                Asunto <span className="text-[#D4A24C]">*</span>
                <input
                  required
                  className="mt-2 w-full border-b border-[#4A1942]/20 bg-white/50 px-3 py-3 font-body text-sm outline-none transition focus:border-[#D4A24C] focus:bg-white"
                  placeholder="¿Sobre qué te gustaría escribirnos?"
                />
              </label>

              <label className="relative font-body text-sm font-medium">
                Mensaje <span className="text-[#D4A24C]">*</span>
                <textarea
                  required
                  maxLength={500}
                  rows={5}
                  className="mt-2 w-full resize-none border-b border-[#4A1942]/20 bg-white/50 px-3 py-3 font-body text-sm outline-none transition focus:border-[#D4A24C] focus:bg-white"
                  placeholder="Cuéntanos tu consulta, idea o proyecto..."
                />
                <span className="absolute bottom-2 right-2 font-body text-[10px] text-[#4A1942]/50">
                  0/500 caracteres
                </span>
              </label>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-4 flex w-fit items-center gap-3 rounded-full bg-[#D4A24C] px-8 py-3.5 font-body text-sm font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69] hover:shadow-md cursor-pointer"
              >
                Enviar mensaje <RiSendPlaneFill size={16} />
              </motion.button>
            </form>
          </FadeIn>

          {/* Right Column (Cards) */}
          <div className="flex flex-col gap-6">
            {/* Publica con nosotros Card */}
            <HoverCard className="group relative flex overflow-hidden rounded-sm bg-[#F6F1E3] shadow-sm ring-1 ring-black/5 transition hover:shadow-xl">
              <div className="flex w-[60%] flex-col justify-center p-8">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#D4A24C]">
                  TU HISTORIA TAMBIÉN PUEDE LLEGAR LEJOS
                </p>
                <h3 className="mt-2 font-display text-3xl">Publica con nosotros</h3>
                <p className="mt-3 font-body text-xs leading-5 text-[#4A1942]/75">
                  Si tienes un manuscrito, un proyecto o te interesa conocer más sobre nuestro proceso editorial,
                  cuéntanos. Estamos abiertos a nuevas voces.
                </p>
                <Link
                  href="/publica-con-nosotros"
                  className="mt-6 flex w-fit items-center gap-2 rounded-full bg-[#D4A24C] px-5 py-2.5 font-body text-xs font-semibold text-[#4A1942] transition hover:bg-[#e8bb69]"
                >
                  Envíanos tu manuscrito <RiArrowRightLine size={14} />
                </Link>
              </div>
              <div className="relative w-[40%] bg-[#1E1A25]">
                <Image
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600"
                  alt="Libros"
                  fill
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
                />
              </div>
            </HoverCard>

            {/* Visítanos Card */}
            <HoverCard className="flex overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-xl">
              <div className="flex w-[55%] flex-col p-8">
                <p className="font-body text-[10px] uppercase tracking-widest text-[#D4A24C]">
                  NUESTRA UBICACIÓN
                </p>
                <h3 className="mt-2 font-display text-3xl">Visítanos</h3>
                <p className="mt-3 font-body text-xs leading-5 text-[#4A1942]/75">
                  Te recibimos en nuestra oficina en San Isidro, Lima. Será un gusto conversar sobre tus ideas,
                  proyectos o propuestas de colaboración.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex gap-3">
                    <RiMapPin2Line size={18} className="shrink-0 text-[#4A1942]" />
                    <p className="font-body text-xs leading-tight text-[#4A1942]/70">
                      Av. Los Editores 123,<br />San Isidro, Lima, Perú
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <RiTrainLine size={18} className="shrink-0 text-[#4A1942]" />
                    <p className="font-body text-xs leading-tight text-[#4A1942]/70">
                      A pocas cuadras de la Estación<br />Canaval y Moreyra (Metropolitano).
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <RiTimeLine size={18} className="shrink-0 text-[#4A1942]" />
                    <p className="font-body text-xs leading-tight text-[#4A1942]/70">
                      Lunes a viernes de 9:00 a 18:00 h.<br />Sábados: previa coordinación.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-[45%] bg-[#E8EDE5]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=700')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md">
                    <RiMapPin2Line size={16} className="text-[#4A1942]" />
                    <span className="font-display text-sm font-semibold text-[#4A1942]">
                      Paramonga<br />Grupo Editorial
                    </span>
                  </div>
                </div>
              </div>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-[#4A1942]/10 bg-[#FBF7EF] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4 lg:gap-16">
          <FadeIn className="lg:col-span-1">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              PREGUNTAS FRECUENTES
            </p>
            <h3 className="mt-3 font-display text-3xl">¿Tienes alguna pregunta?</h3>
            <p className="mt-4 font-body text-sm leading-6 text-[#4A1942]/70">
              Aquí encontrarás algunas respuestas rápidas. Si necesitas más información, no dudes en escribirnos.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.15}>
            {[
              [
                '¿Cuánto tiempo tardan en responder?',
                'Normalmente respondemos en un plazo de 24 a 48 horas hábiles.',
              ],
              [
                '¿Puedo enviar mi manuscrito por este medio?',
                'Para envío de manuscritos, por favor dirígete a la sección "Publica con nosotros" o escríbenos directamente por correo.',
              ],
              [
                '¿Qué tipo de proyectos reciben?',
                'Recibimos manuscritos de narrativa, ensayo, infantil/juvenil, y obras de historia y cultura.',
              ],
              [
                '¿Puedo agendar una reunión?',
                'Sí, puedes agendar una reunión presencial en nuestra oficina de San Isidro.',
              ],
            ].map(([q, a]) => (
              <Accordion key={q} question={q}>
                {a}
              </Accordion>
            ))}
          </FadeIn>

          <FadeIn direction="right" className="flex flex-col justify-center border-l-0 border-[#4A1942]/10 pt-8 lg:col-span-1 lg:border-l lg:pl-10 lg:pt-0" delay={0.3}>
            <div className="flex items-start gap-4">
              <RiMessage3Line size={32} className="text-[#4A1942]" />
              <div>
                <h4 className="font-display text-xl leading-tight">¿No encuentras la respuesta?</h4>
                <p className="mt-2 font-body text-xs leading-5 text-[#4A1942]/70">
                  Escríbenos directamente y con gusto te ayudaremos.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 font-body text-xs font-semibold text-[#4A1942] transition hover:text-[#D4A24C]"
                >
                  Ir al formulario <RiArrowRightLine size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
