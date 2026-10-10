export type Seal = { name: string; eyebrow: string; description: string; color: 'navy' | 'olive'; image: string }
export type Book = { title: string; author: string; category: string; description?: string; image: string; featured?: boolean }

export const seals: Seal[] = [
  { name: 'Nueva Narrativa Ediciones', eyebrow: 'FICCIÓN CONTEMPORÁNEA', description: 'Historias que exploran lo íntimo, lo colectivo y las nuevas formas de mirar el mundo.', color: 'navy', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=900&auto=format&fit=crop' },
  { name: 'Ensayo y Sociedad', eyebrow: 'PENSAMIENTO CRÍTICO', description: 'Ideas que abren conversaciones urgentes sobre el Perú y nuestro tiempo.', color: 'olive', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=900&auto=format&fit=crop' },
  { name: 'Patrimonio y Cultura', eyebrow: 'MEMORIA VIVA', description: 'El conocimiento y la belleza de un país que sigue escribiéndose.', color: 'navy', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=900&auto=format&fit=crop' },
]

export const books: Book[] = [
  { title: 'Horizontes de agua', author: 'LUCÍA TORRES', category: 'Narrativa contemporánea', description: 'Una novela sobre los lazos familiares, la memoria y los paisajes que nos definen. En un pueblo andino, el pasado y el presente se entrelazan en una historia luminosa sobre lo que significa volver.', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=700&auto=format&fit=crop', featured: true },
  { title: 'Memorias del desierto', author: 'DANIEL ROJAS', category: 'Historia', description: 'Relatos, personajes y paisajes de un territorio que nos enseña a resistir.', image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=700&auto=format&fit=crop' },
  { title: 'Cartografías de lo invisible', author: 'VALERIA MONTES', category: 'Ensayo', description: 'Ideas, ciencia y preguntas sobre los mundos que no vemos, pero que nos rodean.', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=700&auto=format&fit=crop' },
  { title: 'El arte de habitar', author: 'MARTÍN SALAZAR', category: 'Cultura', description: 'Espacios, ciudades y personas que nos muestran otras formas de estar en el mundo.', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=700&auto=format&fit=crop' },
  { title: 'La ciudad del silencio', author: 'ISABEL CARRILLO', category: 'Narrativa', description: 'Una historia sobre identidades, secretos y segundas oportunidades en el corazón de los Andes.', image: 'https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=700&auto=format&fit=crop' },
  { title: 'Voces del bosque', author: 'JAVIER RUIZ', category: 'Naturaleza y cultura', description: 'Encuentros con la vida silvestre y las comunidades que la protegen.', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=700&auto=format&fit=crop' },
  { title: 'Raíces que permanecen', author: 'ELENA VARGAS', category: 'Historia', description: 'Nuestro patrimonio, sus protagonistas y las historias que siguen vivas.', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=700&auto=format&fit=crop' },
  { title: 'Juventud y sociedad', author: 'DIEGO ALVAREZ', category: 'Ensayo', description: 'Miradas jóvenes sobre los desafíos, las oportunidades y el futuro de nuestra región.', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=700&auto=format&fit=crop' },
  { title: 'Pequeños grandes exploradores', author: 'SOFÍA DELGADO', category: 'Infantil / Juvenil', description: 'Historias para descubrir la naturaleza, la amistad y el valor de hacer preguntas.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=700&auto=format&fit=crop' },
]

export const navLinks = [
  ['Inicio', '/'], ['Nosotros', '/nosotros'], ['Nuestros sellos', '/sellos'], ['Libros', '/libros'], ['Publica con nosotros', '/publica-con-nosotros'], ['Contacto', '/contacto'],
]
