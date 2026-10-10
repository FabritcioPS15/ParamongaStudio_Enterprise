'use client'

import { Accordion } from '@/components/site'
import Image from 'next/image'
import Link from 'next/link'
import {
  RiQuillPenLine,
  RiBookOpenLine,
  RiFileTextLine,
  RiGroupLine,
  RiCheckboxCircleLine,
  RiUser3Line,
  RiUploadCloud2Line,
  RiMailLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from 'react-icons/ri'
import { FaLandmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/motion'

export default function Publica() {
  return (
    <main className="text-[#4A1942] overflow-hidden">
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
              TU HISTORIA PUEDE LLEGAR MÁS LEJOS
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[.9] md:text-7xl">Publica con nosotros</h1>
            <p className="mt-6 max-w-md font-body text-lg leading-7 text-white/80">
              En Paramonga Grupo Editorial recibimos manuscritos y propuestas de autores con voces originales,
              valor cultural y ideas que aportan a nuestra sociedad.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
              <Link
                href="#requisitos"
                className="inline-flex items-center gap-3 rounded-full bg-[#D4A24C] px-6 py-3.5 font-body text-sm font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69]"
              >
                Envíanos tu manuscrito <RiArrowRightLine size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden flex-col gap-2 md:flex"
          >
            {['IDEAS', 'HISTORIAS', 'CULTURA', 'SOCIEDAD'].map((spine, i) => (
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

      {/* Highlight Section */}
      <section className="bg-gradient-to-r from-[#FFFBF2] to-[#F3ECDD] px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
          <FadeIn direction="left" className="max-w-lg">
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">ESCRIBAMOS JUNTOS</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tu historia también importa</h2>
            <p className="mt-6 font-body text-sm leading-7 text-[#4A1942]/80">
              Creemos en el poder de las ideas, en la fuerza de las historias y en la importancia de preservar
              nuestra memoria y cultura. Te invitamos a compartir tu obra con nosotros. Recibimos novelas,
              ensayos, crónicas, libros infantiles y juveniles, así como obras vinculadas a la historia, la
              cultura y la sociedad.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative flex items-center justify-center">
            <div className="absolute right-0 h-48 w-80 overflow-hidden opacity-30 mix-blend-multiply md:h-64 md:w-96">
              <Image
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=700"
                alt="Paisaje"
                fill
                className="object-cover"
              />
            </div>
            <p className="relative z-10 max-w-sm pl-8 font-display text-2xl italic leading-relaxed text-[#4A1942]">
              <span className="absolute -left-2 -top-4 font-display text-6xl text-[#D4A24C]/40">“</span>
              Cada libro comienza con una voz que se atreve a ser escuchada.
              <span className="mt-4 block h-0.5 w-12 bg-[#D4A24C]"></span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* QUÉ BUSCAMOS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <FadeIn>
          <p className="mb-10 font-body text-xs uppercase tracking-widest text-[#D4A24C]">QUÉ BUSCAMOS</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 border-t border-[#4A1942]/10 pt-8 text-center sm:grid-cols-2 md:grid-cols-5">
          {[
            {
              icon: RiQuillPenLine,
              title: 'Voz auténtica',
              desc: 'Propuestas con una mirada propia y original sobre el mundo.',
            },
            {
              icon: RiBookOpenLine,
              title: 'Calidad literaria',
              desc: 'Obras bien construidas, rigurosas y con valor editorial.',
            },
            {
              icon: FaLandmark,
              title: 'Aporte cultural',
              desc: 'Libros que enriquecen la reflexión, el conocimiento y la identidad.',
            },
            {
              icon: RiFileTextLine,
              title: 'Propuesta clara',
              desc: 'Manuscritos y proyectos con objetivos definidos y un público bien identificado.',
            },
            {
              icon: RiGroupLine,
              title: 'Compromiso con el proceso',
              desc: 'Autoras y autores abiertos al diálogo editorial y al trabajo colaborativo.',
            },
          ].map((item) => (
            <StaggerItem key={item.title} className="flex flex-col items-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#F3ECDD] text-[#4A1942] transition duration-300 hover:scale-110 hover:bg-[#D4A24C] hover:text-white shadow-sm">
                <item.icon size={26} />
              </div>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-3 font-body text-xs leading-5 text-[#4A1942]/70">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CÓMO POSTULAR */}
      <section className="bg-[#FBF7EF] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">CÓMO POSTULAR</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Un proceso sencillo y transparente</h2>
            </div>
            <p className="max-w-md font-body text-sm leading-6 text-[#4A1942]/80">
              Queremos que tu experiencia sea clara y cercana. Sigue estos pasos para enviarnos tu propuesta.
            </p>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-6 md:flex-row md:items-center">
            {[
              {
                num: '1',
                icon: RiCheckboxCircleLine,
                title: 'Prepara tu manuscrito',
                desc: 'Revisa que tu obra esté completa y cuidadosamente editada.',
              },
              {
                num: '2',
                icon: RiUser3Line,
                title: 'Completa tus datos',
                desc: 'Cuéntanos sobre ti y tu proyecto en nuestro formulario.',
              },
              {
                num: '3',
                icon: RiUploadCloud2Line,
                title: 'Adjunta tu propuesta',
                desc: 'Envía los documentos solicitados en formato digital.',
              },
              {
                num: '4',
                icon: RiMailLine,
                title: 'Recibe nuestra respuesta',
                desc: 'Te notificaremos el resultado del proceso de evaluación.',
              },
            ].map((step, i) => (
              <StaggerItem key={step.num} className="relative flex flex-1 items-center text-center md:flex-col">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="relative flex size-20 items-center justify-center rounded-full border border-[#4A1942]/10 bg-white shadow-sm transition duration-300 hover:scale-110 hover:border-[#D4A24C]">
                    <span className="absolute -left-2 -top-2 flex size-6 items-center justify-center rounded-full bg-[#D4A24C] text-xs font-bold text-white">
                      {step.num}
                    </span>
                    <step.icon size={30} className="text-[#4A1942]" />
                  </div>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="font-display text-lg">{step.title}</h3>
                  <p className="mt-2 max-w-xs font-body text-xs leading-5 text-[#4A1942]/70">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="absolute -right-6 top-10 hidden text-[#D4A24C] md:block">
                    <RiArrowRightSLine size={24} />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GÉNEROS QUE EVALUAMOS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <FadeIn>
          <p className="mb-10 font-body text-xs uppercase tracking-widest text-[#D4A24C]">
            GÉNEROS QUE EVALUAMOS
          </p>
        </FadeIn>
        <StaggerContainer className="grid h-[250px] gap-4 sm:grid-cols-2 md:grid-cols-5">
          {[
            {
              title: 'Narrativa',
              desc: 'Novelas, cuentos y narrativa contemporánea.',
              img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=700',
            },
            {
              title: 'Ensayo',
              desc: 'Ideas para comprender nuestro tiempo.',
              img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=700',
            },
            {
              title: 'Historia y cultura',
              desc: 'Obras sobre nuestro pasado, patrimonio y sociedad.',
              img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=700',
            },
            {
              title: 'Infantil / Juvenil',
              desc: 'Historias que inspiran a nuevas generaciones.',
              img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=700',
            },
            {
              title: 'Crónica y testimonio',
              desc: 'Relatos reales que iluminan nuestra época.',
              img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=700',
            },
          ].map((g) => (
            <StaggerItem
              key={g.title}
              className="group relative overflow-hidden rounded-sm bg-[#1E2A4A] text-white"
            >
              <Image
                src={g.img}
                alt={g.title}
                fill
                className="object-cover opacity-50 transition duration-700 group-hover:scale-110 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="font-display text-xl leading-tight">{g.title}</h3>
                <p className="mt-2 font-body text-[10px] leading-4 text-white/80">{g.desc}</p>
                <div className="absolute bottom-4 right-4 flex size-6 items-center justify-center rounded-full border border-white/50 text-white/80 transition group-hover:border-white group-hover:text-white">
                  <RiArrowRightSLine size={16} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* QUÉ DEBES ENVIAR & PREGUNTAS FRECUENTES */}
      <section id="requisitos" className="mx-auto mb-20 max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-16 md:grid-cols-3">
          <FadeIn className="md:col-span-2">
            <p className="mb-10 font-body text-xs uppercase tracking-widest text-[#D4A24C]">QUÉ DEBES ENVIAR</p>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {[
                {
                  icon: RiFileTextLine,
                  title: 'Sinopsis',
                  desc: 'Un resumen de tu obra (máx. 2 páginas).',
                },
                {
                  icon: RiUser3Line,
                  title: 'Biografía del autor',
                  desc: 'Una breve presentación de tu trayectoria.',
                },
                {
                  icon: RiCheckboxCircleLine,
                  title: 'Manuscrito o muestra',
                  desc: 'Obra completa o capítulos representativos en formato PDF.',
                },
                {
                  icon: RiMailLine,
                  title: 'Datos de contacto',
                  desc: 'Nombre, correo electrónico, teléfono y país de residencia.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border-b border-[#4A1942]/10 pb-6">
                  <item.icon size={28} className="shrink-0 text-[#4A1942]" />
                  <div>
                    <h4 className="font-display text-lg">{item.title}</h4>
                    <p className="mt-1 font-body text-xs leading-5 text-[#4A1942]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="md:col-span-1" delay={0.2}>
            <p className="mb-10 font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              PREGUNTAS FRECUENTES
            </p>
            <div className="flex flex-col">
              {[
                [
                  '¿En cuánto tiempo recibiré una respuesta?',
                  'Nuestro equipo revisa cada propuesta y responde en un plazo de ocho semanas.',
                ],
                [
                  '¿Es necesario que la obra sea inédita?',
                  'Preferimos obras inéditas, pero evaluamos cada caso de manera particular.',
                ],
                [
                  '¿Cómo es el proceso de evaluación?',
                  'Un comité de lectura evalúa la viabilidad editorial, literaria y comercial.',
                ],
              ].map(([q, a]) => (
                <Accordion key={q} question={q}>
                  {a}
                </Accordion>
              ))}
            </div>
            <Link
              href="/contacto"
              className="mt-6 inline-block font-body text-xs font-semibold text-[#4A1942] hover:text-[#D4A24C]"
            >
              Ver todas las preguntas frecuentes ➔
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#1E1A25] px-5 py-20 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000"
          alt="Libros antiguos"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <FadeIn className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:text-left">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-[#D4A24C]">
              TU VOZ TAMBIÉN CONSTRUYE FUTUROS
            </p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Envíanos tu manuscrito</h2>
          </div>
          <p className="max-w-xs font-body text-sm leading-6 text-white/80 md:border-l md:border-white/20 md:pl-8">
            Formemos juntos parte de un catálogo diverso que inspira, informa y conecta lectores.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4A24C] px-8 py-4 font-body text-sm font-semibold text-[#4A1942] shadow-sm transition hover:bg-[#e8bb69]"
            >
              Enviar propuesta <RiArrowRightLine size={16} />
            </Link>
          </motion.div>
        </FadeIn>
      </section>
    </main>
  )
}
