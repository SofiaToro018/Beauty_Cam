# 💄 Beauty Study Camila - Landing Page

> Landing page moderna y profesional para Beauty Study Camila, estética especializada en cejas, pestañas y maquillaje en Tuluá, Valle del Cauca.

![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contacto](#-contacto)

---

## � Acerca del Proyecto

Este es un **landing page completamente responsive** diseñado específicamente para **Beauty Study Camila**, un negocio de estética en Tuluá que ofrece servicios de:

- 💅 Diseño y microblading de cejas
- 👁️ Extensiones y lifting de pestañas
- 💄 Maquillaje profesional para todo tipo de eventos
- ✨ Tratamientos faciales

El sitio web está optimizado para **conversión** con múltiples llamados a la acción (CTAs) que facilitan el contacto directo vía **WhatsApp** e **Instagram**.

---

## �🌟 Características

### Diseño y Estilo
- ✨ **Diseño moderno y elegante** con paleta de tonos rosados claros
- 🎨 **Animaciones suaves** y efectos hover atractivos
- � **Loader animado** al cargar la página
- 🎭 **Efectos visuales flotantes** y gradientes profesionales
- 📱 **100% Responsive** - se adapta perfectamente a móviles, tablets y desktop

### Funcionalidades
- � **Navegación fluida** entre secciones con smooth scroll
- 📞 **Integración directa con WhatsApp** (botón flotante + formulario)
- 📸 **Enlace a Instagram** para seguir el perfil del negocio
- �️ **Galería con filtros** interactivos por categoría
- 💬 **Sección de testimonios** para reseñas de clientes
- 📝 **Formulario de contacto** que envía directamente a WhatsApp
- 🎯 **SEO optimizado** con meta tags apropiadas

### Secciones Incluidas
1. **Navbar** - Menú de navegación fijo con efecto scroll
2. **Hero** - Sección principal con título impactante y CTAs
3. **Sobre Nosotros** - Presentación del negocio con valores destacados
4. **Servicios** - 4 tarjetas de servicios con descripciones detalladas
5. **Galería** - Showcase de trabajos realizados con sistema de filtros
6. **Testimonios** - Reseñas de clientes satisfechos
7. **Contacto** - Información de ubicación, horarios y formulario
8. **Footer** - Enlaces útiles, redes sociales y copyright
9. **Botón WhatsApp** - Acceso directo flotante siempre visible

---

## 🛠️ Tecnologías

Este proyecto fue construido con tecnologías modernas y eficientes:

| Tecnología | Descripción |
|-----------|-------------|
| **React 18.2** | Biblioteca JavaScript para interfaces de usuario |
| **Vite 5.0** | Build tool ultrarrápido para desarrollo web moderno |
| **React Icons** | Librería de iconos para React |
| **CSS3** | Estilos personalizados con variables CSS y animaciones |
| **Google Fonts** | Tipografías Playfair Display & Poppins |

---

## � Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 14 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)

### Pasos para instalar

1. **Clona el repositorio** (si aplica):
```bash
git clone https://github.com/SofiaToro018/Beauty_Cam.git
cd Beauty_Cam
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Inicia el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en:
```
http://localhost:5173
```

---

## 🚀 Uso

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Vista previa del build de producción
npm run preview
```

### Durante el desarrollo

1. El servidor de desarrollo se recarga automáticamente al hacer cambios
2. Los errores se muestran en la consola y en el navegador
3. Usa las herramientas de desarrollo de React para debugging

---

## 📁 Estructura del Proyecto

```
Beauty_Cam/
│
├── public/                    # Archivos públicos estáticos
├── src/                       # Código fuente
│   ├── components/           # Componentes de React
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Navbar.css
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── Hero.css
│   │   ├── About.jsx        # Sobre nosotros
│   │   ├── About.css
│   │   ├── Services.jsx     # Tarjetas de servicios
│   │   ├── Services.css
│   │   ├── Gallery.jsx      # Galería con filtros
│   │   ├── Gallery.css
│   │   ├── Testimonials.jsx # Reseñas de clientes
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx      # Formulario y datos de contacto
│   │   ├── Contact.css
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Footer.css
│   │   ├── WhatsAppButton.jsx # Botón flotante de WhatsApp
│   │   └── WhatsAppButton.css
│   │
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales de la app
│   ├── index.css            # Estilos base y variables CSS
│   └── main.jsx             # Punto de entrada de React
│
├── index.html               # HTML principal
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias y scripts
├── .gitignore             # Archivos ignorados por Git
└── README.md              # Este archivo
```

---

## 🎨 Personalización

### Paleta de Colores

Los colores están definidos en `src/index.css` como variables CSS:

```css
--pink-light: #FFE5EC;      /* Fondo suave */
--pink-medium: #FFC2D1;     /* Acentos medios */
--pink-soft: #FFB3C6;       /* Detalles suaves */
--pink-accent: #FF8FAB;     /* Acentos principales */
--pink-dark: #FB6F92;       /* Títulos y énfasis */
```

**Para cambiar colores:** Modifica estas variables en `src/index.css`

### Información de Contacto

Para cambiar, busca y reemplaza `5732` en:
- `src/components/WhatsAppButton.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

#### Instagram
**Actual:** [@beauty_studio.cam](https://www.instagram.com/beauty_studio.cam)

Para cambiar, busca y reemplaza el enlace en:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Agregar Imágenes Reales

Actualmente el sitio usa **placeholders**. Para agregar imágenes reales:

1. **Coloca tus imágenes** en la carpeta `public/images/`
2. **Importa y usa las imágenes** en los componentes:
   - `src/components/Hero.jsx` - Imagen principal
   - `src/components/About.jsx` - Foto del negocio
   - `src/components/Gallery.jsx` - Portfolio de trabajos

Ejemplo:
```jsx
<img src="/images/tu-imagen.jpg" alt="Descripción" />
```

### Modificar Servicios

Edita el array `services` en `src/components/Services.jsx` para:
- Cambiar nombres de servicios
- Actualizar descripciones
- Agregar o quitar características
- Modificar precios (si decides agregarlos)

### Testimonios

Actualiza el array `testimonials` en `src/components/Testimonials.jsx` con reseñas reales de clientes.

---

## 🌐 Despliegue

Cuando estés listo para publicar el sitio, puedes usar cualquiera de estas plataformas:

### Opción 1: Vercel (Recomendado)
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. ¡Deploy automático! 🚀

### Opción 2: Netlify
1. Crea una cuenta en [Netlify](https://netlify.com)
2. Arrastra la carpeta `dist` después de hacer `npm run build`
3. O conecta tu repositorio para deploy automático

### Opción 3: GitHub Pages
```bash
npm run build
# Sube la carpeta dist a GitHub Pages
```

### Antes del deploy, asegúrate de:
- ✅ Todas las imágenes están optimizadas
- ✅ Información de contacto correcta
- ✅ Enlaces de redes sociales actualizados
- ✅ Pruebas en móvil y desktop
- ✅ SEO y meta tags configurados

---

## 📸 Capturas de Pantalla

> **Nota:** El sitio está actualmente en desarrollo local. Las capturas se agregarán después del deploy.

Secciones incluidas:
- ✅ Hero con gradiente rosado y CTAs
- ✅ Sobre Nosotros con valores destacados
- ✅ Servicios en tarjetas animadas
- ✅ Galería interactiva con filtros
- ✅ Testimonios de clientes
- ✅ Formulario de contacto funcional
- ✅ Footer con redes sociales
- ✅ Botón flotante de WhatsApp

---

## 📞 Contacto

**Beauty Study Camila**
- 📍 Ubicación: Tuluá, Valle del Cauca, Colombia
- 📸 Instagram: [@beauty_studio.cam](https://www.instagram.com/beauty_studio.cam)
- ⏰ Horario: Lunes a Sábado, 9:00 AM - 7:00 PM

---

## 📝 Estado del Proyecto

- [x] Diseño y estructura base
- [x] Componentes React
- [x] Estilos y animaciones
- [x] Integración con WhatsApp
- [x] Integración con Instagram
- [x] Responsive design
- [ ] Imágenes reales del negocio
- [ ] Revisión del cliente
- [ ] Deploy a producción
- [ ] SEO avanzado
- [ ] Analytics (opcional)

---

## 🤝 Contribuciones

Este es un proyecto privado para Beauty Study Camila. Para sugerencias o cambios, contacta directamente con el desarrollador.

---

## � Licencia

© 2025 Beauty Study Camila. Todos los derechos reservados.

Este proyecto fue desarrollado exclusivamente para Beauty Study Camila en Tuluá, Valle del Cauca.

---

## 💝 Desarrollado con amor

Hecho con ❤️ para realzar la belleza de Tuluá

**¿Preguntas o sugerencias?** Contacta vía WhatsApp o Instagram
