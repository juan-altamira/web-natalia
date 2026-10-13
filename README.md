# Dra. Natalia Frutos · Sitio Web Oficial & Plataforma Clínica

Sitio web oficial y plataforma digital de la **Dra. Natalia Soledad Frutos** (Médica de familia, medicina integrativa, medicina del estrés y fitoterapia en Santa Fe Capital).

---

## ✨ Características y Módulos

### 1. Sitio Público Editorial
- Filosofía clínica integral: *«El cuerpo no funciona por partes»*.
- Áreas de atención: Consulta de primera vez, seguimiento, medicina del estrés y cronobiología, fitomedicina y microbiota.
- Trayectoria académica, acreditaciones clínicas y bitácora de divulgación médica.
- Diseño responsivo de alta gama con paleta cálida editorial (*Newsreader* + *Hanken Grotesk*) y soporte nativo para **modo claro y oscuro**.

### 2. Sistema de Turnos Online
- Flujo interactivo de reserva de turnos adaptado a la arquitectura de Cita Suite con la identidad visual del consultorio.
- Modalidades presencial (Santa Fe Capital) y virtual.
- Selección dinámica de fecha y franja horaria.
- Formulario de inscripción y confirmación de turnos.

### 3. Vitrina Comercial y Checkout de Cursos
- Sección `#cursos` en la portada con el programa insignia *«Dormir mejor empieza de día»* y talleres complementarios.
- Modal de checkout de una sola pantalla con 3 secciones claras: *Tu curso*, *Tus datos* y *Cómo querés pagar*.
- Cálculo transparente de métodos de pago (10% OFF por transferencia bancaria vs. Mercado Pago / tarjetas).
- Pantalla con datos bancarios (Alias `DRA.NATALIA.FRUTOS`, CBU, 1-click copy) y confirmación automatizada por WhatsApp.

### 4. Aula Virtual Interactiva (Campus LMS)
- Experiencia de aprendizaje para alumnos: visor de video-lecciones, materiales descargables en PDF, apuntes y foro de consultas directas con la docente.

### 5. Panel de Agenda y Recordatorios
- Vista de agenda para la gestión médica de citas, estados y simulaciones de recordatorios de turno.

---

## 🛠️ Tecnologías

- **HTML5 semántico**: Estructura accesible, semántica, metaetiquetas Open Graph y optimización SEO.
- **CSS3 Vanilla**: Sistema de tokens de diseño (`--paper`, `--accent`, `--ink`), microinteracciones y maquetación responsive.
- **JavaScript Vanilla (ES6+)**: Motores modulares de reserva, aula virtual, pasarela de cursos y persistencia de temas sin dependencias externas.

---

## 📂 Estructura de Archivos

```
├── index.html        # Página principal, vistas integradas y modales
├── styles.css        # Hoja de estilos principal y diseño responsivo
├── app.js            # Lógica y controladores del sitio
├── assets/           # Recursos visuales y fotografías clínicas
│   ├── natalia-avatar-turnos.png
│   ├── natalia-frutos-remplazo.png
│   ├── remplazo-consultorio-mesa.png
│   ├── curso_calma.jpg
│   └── ...
├── .gitignore        # Exclusiones de Git
└── README.md         # Documentación del proyecto
```

---

## 🚀 Despliegue y Ejecución Local

Para visualizar el proyecto localmente con cualquier servidor estático:

```bash
# Con Python
python3 -m http.server 8080

# O con npx
npx serve .
```

Luego ingresar en el navegador a `http://localhost:8080`.
