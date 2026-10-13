/**
 * DRA. NATALIA SOLEDAD FRUTOS · MEDICINA INTEGRATIVA & CITA SUITE
 * Sistema clínico digital y agenda para consultorio presencial y virtual.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initMobileMenu();
  initRevealAnimations();
  initTrainingAccordion();
  initDockSwitcher();
  initServiceDetailDrawer();
  initCoursesCommerce();
  initBookingWizard();
  initVirtualClassroomLMS();
  initNotificationsSimulator();
  initAdminPanel();
  initBlogReader();
  bindSiteContactData();
  renderPublicServices();
  renderFooterServices();
  handleUrlParams();
});

/* ==========================================================================
   ESTADO GLOBAL (CITA SUITE STORE)
   ========================================================================== */
const appState = {
  theme: 'light',

  siteInfo: {
    doctorName: 'Dra. Natalia Soledad Frutos',
    shortName: 'Natalia Frutos',
    specialties: 'Medicina general y de familia · Medicina integrativa y ortomolecular · Fitoterapia · Medicina del estrés',
    matricula: 'MP 15.824',
    phone: '+54 9 342 555-1234',
    phoneClean: '5493425551234',
    email: 'contacto@dranataliafrutos.com.ar',
    instagram: '@natalia.frutos.doc',
    instagramUrl: 'https://www.instagram.com/natalia.frutos.doc/',
    address: 'Consultorio en Santa Fe Capital · Consultas Virtuales en todo el país',
    hours: 'Lunes a viernes de 9:00 a 19:00 hs (turnos con reserva previa)'
  },

  // Áreas y consultas clínicas de Dra. Natalia Frutos
  services: [
    {
      id: 1,
      slug: 'consulta-integrativa-primera-vez',
      title: 'Consulta Médica Integrativa (Primera vez)',
      modality: 'Presencial o Virtual',
      duration: '75 - 90 min',
      price: '$38.000 ARS',
      badge: 'Historia clínica exhaustiva',
      active: true,
      shortDesc: 'Historia clínica exhaustiva y plan inicial',
      description: 'Una primera consulta extensa para conocer tu historia desde el principio, revisar cada sistema del cuerpo y definir qué estudios bioquímicos avanzados necesitamos antes de iniciar el tratamiento.',
      features: [
        'Interrogatorio exhaustivo desde el nacimiento y contexto afectivo/laboral',
        'Revisión clínica completa sistema por sistema y funciones cognitivas',
        'Pedido de laboratorio bioquímico ampliado (vitaminas, minerales, hormonas y marcadores de estrés)',
        'Definición de objetivos consensuados sin apuros ni relojes'
      ],
      tags: ['Primera vez', 'Panel bioquímico', 'Sin reloj']
    },
    {
      id: 2,
      slug: 'consulta-seguimiento-evolucion',
      title: 'Consulta de Seguimiento y Evolución',
      modality: 'Presencial o Virtual',
      duration: '50 min',
      price: '$28.000 ARS',
      badge: 'Interpretación de laboratorio',
      active: true,
      shortDesc: 'Evaluación de análisis clínicos y seguimiento',
      description: 'Lectura minuciosa de análisis clínicos, diseño de suplementación ortomolecular a medida, ajuste de hábitos posibles de sostener y articulación interdisciplinaria.',
      features: [
        'Interpretación clínica integral del perfil bioquímico y metabólico',
        'Armado de plan individual de suplementación y principios activos',
        'Revisión de hábitos de descanso, alimentación y movimiento',
        'Integración con nutrición, psicología u osteopatía si corresponde'
      ],
      tags: ['Laboratorio', 'Suplementación', 'Seguimiento']
    },
    {
      id: 3,
      slug: 'medicina-estres-regulacion-descanso',
      title: 'Medicina del Estrés y Regulación del Descanso',
      modality: 'Presencial o Virtual',
      duration: '60 min',
      price: '$32.000 ARS',
      badge: 'Enfoque PNIE y Cronobiología',
      active: true,
      shortDesc: 'Abordaje de cronobiología, cortisol y descanso',
      description: 'Abordaje psiconeuroinmunoendocrinológico para personas que viven apagando incendios o con cansancio crónico. Regulación del reloj interno y señales biológicas de supervivencia.',
      features: [
        'Evaluación de eje adrenal, cortisol y respuesta al estrés',
        'Estrategias de higiene circadiana, exposición a la luz y cronobiología',
        'Manejo de fatiga vespertina y despertares nocturnos sin descanso',
        'Adaptógenos y fitoterapia con respaldo científico'
      ],
      tags: ['PNIE', 'Sueño profundo', 'Cronobiología']
    },
    {
      id: 4,
      slug: 'fitoterapia-microbiota-hongos',
      title: 'Fitoterapia, Hongos Medicinales y Microbiota',
      modality: 'Presencial o Virtual',
      duration: '60 min',
      price: '$32.000 ARS',
      badge: 'Fitomedicina y Salud Intestinal',
      active: true,
      shortDesc: 'Fitomedicina clínica y salud digestiva',
      description: 'Tratamiento fitoterapéutico y micología funcional aplicada a la inflamación de bajo grado, salud digestiva, eje intestino-cerebro y modulación de la microbiota.',
      features: [
        'Prescripción de formulación magistral y tinturas madre científicas',
        'Micología funcional: melena de león, reishi y hongos adaptógenos (SLF)',
        'Abordaje del eje intestino-cerebro, permeabilidad e hinchazón',
        'Estrategias naturales que respetan la fisiología individual'
      ],
      tags: ['Fitomedicina', 'Hongos funcionales', 'Eje intestino-cerebro']
    }
  ],

  // Turnos en la agenda clínica
  appointments: [
    {
      id: 'apt-marcos',
      key: 'marcos',
      time: '15:00 hs',
      date: 'Jueves 15 de Octubre',
      name: 'Marcos Rodríguez',
      email: 'marcos.rodriguez@email.com',
      phone: '+54 9 341 555-8899',
      serviceId: 1,
      serviceName: 'Consulta Médica Integrativa (Primera vez)',
      modality: 'Presencial (Consultorio)',
      status: 'Nuevo desde la web',
      isNew: true,
      reason: 'Cansancio crónico hace 8 meses, duermo 7 horas pero me levanto agotado y con la cabeza a mil. Análisis laborales dan todo "normal".',
      notes: 'Sin medicación al momento. Trae estudios de sangre de hace 6 meses. Consulta inicial agendada online.',
      hasLabs: 'si'
    },
    {
      id: 'apt-camila',
      key: 'camila',
      time: '10:00 hs',
      date: 'Jueves 15 de Octubre',
      name: 'Camila Valenzuela',
      email: 'camilav@gmail.com',
      phone: '+54 9 11 2233-4455',
      serviceId: 4,
      serviceName: 'Fitoterapia, Hongos Medicinales y Microbiota',
      modality: 'Virtual (Videollamada)',
      status: 'Confirmado',
      isNew: false,
      reason: 'Distensión abdominal constante por las tardes, intolerancias alimentarias difusas y caída de cabello tras estrés laboral.',
      notes: 'Segunda consulta. Evaluamos respuesta a fitoterapia y plan de micología funcional para el eje digestivo.',
      hasLabs: 'si'
    },
    {
      id: 'apt-esteban',
      key: 'esteban',
      time: '11:30 hs',
      date: 'Jueves 15 de Octubre',
      name: 'Esteban Gómez',
      email: 'esteban.g@empresa.com.ar',
      phone: '+54 9 341 448-9900',
      serviceId: 2,
      serviceName: 'Consulta de Seguimiento y Evolución',
      modality: 'Presencial (Consultorio)',
      status: 'Confirmado',
      isNew: false,
      reason: 'Revisión del panel bioquímico ampliado (Vitamina D, Homocisteína, Cortisol salival matinal, Perfil tiroideo completo).',
      notes: 'Trae laboratorio solicitado en la primera entrevista. Vamos a consensuar el plan de suplementación ortomolecular.',
      hasLabs: 'si'
    },
    {
      id: 'apt-luciana',
      key: 'luciana',
      time: '17:30 hs',
      date: 'Jueves 15 de Octubre',
      name: 'Dra. Luciana Peralta',
      email: 'luciana.peralta@hospital.org.ar',
      phone: '+54 9 342 667-1122',
      serviceId: 3,
      serviceName: 'Medicina del Estrés y Regulación del Descanso',
      modality: 'Virtual (Videollamada)',
      status: 'Confirmado',
      isNew: false,
      reason: 'Colega médica. Trabajo en guardias rotativas de noche, insomnio de conciliación severo y desfasaje circadiano.',
      notes: 'Primera consulta para abordaje PNIE de cronobiología y adaptación a turnos rotativos.',
      hasLabs: 'no'
    }
  ],

  selectedPatientKey: 'marcos',

  // Aula Virtual / LMS Propuesta
  lms: {
    lessonId: '2.3',
    lessonTitle: 'La luz de la mañana y el reloj interno',
    instructor: 'Dra. Natalia Frutos',
    isPlaying: false,
    currentSeconds: 372,
    totalSeconds: 790,
    speed: 1.0,
    isCurrentLessonCompleted: false,
    completedLessons: ['1.1', '1.2', '1.3', '2.1', '2.2'],
    completedCount: 5,
    totalCount: 12
  }
};

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'info', iconSvg = null) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `clinical-toast ${type}`;

  const defaultIcon = type === 'success'
    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

  toast.innerHTML = `
    <div class="clinical-toast-icon">
      ${iconSvg || defaultIcon}
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3600);
}

/* ==========================================================================
   HEADER SCROLL & BACKGROUND
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 15) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const navToggle = document.getElementById('themeToggleNav');

  function updateThemeUI(isDark) {
    if (navToggle) {
      navToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }
  }

  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('nf_theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
    showToast(isDark ? 'Modo noche activado' : 'Modo claro activado', 'info');
  }

  const savedTheme = localStorage.getItem('nf_theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateThemeUI(true);
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateThemeUI(false);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateThemeUI(prefersDark);
  }

  navToggle?.addEventListener('click', toggle);
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const openBtn = document.getElementById('menuOpenBtn');
  const closeBtn = document.getElementById('menuCloseBtn');
  const menu = document.getElementById('mobileMenu');

  if (!menu) return;

  function open() {
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    openBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    openBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);

  menu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      close();
    });
  });
}

/* ==========================================================================
   REVEAL ON SCROLL
   ========================================================================== */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  function markRevealed(el) {
    el.classList.add('is-in', 'in');
  }

  // Revelar inmediatamente los elementos del hero o cercanos al viewport
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.2) {
      markRevealed(el);
    }
  });

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          markRevealed(e.target);
          obs.unobserve(e.target);
        }
      });
    }, {
      rootMargin: '120px 0px 60px 0px',
      threshold: 0.02
    });

    reveals.forEach(el => {
      if (!el.classList.contains('is-in')) {
        obs.observe(el);
      }
    });
  } else {
    reveals.forEach(markRevealed);
  }
}

/* ==========================================================================
   TRAINING ACCORDION / TOGGLE
   ========================================================================== */
function initTrainingAccordion() {
  const list = document.getElementById('trainingList');
  const toggleBtn = document.getElementById('trainingToggle');

  if (!list || !toggleBtn) return;

  list.classList.add('is-collapsed');

  toggleBtn.addEventListener('click', () => {
    const isCollapsed = list.classList.toggle('is-collapsed');
    toggleBtn.setAttribute('aria-expanded', !isCollapsed);
    toggleBtn.textContent = isCollapsed ? 'Ver toda la formación' : 'Ver menos';
  });
}

/* ==========================================================================
   DOCK SWITCHER (DEMO TOURS)
   ========================================================================== */
function initDockSwitcher() {
  const dock = document.getElementById('uxDock');
  const dockPanel = document.getElementById('dockPanel');
  const dockToggle = document.getElementById('dockToggle');
  const buttons = document.querySelectorAll('.ux-dock-btn');

  const viewSite = document.getElementById('viewPublicSite');
  const viewLms = document.getElementById('viewCoursesLms');
  const viewNotif = document.getElementById('viewNotifications');
  const viewAdmin = document.getElementById('viewAdminPanel');
  const bookingModal = document.getElementById('bookingModal');

  function hideAllViews() {
    if (viewSite) viewSite.style.display = 'none';
    if (viewLms) viewLms.style.display = 'none';
    if (viewNotif) viewNotif.style.display = 'none';
    if (viewAdmin) viewAdmin.style.display = 'none';
    bookingModal?.classList.remove('active');
    buttons.forEach(b => b.classList.remove('active'));
    document.body.classList.remove('is-lms-view');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      hideAllViews();
      btn.classList.add('active');

      switch (target) {
        case 'public-site':
          if (viewSite) viewSite.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'booking-flow':
          if (viewSite) viewSite.style.display = 'block';
          openBookingModal();
          goToBookingStep(1);
          break;
        case 'courses-lms':
          document.body.classList.add('is-lms-view');
          if (viewLms) viewLms.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'notifications':
          if (viewNotif) viewNotif.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'admin-panel':
          if (viewAdmin) viewAdmin.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
          renderAdminAgenda();
          renderAdminPatients();
          renderAdminServices();
          break;
      }
    });
  });

  dockToggle?.addEventListener('click', () => {
    const isOpen = dock?.classList.toggle('is-open');
    dockPanel?.classList.toggle('active');
    dockToggle.setAttribute('aria-expanded', !!isOpen);
  });

  buttons.forEach(btn => {
    const origHandler = btn.onclick;
    btn.addEventListener('click', () => {
      dock?.classList.remove('is-open');
      dockPanel?.classList.remove('active');
      dockToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.getElementById('navBackToWebBtn')?.addEventListener('click', () => {
    document.getElementById('dockBtnSite')?.click();
  });
}

function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  if (view) {
    const btn = document.querySelector(`.ux-dock-btn[data-view="${view}"]`);
    if (btn) btn.click();
  }
}

/* ==========================================================================
   PUBLIC SERVICES RENDERING
   ========================================================================== */
function renderPublicServices() {
  const container = document.getElementById('publicServicesList');
  if (!container) return;

  container.innerHTML = '';

  const activeServices = appState.services.filter(s => s.active);

  activeServices.forEach((s, idx) => {
    const row = document.createElement('article');
    row.className = 'service-row reveal';
    row.style.setProperty('--d', `${idx * 0.08}s`);

    const tagsHtml = (s.tags || s.features.slice(0, 3)).map(t => `<span class="chip">${t}</span>`).join('');

    row.innerHTML = `
      <div class="service-row-title">
        <h3>
          <button type="button" onclick="openServiceDetail(${s.id})">
            ${s.title}
          </button>
        </h3>
        <span class="for">${s.modality}</span>
      </div>

      <div class="service-row-desc">
        <p>${s.description}</p>
        <div class="chips">
          ${tagsHtml}
        </div>
      </div>

      <div class="service-row-meta">
        <div class="service-price-val">${s.price}</div>
        <div class="service-time-lbl">${s.duration}</div>
      </div>

      <div class="service-row-go">
        <button type="button" aria-label="Ver detalles de ${s.title}" onclick="openServiceDetail(${s.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    `;

    container.appendChild(row);
  });

  // Re-observe new elements
  initRevealAnimations();
}

function renderFooterServices() {
  const container = document.getElementById('footerServicesList');
  if (!container) return;

  container.innerHTML = '';
  appState.services.filter(s => s.active).forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button" onclick="openServiceDetail(${s.id})">${s.title}</button>`;
    container.appendChild(li);
  });
}

/* ==========================================================================
   SERVICE DETAIL MODAL
   ========================================================================== */
let currentDetailServiceId = 1;

function initServiceDetailDrawer() {
  const modal = document.getElementById('serviceDetailModal');
  const closeBtn = document.getElementById('closeServiceDetailBtn');
  const bookBtn = document.getElementById('btnBookFromServiceDetail');

  window.openServiceDetail = function(serviceId) {
    const s = appState.services.find(item => item.id === Number(serviceId)) || appState.services[0];
    if (!s) return;

    currentDetailServiceId = s.id;

    document.getElementById('detailServiceName').textContent = s.title;
    document.getElementById('detailServiceModality').textContent = s.modality;
    document.getElementById('detailServiceDescription').textContent = s.description;
    document.getElementById('detailPriceDisplay').textContent = s.price;
    document.getElementById('detailDurationDisplay').textContent = s.duration;

    const list = document.getElementById('detailFeaturesList');
    if (list) {
      list.innerHTML = '';
      s.features.forEach(f => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; margin-bottom: 8px; color: var(--ink-2);';
        li.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="color: var(--moss); flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span>`;
        list.appendChild(li);
      });
    }

    modal?.classList.add('active');
  };

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  bookBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
    openBookingModal(currentDetailServiceId);
  });
}

/* ==========================================================================
   COURSES COMMERCE & CHECKOUT ENGINE (REDISEÑO INTEGRAL · 8 UX PILLARS)
   ========================================================================== */
function initCoursesCommerce() {
  const modal = document.getElementById('courseCheckoutModal');
  const closeBtn = document.getElementById('closeCourseCheckoutBtn');
  const form = document.getElementById('courseCheckoutForm');
  const openButtons = document.querySelectorAll('.open-course-modal-btn');
  const formView = document.getElementById('courseCheckoutFormView');
  const successView = document.getElementById('courseCheckoutTransferSuccess');
  const footerEl = document.getElementById('courseCheckoutFooter');
  const submitBtn = document.getElementById('btnSubmitCoursePurchase');
  const copyAliasBtn = document.getElementById('btnCopyAlias');
  const backToFormBtn = document.getElementById('btnBackToCheckoutForm');

  let activeCourseData = {
    id: 'dormir-mejor',
    name: 'Dormir mejor empieza de día',
    price: '$28.000 ARS',
    numPrice: 28000
  };

  function updatePaymentMethodState() {
    const selectedRadio = document.querySelector('input[name="coursePaymentMethod"]:checked');
    const method = selectedRadio ? selectedRadio.value : 'transfer';
    const discountedNum = Math.round(activeCourseData.numPrice * 0.9);
    const helperTextEl = document.getElementById('paymentHelperText');
    const footerPriceEl = document.getElementById('checkoutFooterTotalPrice');
    const cardTransfer = document.getElementById('paymentCardTransfer');
    const cardCard = document.getElementById('paymentCardCard');

    if (method === 'transfer') {
      cardTransfer?.classList.add('selected');
      cardCard?.classList.remove('selected');
      if (submitBtn) submitBtn.textContent = 'Continuar con transferencia';
      if (footerPriceEl) footerPriceEl.textContent = `$${discountedNum.toLocaleString('es-AR')} ARS`;
      if (helperTextEl) {
        helperTextEl.textContent = 'Al continuar verás el Alias, CBU y cómo enviarnos el comprobante por WhatsApp para habilitar tu cuenta al instante.';
      }
    } else {
      cardCard?.classList.add('selected');
      cardTransfer?.classList.remove('selected');
      if (submitBtn) submitBtn.textContent = 'Pagar con Mercado Pago';
      if (footerPriceEl) footerPriceEl.textContent = activeCourseData.price;
      if (helperTextEl) {
        helperTextEl.textContent = 'Te redirigiremos a Mercado Pago para abonar de forma segura con tarjeta de crédito, débito o dinero en cuenta.';
      }
    }
  }

  // Escuchar cambios de método de pago
  document.querySelectorAll('input[name="coursePaymentMethod"]').forEach(radio => {
    radio.addEventListener('change', updatePaymentMethodState);
  });

  function openCourseCheckout(courseId, courseName, coursePrice) {
    activeCourseData.id = courseId || 'dormir-mejor';
    activeCourseData.name = courseName || 'Dormir mejor empieza de día';
    activeCourseData.price = coursePrice || '$28.000 ARS';

    // Parse numeric price
    const num = parseInt(activeCourseData.price.replace(/[^\d]/g, ''), 10) || 28000;
    activeCourseData.numPrice = num;
    const discountedNum = Math.round(num * 0.9);

    const titleEl = document.getElementById('courseCheckoutTitle');
    const priceEl = document.getElementById('checkoutCoursePrice');
    const regPriceEl = document.getElementById('checkoutRegularPrice');
    const discPriceEl = document.getElementById('checkoutDiscountedPrice');
    const featuresEl = document.getElementById('checkoutCourseFeatures');
    const waLinkEl = document.getElementById('btnWhatsAppCourseInquiry');

    if (titleEl) titleEl.textContent = activeCourseData.name;
    if (priceEl) priceEl.innerHTML = `${activeCourseData.price.replace(' ARS', '')} <small>ARS</small>`;
    if (regPriceEl) regPriceEl.textContent = activeCourseData.price;
    if (discPriceEl) discPriceEl.textContent = `$${discountedNum.toLocaleString('es-AR')} ARS`;

    // Resumen de lecciones y especificaciones según curso
    if (featuresEl) {
      if (activeCourseData.id.includes('estres') || activeCourseData.id.includes('microbiota')) {
        featuresEl.innerHTML = '<span>4 Módulos</span><span class="bullet">·</span><span>Guía clínica PDF</span><span class="bullet">·</span><span>Microbiota y PNIE</span>';
      } else if (activeCourseData.id.includes('botiquin') || activeCourseData.id.includes('fito')) {
        featuresEl.innerHTML = '<span>6 Video-clases</span><span class="bullet">·</span><span>Vademécum PDF</span><span class="bullet">·</span><span>Plantas y tinturas</span>';
      } else {
        featuresEl.innerHTML = '<span>12 Video-lecciones</span><span class="bullet">·</span><span>Guías en PDF</span><span class="bullet">·</span><span>Foro de consultas</span>';
      }
    }

    if (waLinkEl) {
      const waMsg = encodeURIComponent(`Hola Dra. Natalia, quería consultarte sobre el curso "${activeCourseData.name}" para coordinar la inscripción.`);
      waLinkEl.href = `https://wa.me/5493425551234?text=${waMsg}`;
    }

    // Resetear vistas a formulario inicial
    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';
    if (footerEl) footerEl.style.display = 'flex';

    // Resetear radio a transferencia por defecto
    const transferRadio = document.querySelector('input[name="coursePaymentMethod"][value="transfer"]');
    if (transferRadio) transferRadio.checked = true;
    updatePaymentMethodState();

    // Limpiar errores previos
    document.querySelectorAll('.checkout-form-group.has-error').forEach(el => el.classList.remove('has-error'));

    modal?.classList.add('active');
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.courseId;
      const name = btn.dataset.courseName || btn.closest('.course-info, .course-mini-card')?.querySelector('h3, h4')?.textContent?.trim();
      const price = btn.dataset.coursePrice || btn.closest('.course-info, .course-mini-card')?.querySelector('.price-current, .mini-price')?.textContent?.trim();
      openCourseCheckout(id, name, price);
    });
  });

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Envío del formulario
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('studentName');
    const emailInput = document.getElementById('studentEmail');
    const phoneInput = document.getElementById('studentPhone');
    const studentName = nameInput?.value?.trim();
    const studentEmail = emailInput?.value?.trim();
    const studentPhone = phoneInput?.value?.trim();
    const method = document.querySelector('input[name="coursePaymentMethod"]:checked')?.value || 'transfer';

    let hasError = false;
    if (!studentName) {
      nameInput?.closest('.checkout-form-group')?.classList.add('has-error');
      hasError = true;
    } else {
      nameInput?.closest('.checkout-form-group')?.classList.remove('has-error');
    }

    if (!studentEmail || !studentEmail.includes('@')) {
      emailInput?.closest('.checkout-form-group')?.classList.add('has-error');
      hasError = true;
    } else {
      emailInput?.closest('.checkout-form-group')?.classList.remove('has-error');
    }

    if (!studentPhone || studentPhone.length < 6) {
      phoneInput?.closest('.checkout-form-group')?.classList.add('has-error');
      hasError = true;
    } else {
      phoneInput?.closest('.checkout-form-group')?.classList.remove('has-error');
    }

    if (hasError) {
      showToast('Por favor completá los campos requeridos.', 'info');
      return;
    }

    const discountedNum = Math.round(activeCourseData.numPrice * 0.9);

    if (method === 'transfer') {
      // Activar pantalla de datos bancarios transparentes
      if (formView) formView.style.display = 'none';
      if (footerEl) footerEl.style.display = 'none';
      if (successView) successView.style.display = 'block';

      const successAmountEl = document.getElementById('transferSuccessAmount');
      if (successAmountEl) successAmountEl.textContent = `$${discountedNum.toLocaleString('es-AR')} ARS`;

      const sendWaBtn = document.getElementById('btnSendTransferReceiptWa');
      if (sendWaBtn) {
        const confirmMsg = encodeURIComponent(
          `Hola Dra. Natalia, realicé la transferencia para el curso "${activeCourseData.name}".\n\n` +
          `• Alumno/a: ${studentName}\n` +
          `• Email: ${studentEmail}\n` +
          `• Tel: ${studentPhone}\n` +
          `• Importe: $${discountedNum.toLocaleString('es-AR')} ARS\n\n` +
          `Adjunto comprobante para activar mi usuario en el aula virtual.`
        );
        sendWaBtn.href = `https://wa.me/5493425551234?text=${confirmMsg}`;
      }

      showToast(`¡Inscripción registrada, ${studentName}!`, 'success');
      document.getElementById('courseCheckoutBody')?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showToast(`Redirigiendo a pasarela segura de Mercado Pago para ${activeCourseData.name}...`, 'info');
      setTimeout(() => {
        showToast(`¡Pago simulado con éxito! Tus credenciales fueron enviadas a ${studentEmail}`, 'success');
        modal?.classList.remove('active');
        form.reset();
      }, 2200);
    }
  });

  // Botón para volver a editar datos desde la pantalla de éxito
  backToFormBtn?.addEventListener('click', () => {
    if (formView) formView.style.display = 'block';
    if (footerEl) footerEl.style.display = 'flex';
    if (successView) successView.style.display = 'none';
  });

  // Botón Copiar Alias
  copyAliasBtn?.addEventListener('click', () => {
    const alias = document.getElementById('bankAliasVal')?.textContent?.trim() || 'DRA.NATALIA.FRUTOS';
    navigator.clipboard?.writeText(alias).then(() => {
      const btnSpan = copyAliasBtn.querySelector('span');
      if (btnSpan) btnSpan.textContent = '¡Copiado!';
      showToast(`Alias ${alias} copiado al portapapeles`, 'success');
      setTimeout(() => {
        if (btnSpan) btnSpan.textContent = 'Copiar';
      }, 2000);
    }).catch(() => {
      showToast(`Alias: ${alias}`, 'info');
    });
  });

  // Botones para probar aula virtual directamente
  const tryLmsBtn = document.getElementById('btnTryLmsDirect');
  const previewLmsBtn = document.getElementById('btnPreviewLmsFromCourse');

  const goToLmsDemo = (e) => {
    e?.preventDefault();
    modal?.classList.remove('active');
    const dockBtn = document.getElementById('dockBtnLms');
    if (dockBtn) {
      dockBtn.click();
      showToast('Explorá el aula virtual interactiva de Natalia', 'info');
    }
  };

  tryLmsBtn?.addEventListener('click', goToLmsDemo);
  previewLmsBtn?.addEventListener('click', goToLmsDemo);
}

/* ==========================================================================
   BOOKING WIZARD ENGINE (CITA SUITE ARCHITECTURE · NATALIA WARM PALETTE)
   ========================================================================== */
let bookingCurrentStep = 1;
let selectedBookingServiceId = 1;
let selectedBookingModality = 'presencial'; // 'presencial' or 'online'
let selectedBookingDayId = '2026-10-15';
let selectedBookingTime = '15:30';
let showAllDays = false;

const appointmentDays = [
  { id: '2026-10-13', label: 'Martes 13 de octubre', shortDate: '13 de octubre', dayName: 'martes', dayNumber: 13, monthName: 'octubre', year: 2026, slots: ['09:30', '11:00', '14:00', '16:30'] },
  { id: '2026-10-14', label: 'Miércoles 14 de octubre', shortDate: '14 de octubre', dayName: 'miércoles', dayNumber: 14, monthName: 'octubre', year: 2026, slots: ['10:00', '11:30', '15:00', '17:00', '18:15'] },
  { id: '2026-10-15', label: 'Jueves 15 de octubre', shortDate: '15 de octubre', dayName: 'jueves', dayNumber: 15, monthName: 'octubre', year: 2026, slots: ['09:30', '11:00', '14:00', '15:30', '17:00', '18:15'] },
  { id: '2026-10-16', label: 'Viernes 16 de octubre', shortDate: '16 de octubre', dayName: 'viernes', dayNumber: 16, monthName: 'octubre', year: 2026, slots: ['10:00', '13:30', '15:30', '17:00'] },
  { id: '2026-10-19', label: 'Lunes 19 de octubre', shortDate: '19 de octubre', dayName: 'lunes', dayNumber: 19, monthName: 'octubre', year: 2026, slots: ['09:30', '11:00', '14:00', '16:00', '17:30'] },
  { id: '2026-10-20', label: 'Martes 20 de octubre', shortDate: '20 de octubre', dayName: 'martes', dayNumber: 20, monthName: 'octubre', year: 2026, slots: ['10:00', '11:30', '15:00', '16:30', '18:00'] },
  { id: '2026-10-21', label: 'Miércoles 21 de octubre', shortDate: '21 de octubre', dayName: 'miércoles', dayNumber: 21, monthName: 'octubre', year: 2026, slots: ['09:30', '11:00', '14:00', '15:30', '17:00'] },
  { id: '2026-10-22', label: 'Jueves 22 de octubre', shortDate: '22 de octubre', dayName: 'jueves', dayNumber: 22, monthName: 'octubre', year: 2026, slots: ['10:00', '11:30', '14:30', '16:00', '17:30'] }
];

function getSelectedBookingService() {
  return appState.services.find(s => s.id === selectedBookingServiceId) || appState.services[0];
}

function getSelectedBookingDay() {
  return appointmentDays.find(d => d.id === selectedBookingDayId) || appointmentDays[2];
}

function getBookingModalityText() {
  return selectedBookingModality === 'online' ? 'Virtual (Videollamada)' : 'Presencial en consultorio';
}

function updateCitaSuiteSummaryCards() {
  const service = getSelectedBookingService();
  const day = getSelectedBookingDay();
  const modalityText = getBookingModalityText();

  // Summary chip 1: Servicio
  const selectedServiceTitle = document.getElementById('csSelectedServiceTitle');
  const selectedModalityTitle = document.getElementById('csSelectedModalityTitle');
  if (selectedServiceTitle) selectedServiceTitle.textContent = `${service.title} · ${service.duration}`;
  if (selectedModalityTitle) selectedModalityTitle.textContent = modalityText;

  // Summary chip 2: Día y Horario
  const selectedDateTimeTitle = document.getElementById('csSelectedDateTimeTitle');
  if (selectedDateTimeTitle) {
    selectedDateTimeTitle.textContent = `${day.label} a las ${selectedBookingTime} hs`;
  }

  // Step 3 Banner
  const summaryServiceBanner = document.getElementById('csSummaryServiceBanner');
  const summaryDateBanner = document.getElementById('csSummaryDateBanner');
  if (summaryServiceBanner) {
    summaryServiceBanner.textContent = `${service.title} con Dra. Natalia Frutos`;
  }
  if (summaryDateBanner) {
    summaryDateBanner.textContent = `${day.dayName}, ${day.dayNumber} de ${day.monthName} a las ${selectedBookingTime} h · ${service.duration}`;
  }
}

function goToBookingStep(step) {
  bookingCurrentStep = step;

  // 1. Mostrar/Ocultar wrappers de paso
  for (let i = 1; i <= 4; i++) {
    const wrapper = document.getElementById(`bookingStep${i}`);
    if (wrapper) {
      wrapper.style.display = (i === step) ? 'block' : 'none';
    }
  }

  // 2. Actualizar Tarjeta de Progreso
  const progressTitle = document.getElementById('csProgressStepTitle');
  const progressFill = document.getElementById('csProgressFill');
  const resetBtn = document.getElementById('csBtnResetBooking');

  const stepLabels = {
    1: 'Paso 1 de 4 · Servicio',
    2: 'Paso 2 de 4 · Día y horario',
    3: 'Paso 3 de 4 · Tus datos',
    4: 'Paso 4 de 4 · Confirmación'
  };

  const stepFills = {
    1: '25%',
    2: '50%',
    3: '75%',
    4: '100%'
  };

  if (progressTitle) progressTitle.textContent = stepLabels[step] || `Paso ${step} de 4`;
  if (progressFill) progressFill.style.width = stepFills[step] || '25%';

  // Botón "Empezar de nuevo" visible solo en pasos 2 y 3
  if (resetBtn) {
    resetBtn.style.display = (step === 2 || step === 3) ? 'inline-block' : 'none';
  }

  // 3. Tarjetas Resumen Anteriores (Cita Suite pattern)
  const serviceChip = document.getElementById('csSelectedServiceCard');
  const dateChip = document.getElementById('csSelectedDateCard');

  // Chip de Servicio visible en paso 2 y paso 3
  if (serviceChip) {
    serviceChip.style.display = (step === 2 || step === 3) ? 'flex' : 'none';
  }

  // Chip de Día y Horario visible en paso 3
  if (dateChip) {
    dateChip.style.display = (step === 3) ? 'flex' : 'none';
  }

  updateCitaSuiteSummaryCards();

  // Scroll suave al inicio del modal
  const modal = document.getElementById('bookingModal');
  if (modal) modal.scrollTop = 0;
  const dialog = document.querySelector('.modal-dialog--cita-suite');
  if (dialog) dialog.scrollTop = 0;
}

function openBookingModal(preselectedServiceId = null) {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  if (preselectedServiceId) {
    selectedBookingServiceId = Number(preselectedServiceId);
  }

  renderBookingServiceOptions();
  renderCitaSuiteDays();
  renderCitaSuiteSlots();

  modal.classList.add('active');
  goToBookingStep(1);
}

function renderBookingServiceOptions() {
  const container = document.getElementById('bookingServiceOptions');
  if (!container) return;

  container.innerHTML = '';

  appState.services.filter(s => s.active).forEach(s => {
    const isSelected = s.id === selectedBookingServiceId;
    const card = document.createElement('div');
    card.className = `cs-service-card ${isSelected ? 'selected' : ''}`;
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="cs-service-card-title">${s.title}</div>
      <div class="cs-service-card-meta">
        <span>${s.duration}</span>
        <span class="sep">·</span>
        <strong>${s.price}</strong>
      </div>
      ${s.shortDesc ? `<p class="cs-service-card-desc">${s.shortDesc}</p>` : ''}
    `;

    card.addEventListener('click', () => {
      selectedBookingServiceId = s.id;
      document.querySelectorAll('.cs-service-card').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-checked', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-checked', 'true');

      updateCitaSuiteSummaryCards();

      // Transición fluida al paso 2 como en Cita Suite
      setTimeout(() => {
        goToBookingStep(2);
      }, 120);
    });

    container.appendChild(card);
  });
}

function renderCitaSuiteDays() {
  const container = document.getElementById('csDaysList');
  if (!container) return;

  container.innerHTML = '';

  const visibleDays = showAllDays ? appointmentDays : appointmentDays.slice(0, 5);

  visibleDays.forEach(day => {
    const isSelected = day.id === selectedBookingDayId;
    const dayCard = document.createElement('div');
    dayCard.className = `cs-day-card ${isSelected ? 'selected' : ''}`;
    dayCard.setAttribute('role', 'button');
    dayCard.setAttribute('tabindex', '0');

    dayCard.innerHTML = `
      <div class="cs-day-card-left">
        <strong>${day.label}</strong>
        <span>Horarios disponibles</span>
      </div>
      <svg class="cs-day-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    `;

    dayCard.addEventListener('click', () => {
      selectedBookingDayId = day.id;
      document.querySelectorAll('.cs-day-card').forEach(c => c.classList.remove('selected'));
      dayCard.classList.add('selected');

      const slotsPanel = document.getElementById('csSlotsPanel');
      if (slotsPanel) {
        slotsPanel.style.display = 'block';
        setTimeout(() => {
          slotsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 60);
      }

      renderCitaSuiteSlots();
      updateCitaSuiteSummaryCards();
    });

    container.appendChild(dayCard);
  });

  // Botón "Ver más días"
  const moreBtn = document.createElement('button');
  moreBtn.type = 'button';
  moreBtn.className = 'cs-btn-more-days';
  moreBtn.textContent = showAllDays ? 'Ver menos días' : 'Ver más días';
  moreBtn.addEventListener('click', () => {
    showAllDays = !showAllDays;
    renderCitaSuiteDays();
  });
  container.appendChild(moreBtn);

  // Asegurar que el panel de horarios esté visible para el día seleccionado
  const slotsPanel = document.getElementById('csSlotsPanel');
  if (slotsPanel) slotsPanel.style.display = 'block';
}

function renderCitaSuiteSlots() {
  const container = document.getElementById('timeSlotsGrid');
  const header = document.getElementById('csSlotsHeader');
  const nextBtn = document.getElementById('btnNextToStep3');
  if (!container) return;

  const currentDay = getSelectedBookingDay();
  if (header) {
    header.textContent = `Horarios disponibles para ${currentDay.shortDate}`;
  }

  container.innerHTML = '';

  // Si el horario seleccionado no está en la lista de este día, tomamos el primero
  if (!currentDay.slots.includes(selectedBookingTime)) {
    selectedBookingTime = currentDay.slots[0] || '15:30';
  }

  currentDay.slots.forEach(slot => {
    const isSelected = slot === selectedBookingTime;
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = `cs-time-pill ${isSelected ? 'selected' : ''}`;
    pill.textContent = slot;

    pill.addEventListener('click', () => {
      selectedBookingTime = slot;
      document.querySelectorAll('.cs-time-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');

      if (nextBtn) nextBtn.disabled = false;
      updateCitaSuiteSummaryCards();

      // Transición fluida a Paso 3 (Tus datos) como en Cita Suite
      setTimeout(() => {
        goToBookingStep(3);
      }, 160);
    });

    container.appendChild(pill);
  });

  if (nextBtn) nextBtn.disabled = !selectedBookingTime;
}

function initBookingWizard() {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBookingModalBtn');
  const openButtons = document.querySelectorAll('.open-booking-modal-btn');

  openButtons.forEach(b => {
    b.addEventListener('click', () => openBookingModal());
  });

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Selector de Modalidad (Presencial / Virtual) en Paso 1
  const pillPresencial = document.getElementById('csModalityPillPresencial');
  const pillOnline = document.getElementById('csModalityPillOnline');

  pillPresencial?.addEventListener('click', () => {
    selectedBookingModality = 'presencial';
    pillPresencial.classList.add('active');
    pillOnline?.classList.remove('active');
    const radio = pillPresencial.querySelector('input');
    if (radio) radio.checked = true;
    updateCitaSuiteSummaryCards();
  });

  pillOnline?.addEventListener('click', () => {
    selectedBookingModality = 'online';
    pillOnline.classList.add('active');
    pillPresencial?.classList.remove('active');
    const radio = pillOnline.querySelector('input');
    if (radio) radio.checked = true;
    updateCitaSuiteSummaryCards();
  });

  // Botón "Empezar de nuevo" (Paso 2 y 3)
  document.getElementById('csBtnResetBooking')?.addEventListener('click', () => {
    goToBookingStep(1);
  });

  // Botones "Cambiar" en las tarjetas de resumen
  document.getElementById('csBtnChangeService')?.addEventListener('click', () => {
    goToBookingStep(1);
  });

  document.getElementById('csBtnChangeDate')?.addEventListener('click', () => {
    goToBookingStep(2);
  });

  // Botones de navegación interna
  document.getElementById('btnBackToStep1')?.addEventListener('click', () => goToBookingStep(1));
  document.getElementById('btnNextToStep3')?.addEventListener('click', () => {
    updateCitaSuiteSummaryCards();
    goToBookingStep(3);
  });
  document.getElementById('btnBackToStep2')?.addEventListener('click', () => goToBookingStep(2));

  // Paso 3: Confirmación de reserva
  document.getElementById('btnConfirmBooking')?.addEventListener('click', () => {
    const nameInput = document.getElementById('patientFullName');
    const phoneInput = document.getElementById('patientWhatsApp');
    const emailInput = document.getElementById('patientEmail');
    const reasonInput = document.getElementById('patientReason');
    const notesInput = document.getElementById('patientClinicalNotes');
    const hasLabsInput = document.querySelector('input[name="hasLabs"]:checked');

    let isValid = true;

    if (!nameInput?.value.trim()) {
      nameInput?.closest('.form-group')?.classList.add('has-error');
      isValid = false;
    } else {
      nameInput?.closest('.form-group')?.classList.remove('has-error');
    }

    if (!phoneInput?.value.trim() || phoneInput.value.trim().length < 6) {
      phoneInput?.closest('.form-group')?.classList.add('has-error');
      isValid = false;
    } else {
      phoneInput?.closest('.form-group')?.classList.remove('has-error');
    }

    if (emailInput?.value.trim() && !emailInput.value.includes('@')) {
      emailInput?.closest('.form-group')?.classList.add('has-error');
      isValid = false;
    } else {
      emailInput?.closest('.form-group')?.classList.remove('has-error');
    }

    if (!isValid) {
      showToast('Por favor completá nombre y teléfono para agendarte.', 'info');
      return;
    }

    const service = getSelectedBookingService();
    const day = getSelectedBookingDay();
    const modalityText = getBookingModalityText();

    const pName = nameInput.value.trim();
    const pPhone = phoneInput.value.trim();
    const pEmail = emailInput?.value.trim() || '';
    const pReason = reasonInput?.value.trim() || 'Consulta clínica general';
    const pNotes = notesInput?.value.trim() || 'Sin medicación informada';
    const pLabs = hasLabsInput?.value || 'no';

    const formattedDate = `${day.dayName}, ${day.dayNumber} de ${day.monthName} de ${day.year}`;

    // 1. Llenar Tarjeta de Confirmación de Cita Suite (Paso 4)
    const confDateLine = document.getElementById('csConfDateLine');
    const confDetailLine = document.getElementById('csConfDetailLine');
    if (confDateLine) {
      confDateLine.textContent = `Te esperamos el ${day.dayName}, ${day.dayNumber} de ${day.monthName} a las ${selectedBookingTime}.`;
    }
    if (confDetailLine) {
      confDetailLine.textContent = `${service.title} · ${modalityText}`;
    }

    // Compatibilidad retroactiva con elementos legacy
    const confService = document.getElementById('confService');
    const confDateTime = document.getElementById('confDateTime');
    const confModality = document.getElementById('confModality');
    const confPatientName = document.getElementById('confPatientName');
    if (confService) confService.textContent = service.title;
    if (confDateTime) confDateTime.textContent = `${formattedDate} · ${selectedBookingTime} hs`;
    if (confModality) confModality.textContent = modalityText;
    if (confPatientName) confPatientName.textContent = pName;

    // 2. Registrar en la base de datos de turnos (Cita Suite Store)
    const aptKey = 'paciente_' + Date.now();
    const newApt = {
      id: 'apt-' + Date.now(),
      key: aptKey,
      time: `${selectedBookingTime} hs`,
      date: `${day.label}`,
      name: pName,
      email: pEmail,
      phone: pPhone,
      serviceId: service.id,
      serviceName: service.title,
      modality: modalityText,
      status: 'Nuevo desde la web',
      isNew: true,
      reason: pReason,
      notes: pNotes,
      hasLabs: pLabs
    };

    appState.appointments.unshift(newApt);
    appState.selectedPatientKey = aptKey;

    // 3. Sincronizar Agenda Admin y Simulador de Notificaciones
    renderAdminAgenda();
    renderAdminPatients();
    updateNotificationDevices(newApt);

    // 4. Avanzar al Paso 4
    goToBookingStep(4);
    showToast(`✓ Turno reservado para ${pName}`, 'success');
  });

  // Paso 4: Botón Copiar detalles del turno
  document.getElementById('csBtnCopyDetails')?.addEventListener('click', () => {
    const service = getSelectedBookingService();
    const day = getSelectedBookingDay();
    const modalityText = getBookingModalityText();
    const pName = document.getElementById('patientFullName')?.value.trim() || 'Paciente';

    const text = [
      `TURNO RESERVADO · CONSULTORIO DRA. NATALIA FRUTOS`,
      `Profesional: Dra. Natalia Soledad Frutos (MP 15.824)`,
      `Servicio: ${service.title}`,
      `Modalidad: ${modalityText}`,
      `Fecha y hora: ${day.label} a las ${selectedBookingTime} hs`,
      `Paciente: ${pName}`,
      `Consultorio: Santa Fe Capital`,
      `WhatsApp de contacto: +54 9 342 555-1234`
    ].join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Detalles del turno copiados al portapapeles', 'success');
      }).catch(() => {
        showToast('Detalles del turno listos para compartir', 'info');
      });
    } else {
      showToast('Detalles del turno listos para compartir', 'info');
    }
  });

  document.getElementById('btnCloseConfirm')?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  document.getElementById('btnGoToNotifSimulation')?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.getElementById('dockBtnNotif')?.click();
    showToast('Recordatorio comprobado para este dispositivo', 'success');
  });

  document.getElementById('btnGoToAdminCalendar')?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.getElementById('dockBtnAdmin')?.click();
  });
}

/* ==========================================================================
   BLOG READER MODAL
   ========================================================================== */
const blogArticles = {
  1: {
    title: 'Dormir bien no empieza cuando apoyás la cabeza en la almohada',
    category: 'Sueño & Cronobiología',
    serviceTarget: 3,
    content: `
      <p class="lead">Muchas veces pensamos que dormir es un interruptor que apagamos de noche. Pero en realidad, el descanso de calidad se construye con las señales que le damos al cuerpo a lo largo de todo el día.</p>
      
      <h4>1. La luz de la mañana es el sincronizador principal</h4>
      <p>El núcleo supraquiasmático —nuestro reloj biológico central— necesita recibir luz natural en las primeras horas tras despertar. Esa señal frena la producción de melatonina y programa el pico de cortisol para el arranque, asegurando que 14 a 16 horas después el cuerpo vuelva a liberar melatonina de forma natural.</p>

      <h4>2. Pantallas, cafeína y la ilusión del agotamiento</h4>
      <p>Cuando trabajamos hasta tarde bajo luces frías o con el celular en la cama, le estamos enviando al cerebro la señal biológica de que sigue siendo mediodía. Por eso, antes de pensar en suplementos o inductores del sueño, siempre conviene revisar los hábitos de base: horarios regulares, desconexión gradual y una cena que no sobrecargue la digestión.</p>

      <h4>3. El sueño no se negocia</h4>
      <p>Dormir bien no es un lujo ni un premio al final de una semana agotadora: es la base sobre la que funcionan el sistema inmune, la claridad mental y el equilibrio metabólico.</p>
    `
  },
  2: {
    title: 'Cuando el estrés deja de ser un momento y pasa a ser la rutina',
    category: 'Medicina del Estrés & PNIE',
    serviceTarget: 1,
    content: `
      <p class="lead">"Vivo apagando incendios." Es una de las frases que más escucho en la consulta. Al principio parece que el cuerpo se la banca, hasta que un día empieza a pasar factura.</p>
      
      <h4>El modo supervivencia</h4>
      <p>El estrés agudo es un mecanismo evolutivo brillante: prepara al cuerpo para huir o pelear. Pero cuando las demandas se vuelven crónicas, el sistema nervioso queda trabado en modo supervivencia.</p>
      
      <h4>¿Qué se resiente primero?</h4>
      <p>El cuerpo es sabio: para sostener la alerta, ahorra energía en funciones que considera no indispensables para el minuto siguiente. Por eso los primeros síntomas suelen ser digestivos (hinchazón, cambios en el ritmo evacuatorio), hormonales (ciclos irregulares, caída de libido) o del sistema inmune (infecciones recurrentes o alergias).</p>

      <h4>Escuchar antes de que grite</h4>
      <p>Aprender a registrar estas señales a tiempo no es para alarmarse, sino para frenar la inercia y diseñar intervenciones que tengan sentido para cada persona.</p>
    `
  },
  3: {
    title: 'Somos un universo de conexiones',
    category: 'Medicina Integrativa',
    serviceTarget: 1,
    content: `
      <p class="lead">El cuerpo no funciona por partes ni en compartimentos estancos. Sin embargo, muchas personas pasan años saltando de especialista en especialista tratando cada síntoma por separado.</p>
      
      <h4>El síntoma es sólo el mensajero</h4>
      <p>Una migraña recurrente puede tener su origen en un desequilibrio de la microbiota intestinal. Un insomnio persistente puede estar alimentado por una desregulación del eje adrenal o por déficits subclínicos de magnesio y vitamina D.</p>
      
      <h4>Una mirada que une las piezas</h4>
      <p>La medicina integrativa no busca reemplazar la evidencia médica ni hacer promesas mágicas. Busca detenerse, escuchar la historia completa, analizar el laboratorio con criterio funcional y construir un plan que la persona realmente pueda sostener en su vida cotidiana.</p>
    `
  }
};

let currentArticleTargetService = 1;

function initBlogReader() {
  const modal = document.getElementById('blogReaderModal');
  const closeBtn = document.getElementById('closeBlogReaderBtn');
  const closeFooterBtn = document.getElementById('btnCloseBlogReaderFooter');
  const bookBtn = document.getElementById('btnBookFromArticle');

  window.openBlogReader = function(id) {
    const art = blogArticles[id];
    if (!art) return;

    currentArticleTargetService = art.serviceTarget || 1;
    document.getElementById('blogReaderTitle').textContent = art.title;
    document.getElementById('blogReaderCategory').textContent = art.category;
    document.getElementById('blogReaderBody').innerHTML = art.content;

    modal?.classList.add('active');
  };

  [closeBtn, closeFooterBtn].forEach(b => {
    b?.addEventListener('click', () => modal?.classList.remove('active'));
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  bookBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
    openBookingModal(currentArticleTargetService);
  });
}

/* ==========================================================================
   VIRTUAL CLASSROOM / LMS (HOTMART STYLE PLAYER)
   ========================================================================== */
function initVirtualClassroomLMS() {
  // Tabs switcher
  const tabBtns = document.querySelectorAll('.lms-tab-btn');
  const discussionTab = document.getElementById('tabContentDiscussion');
  const materialsTab = document.getElementById('tabContentMaterials');
  const summaryTab = document.getElementById('tabContentSummary');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const tab = btn.dataset.lmstab;
      if (discussionTab) discussionTab.hidden = (tab !== 'discussion');
      if (materialsTab) materialsTab.hidden = (tab !== 'materials');
      if (summaryTab) summaryTab.hidden = (tab !== 'summary');
    });
  });

  // Video simulation
  const playBtn = document.getElementById('btnTogglePlaySim');
  const playBtnSmall = document.getElementById('btnPlayPauseSmall');
  const progressFill = document.getElementById('videoProgressFill');
  const progressBar = document.getElementById('videoProgressBar');
  const timeDisplay = document.getElementById('videoTimeDisplay');
  const speedBtn = document.getElementById('speedBtn');
  let progressInterval = null;

  function togglePlay() {
    appState.lms.isPlaying = !appState.lms.isPlaying;
    const label = document.getElementById('playBtnLabel');

    if (appState.lms.isPlaying) {
      if (label) label.textContent = 'Pausar';
      if (playBtnSmall) {
        playBtnSmall.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
      }

      progressInterval = setInterval(() => {
        appState.lms.currentSeconds += Math.round(appState.lms.speed);
        if (appState.lms.currentSeconds >= appState.lms.totalSeconds) {
          appState.lms.currentSeconds = appState.lms.totalSeconds;
          togglePlay();
        }
        updateTimeUI();
      }, 1000);
    } else {
      if (label) label.textContent = 'Reproducir';
      if (playBtnSmall) {
        playBtnSmall.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="7 4 19 12 7 20"/></svg>';
      }
      clearInterval(progressInterval);
    }
  }

  function updateTimeUI() {
    const mins = Math.floor(appState.lms.currentSeconds / 60);
    const secs = appState.lms.currentSeconds % 60;
    const totalMins = Math.floor(appState.lms.totalSeconds / 60);
    const totalSecs = appState.lms.totalSeconds % 60;

    if (timeDisplay) {
      timeDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} / ${totalMins}:${totalSecs.toString().padStart(2, '0')}`;
    }

    const percent = Math.min((appState.lms.currentSeconds / appState.lms.totalSeconds) * 100, 100);
    if (progressFill) {
      progressFill.style.width = `${percent}%`;
    }
  }

  playBtn?.addEventListener('click', togglePlay);
  playBtnSmall?.addEventListener('click', togglePlay);

  progressBar?.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    appState.lms.currentSeconds = Math.round(ratio * appState.lms.totalSeconds);
    updateTimeUI();
    showToast(`Posición: ${Math.floor(appState.lms.currentSeconds / 60)}:${(appState.lms.currentSeconds % 60).toString().padStart(2, '0')}`, 'info');
  });

  if (speedBtn) {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    let speedIdx = 0;
    speedBtn.addEventListener('click', () => {
      speedIdx = (speedIdx + 1) % speeds.length;
      appState.lms.speed = speeds[speedIdx];
      speedBtn.textContent = `${appState.lms.speed}x`;
      showToast(`Velocidad: ${appState.lms.speed}x`, 'info');
    });
  }

  // Mark Completed
  const btnMark = document.getElementById('btnMarkCompleted');
  btnMark?.addEventListener('click', () => {
    appState.lms.isCurrentLessonCompleted = !appState.lms.isCurrentLessonCompleted;

    const ring = document.getElementById('lmsRing');
    const label = document.getElementById('lmsProgressLabel');
    const count = document.getElementById('lmsProgressCount');
    const bar = document.getElementById('lmsProgressBar');
    const activeItem = document.getElementById('activeLessonItem');

    if (appState.lms.isCurrentLessonCompleted) {
      btnMark.textContent = '✓ Vista';
      btnMark.classList.remove('btn-secondary');
      btnMark.classList.add('btn-primary');
      if (activeItem) activeItem.classList.add('completed');
      if (ring) ring.style.setProperty('--p', '50');
      if (label) label.textContent = '50% completado';
      if (count) count.textContent = '50% · 6/12';
      if (bar) bar.style.width = '50%';
      showToast('Lección 2.3 completada con éxito', 'success');
    } else {
      btnMark.textContent = 'Marcar como vista';
      btnMark.classList.remove('btn-primary');
      btnMark.classList.add('btn-secondary');
      if (activeItem) activeItem.classList.remove('completed');
      if (ring) ring.style.setProperty('--p', '42');
      if (label) label.textContent = '42% completado';
      if (count) count.textContent = '42% · 5/12';
      if (bar) bar.style.width = '42%';
      showToast('Lección marcada como pendiente', 'info');
    }
  });

  // Next Lesson
  document.getElementById('btnNextLesson')?.addEventListener('click', () => {
    const titleEl = document.getElementById('currentLessonTitle');
    const headTitle = document.getElementById('lessonHeadTitle');
    if (titleEl) titleEl.textContent = 'Pantallas a la noche: el impacto de la luz azul';
    if (headTitle) headTitle.textContent = 'Lección 2.4 · Pantallas a la noche';
    appState.lms.currentSeconds = 0;
    updateTimeUI();
    showToast('Avanzaste a la Lección 2.4', 'info');
  });

  // Download buttons
  document.querySelectorAll('[data-download]')?.forEach(btn => {
    btn.addEventListener('click', () => {
      const fileName = btn.dataset.download;
      showToast(`Descargando "${fileName}" (PDF)...`, 'info');
    });
  });

  // Comments in discussion
  const publishBtn = document.getElementById('btnPublishComment');
  const commentInput = document.getElementById('newCommentInput');
  const feed = document.getElementById('commentsFeed');

  // Auto-grow textarea while typing (140px initial, max 300px)
  if (commentInput) {
    const autoGrow = () => {
      commentInput.style.height = 'auto';
      const scrollH = commentInput.scrollHeight;
      const targetH = Math.min(Math.max(scrollH, 140), 300);
      commentInput.style.height = `${targetH}px`;
    };
    commentInput.addEventListener('input', autoGrow);
  }

  publishBtn?.addEventListener('click', () => {
    const rawText = commentInput?.value.trim();
    if (!rawText) {
      showToast('Escribí tu pregunta antes de publicar.', 'info');
      return;
    }

    const safeText = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '<br>');

    const card = document.createElement('div');
    card.className = 'comment-card';
    card.innerHTML = `
      <div class="comment-header">
        <div class="comment-author-info">
          <span class="comment-avatar me">MR</span>
          <div>
            <h5>Marcos Rodríguez (Vos)</h5>
            <span class="when">Recién publicado · Módulo 2</span>
          </div>
        </div>
        <span class="comment-mod">Lección 2.3</span>
      </div>
      <p class="comment-body">${safeText}</p>
    `;

    feed?.prepend(card);
    if (commentInput) {
      commentInput.value = '';
      commentInput.style.height = '140px';
    }

    // Update count in tab badge
    const countEl = document.querySelector('.lms-tab-btn[data-lmstab="discussion"] .count');
    if (countEl) {
      const current = parseInt(countEl.textContent.trim(), 10) || 3;
      countEl.textContent = String(current + 1);
    }

    showToast('✓ Pregunta publicada en la lección', 'success');

    // Simulated response from Dra. Natalia Frutos
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'instructor-reply-card';
      reply.innerHTML = `
        <div class="who">
          <span class="mini-mono" aria-hidden="true">NF</span>
          <strong>Natalia</strong>
          <span class="instructor-badge">DOCENTE</span>
          <span class="when">Hace unos segundos</span>
        </div>
        <p class="reply-body">¡Hola Marcos! Muy buen punto. Para regular los ritmos biológicos, incluso en días nublados la intensidad lumínica exterior es mucho mayor que la luz de interior. Con 15 minutos en el balcón o caminando al aire libre alcanza para enviar la señal correcta al hipotálamo.</p>
      `;
      card.appendChild(reply);
      showToast('💬 Natalia respondió a tu consulta', 'info');
    }, 1800);
  });
}

/* ==========================================================================
   NOTIFICATIONS SIMULATOR
   ========================================================================== */
function initNotificationsSimulator() {
  document.getElementById('btnAndroidConfirm')?.addEventListener('click', () => {
    const apt = appState.appointments.find(a => a.key === appState.selectedPatientKey) || appState.appointments[0];
    if (apt) {
      apt.status = 'Confirmado';
      renderAdminAgenda();
      showToast(`¡Asistencia de ${apt.name} confirmada!`, 'success');
    }
  });

  document.getElementById('btnAndroidReschedule')?.addEventListener('click', () => {
    document.getElementById('btnAdminOpenReschedule')?.click();
  });

  document.getElementById('btnAndroidMaps')?.addEventListener('click', () => {
    showToast('Abriendo ubicación del consultorio en Google Maps...', 'info');
  });

  document.getElementById('btnIosRoute')?.addEventListener('click', () => {
    showToast('Turno añadido a Apple Calendar y recordatorio programado.', 'success');
  });

  // WhatsApp quick chips
  const chips = document.querySelectorAll('.wa-chip-btn');
  const feed = document.getElementById('waMessagesFeed');
  const waContainer = document.getElementById('waChatContainer');

  const botResponses = {
    'Confirmo asistencia': '¡Excelente! Tu asistencia quedó confirmada. Te esperamos 5 minutos antes.',
    '¿Llevo mis análisis?': '¡Sí, por favor! Traé cualquier estudio de sangre o imágenes de los últimos 6-12 meses. Siempre aportan información valiosa.',
    'Necesito reprogramar': 'No te preocupes. Escribinos qué días y horarios te convienen y coordinamos un nuevo espacio.',
    '¿Cómo se abona?': 'Podés abonar por transferencia bancaria, Mercado Pago o en efectivo al finalizar la consulta.'
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.dataset.reply;
      if (!text || !feed) return;

      const out = document.createElement('div');
      out.className = 'whatsapp-outgoing-bubble';
      out.style.cssText = 'background: #DCF8C6; padding: 10px 14px; border-radius: 12px 12px 0 12px; margin: 8px 0 8px auto; max-width: 80%; font-size: 0.88rem; box-shadow: 0 1px 2px rgba(0,0,0,0.1); color: #111;';
      out.innerHTML = `<div>${text}</div><div style="font-size: 0.68rem; text-align: right; opacity: 0.7; margin-top: 2px;">Ahora ✓✓</div>`;
      feed.appendChild(out);

      if (waContainer) waContainer.scrollTop = waContainer.scrollHeight;

      setTimeout(() => {
        const replyText = botResponses[text] || 'Mensaje recibido. En breve te respondemos.';
        const inc = document.createElement('div');
        inc.className = 'whatsapp-incoming-bubble';
        inc.innerHTML = `
          <h4 style="font-size: 0.8rem; color: #075E54; margin-bottom: 2px;">Consultorio Dra. Frutos</h4>
          <p style="margin: 0; font-size: 0.88rem; line-height: 1.4;">${replyText}</p>
          <div class="wa-time" style="font-size: 0.68rem; text-align: right; opacity: 0.7; margin-top: 2px;">Ahora</div>
        `;
        feed.appendChild(inc);
        if (waContainer) waContainer.scrollTop = waContainer.scrollHeight;
        showToast('Respuesta automática de WhatsApp recibida', 'info');
      }, 900);
    });
  });
}

function updateNotificationDevices(apt) {
  const firstName = apt.name.split(' ')[0];

  const androidText = document.getElementById('androidNotifText');
  if (androidText) {
    androidText.innerHTML = `Hola ${firstName}, te espero el <strong>${apt.date} a las ${apt.time}</strong> para tu ${apt.serviceName}.`;
  }

  const iosDesc = document.getElementById('iosNotifDesc');
  if (iosDesc) {
    iosDesc.textContent = `${apt.date} · ${apt.time} — ${apt.serviceName} (${apt.modality}).`;
  }

  const waBody = document.getElementById('waNotifBody');
  if (waBody) {
    waBody.innerHTML = `¡Hola ${firstName}! Te recuerdo tu turno:<br>• <strong>Día:</strong> ${apt.date}, ${apt.time}<br>• <strong>Consulta:</strong> ${apt.serviceName}<br>• <strong>Modalidad:</strong> ${apt.modality}`;
  }
}

/* ==========================================================================
   ADMIN PANEL & CITA SUITE
   ========================================================================== */
function initAdminPanel() {
  const navAgenda = document.getElementById('adminNavAgenda');
  const navPatients = document.getElementById('adminNavPatients');
  const navServices = document.getElementById('adminNavServices');

  const tabAgenda = document.getElementById('adminTabContentAgenda');
  const tabPatients = document.getElementById('adminTabContentPatients');
  const tabServices = document.getElementById('adminTabContentServices');

  function selectTab(activeNav, activeTab) {
    [navAgenda, navPatients, navServices].forEach(n => n?.classList.remove('active'));
    [tabAgenda, tabPatients, tabServices].forEach(t => {
      if (t) t.hidden = true;
    });

    activeNav?.classList.add('active');
    if (activeTab) activeTab.hidden = false;
  }

  navAgenda?.addEventListener('click', () => {
    selectTab(navAgenda, tabAgenda);
    renderAdminAgenda();
  });

  navPatients?.addEventListener('click', () => {
    selectTab(navPatients, tabPatients);
    renderAdminPatients();
  });

  navServices?.addEventListener('click', () => {
    selectTab(navServices, tabServices);
    renderAdminServices();
  });

  // Drawer status selector
  const statusSelect = document.getElementById('adminDrawerStatusSelect');
  statusSelect?.addEventListener('change', (e) => {
    const apt = appState.appointments.find(a => a.key === appState.selectedPatientKey);
    if (apt) {
      apt.status = e.target.value;
      renderAdminAgenda();
      showToast(`Estado de ${apt.name} actualizado a: "${apt.status}"`, 'info');
    }
  });

  // Resend reminder
  document.getElementById('btnAdminResendReminder')?.addEventListener('click', () => {
    const apt = appState.appointments.find(a => a.key === appState.selectedPatientKey);
    const pName = apt ? apt.name : 'el paciente';
    showToast(`✓ Recordatorio reenviado a ${pName} vía WhatsApp y correo`, 'success');
  });

  // Reschedule Modal
  const reschedModal = document.getElementById('adminRescheduleModal');
  const openReschedBtn = document.getElementById('btnAdminOpenReschedule');
  const closeReschedBtn = document.getElementById('closeAdminRescheduleBtn');
  const cancelReschedBtn = document.getElementById('btnCancelReschedule');
  const confirmReschedBtn = document.getElementById('btnConfirmReschedule');

  openReschedBtn?.addEventListener('click', () => {
    const apt = appState.appointments.find(a => a.key === appState.selectedPatientKey);
    const nameLabel = document.getElementById('reschedulePatientName');
    if (nameLabel && apt) nameLabel.textContent = apt.name;
    reschedModal?.classList.add('active');
  });

  [closeReschedBtn, cancelReschedBtn].forEach(b => {
    b?.addEventListener('click', () => reschedModal?.classList.remove('active'));
  });

  confirmReschedBtn?.addEventListener('click', () => {
    const newDay = document.getElementById('rescheduleDaySelect')?.value;
    const newTime = document.getElementById('rescheduleTimeSelect')?.value;
    const apt = appState.appointments.find(a => a.key === appState.selectedPatientKey);

    if (apt) {
      apt.date = newDay;
      apt.time = `${newTime} hs`;
      renderAdminAgenda();
      updateNotificationDevices(apt);
      reschedModal?.classList.remove('active');
      showToast(`✓ Turno de ${apt.name} reprogramado para ${newDay} a las ${newTime} hs`, 'success');
    }
  });

  // Block slot Modal
  const blockModal = document.getElementById('adminBlockModal');
  const openBlockBtn = document.getElementById('btnAdminOpenBlockSlot');
  const closeBlockBtn = document.getElementById('closeAdminBlockBtn');
  const cancelBlockBtn = document.getElementById('btnCancelBlock');
  const confirmBlockBtn = document.getElementById('btnConfirmBlock');

  openBlockBtn?.addEventListener('click', () => blockModal?.classList.add('active'));
  [closeBlockBtn, cancelBlockBtn].forEach(b => {
    b?.addEventListener('click', () => blockModal?.classList.remove('active'));
  });

  confirmBlockBtn?.addEventListener('click', () => {
    const time = document.getElementById('blockTimeSelect')?.value || '13:00';
    const reason = document.getElementById('blockReasonInput')?.value.trim() || 'Pausa médica';

    const blocked = {
      id: 'blocked-' + Date.now(),
      key: 'blocked_' + Date.now(),
      time: `${time} hs`,
      date: 'Jueves 15 de Octubre',
      name: `🔒 ${reason}`,
      email: 'consultorio@citasuite.com',
      phone: '-',
      serviceId: 0,
      serviceName: 'Horario Bloqueado',
      modality: 'No disponible en la web',
      status: 'Cancelado',
      isNew: false,
      reason: reason,
      notes: 'Espacio bloqueado para tareas clínicas o descanso médico.'
    };

    appState.appointments.push(blocked);
    appState.appointments.sort((a, b) => a.time.localeCompare(b.time));
    renderAdminAgenda();
    blockModal?.classList.remove('active');
    showToast(`✓ Horario bloqueado a las ${time} hs (${reason})`, 'info');
  });

  // Edit Service Modal
  const editModal = document.getElementById('adminEditServiceModal');
  const closeEditBtn = document.getElementById('closeAdminEditServiceBtn');
  const cancelEditBtn = document.getElementById('btnCancelEditService');
  const saveEditBtn = document.getElementById('btnSaveServiceChanges');

  [closeEditBtn, cancelEditBtn].forEach(b => {
    b?.addEventListener('click', () => editModal?.classList.remove('active'));
  });

  saveEditBtn?.addEventListener('click', () => {
    const id = parseInt(document.getElementById('editServiceId')?.value, 10);
    const s = appState.services.find(item => item.id === id);
    if (!s) return;

    s.title = document.getElementById('editServiceTitle')?.value.trim() || s.title;
    s.price = document.getElementById('editServicePrice')?.value.trim() || s.price;
    s.duration = document.getElementById('editServiceDuration')?.value.trim() || s.duration;
    s.description = document.getElementById('editServiceDesc')?.value.trim() || s.description;

    renderAdminServices();
    renderPublicServices();
    renderFooterServices();
    editModal?.classList.remove('active');
    showToast(`✓ Cambios en "${s.title}" publicados en el sitio`, 'success');
  });

  // New Service Modal
  const newModal = document.getElementById('adminNewServiceModal');
  const openNewBtn = document.getElementById('btnAdminOpenNewService');
  const closeNewBtn = document.getElementById('closeAdminNewServiceBtn');
  const cancelNewBtn = document.getElementById('btnCancelNewService');
  const saveNewBtn = document.getElementById('btnSaveNewService');

  openNewBtn?.addEventListener('click', () => newModal?.classList.add('active'));
  [closeNewBtn, cancelNewBtn].forEach(b => {
    b?.addEventListener('click', () => newModal?.classList.remove('active'));
  });

  saveNewBtn?.addEventListener('click', () => {
    const title = document.getElementById('newServiceTitle')?.value.trim();
    const price = document.getElementById('newServicePrice')?.value.trim() || '$30.000 ARS';
    const duration = document.getElementById('newServiceDuration')?.value.trim() || '60 min';
    const desc = document.getElementById('newServiceDesc')?.value.trim() || 'Consulta médica especializada.';

    if (!title) {
      showToast('Por favor ingresá el nombre de la consulta', 'info');
      return;
    }

    const newId = appState.services.length + 1;
    appState.services.push({
      id: newId,
      slug: 'servicio-' + newId,
      title: title,
      modality: 'Presencial o Virtual',
      duration: duration,
      price: price,
      badge: 'Nueva consulta',
      active: true,
      description: desc,
      features: [
        `Consulta de ${duration} con la Dra. Natalia Frutos`,
        'Abordaje clínico individualizado y consensuado',
        'Historia clínica protegida en Cita Suite'
      ],
      tags: ['Nueva área', duration]
    });

    renderAdminServices();
    renderPublicServices();
    renderFooterServices();
    newModal?.classList.remove('active');
    showToast(`✓ Nueva consulta "${title}" agregada al sitio`, 'success');
  });

  // Patient CRM Search
  document.getElementById('adminPatientSearchInput')?.addEventListener('input', (e) => {
    renderAdminPatients(e.target.value.toLowerCase().trim());
  });
}

function renderAdminAgenda() {
  const list = document.getElementById('agendaAppointmentsList');
  const counter = document.getElementById('adminAppointmentsCounter');
  if (!list) return;

  if (counter) {
    counter.textContent = `${appState.appointments.length} turnos programados · Agenda activa`;
  }

  list.innerHTML = '';

  appState.appointments.forEach(apt => {
    const isSelected = apt.key === appState.selectedPatientKey;
    const card = document.createElement('div');
    card.className = `appointment-row-card ${isSelected ? 'selected' : ''}`;
    card.style.cssText = `display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 18px; border-radius: var(--r-m); border: 1px solid ${isSelected ? 'var(--accent)' : 'var(--line)'}; background: ${isSelected ? 'var(--accent-soft)' : 'var(--card)'}; cursor: pointer; margin-bottom: 8px; transition: all 0.2s ease;`;

    card.addEventListener('click', () => {
      appState.selectedPatientKey = apt.key;
      renderAdminAgenda();
      updateAdminDrawer(apt.key);
    });

    let badgeClass = 'status-confirmed';
    if (apt.status.includes('Nuevo')) badgeClass = 'status-pending';
    else if (apt.status.includes('Cancelado')) badgeClass = 'status-cancelled';

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 14px;">
        <span class="apt-time-badge" style="font-family: var(--serif); font-size: 1.15rem; font-weight: 600; color: ${isSelected ? 'var(--accent-text)' : 'var(--ink)'};">${apt.time}</span>
        <div>
          <h4 style="font-size: 0.98rem; font-weight: 600; color: var(--ink); margin: 0;">
            ${apt.name}
            ${apt.isNew ? '<span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; background: rgba(169, 75, 34, 0.15); color: var(--accent-text); margin-left: 6px; font-weight: 700;">Nuevo desde Web</span>' : ''}
          </h4>
          <span style="font-size: 0.8rem; color: var(--ink-3);">${apt.serviceName} · ${apt.modality}</span>
        </div>
      </div>
      <span class="apt-status-badge ${badgeClass}" style="font-size: 0.74rem; font-weight: 600; padding: 4px 10px; border-radius: var(--r-pill); border: 1px solid currentColor;">${apt.status}</span>
    `;

    list.appendChild(card);
  });

  updateAdminDrawer(appState.selectedPatientKey);
}

function updateAdminDrawer(key) {
  const apt = appState.appointments.find(a => a.key === key) || appState.appointments[0];
  if (!apt) return;

  const initials = apt.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();

  const avatar = document.getElementById('adminPAvatar');
  const name = document.getElementById('adminPName');
  const email = document.getElementById('adminPEmail');
  const wpBtn = document.getElementById('adminPWhatsAppBtn');
  const statusSelect = document.getElementById('adminDrawerStatusSelect');
  const reason = document.getElementById('adminPReason');
  const notes = document.getElementById('adminPNotes');

  if (avatar) avatar.textContent = initials || 'PT';
  if (name) name.textContent = apt.name;
  if (email) email.textContent = apt.email;
  if (reason) reason.textContent = `"${apt.reason}"`;
  if (notes) notes.textContent = `${apt.notes} ${apt.hasLabs === 'si' ? '· Trae análisis clínicos.' : ''}`;
  if (statusSelect) statusSelect.value = apt.status;

  if (wpBtn) {
    const clean = apt.phone.replace(/[^0-9]/g, '');
    wpBtn.href = clean ? `https://wa.me/${clean}?text=Hola%20${encodeURIComponent(apt.name)},%20te%20escribo%20del%20consultorio%20de%20la%20Dra.%20Natalia%20Frutos` : '#';
  }
}

function renderAdminPatients(searchQuery = '') {
  const tbody = document.getElementById('adminPatientsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  const filtered = appState.appointments.filter(a => {
    if (!searchQuery) return true;
    return a.name.toLowerCase().includes(searchQuery) ||
           a.email.toLowerCase().includes(searchQuery) ||
           a.phone.includes(searchQuery);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--ink-3); padding: 24px;">No se encontraron pacientes.</td></tr>`;
    return;
  }

  filtered.forEach(apt => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <strong>${apt.name}</strong><br>
        <span style="font-size: 0.78rem; color: var(--ink-3);">${apt.serviceName}</span>
      </td>
      <td>
        <span style="font-size: 0.85rem;">${apt.phone}</span><br>
        <span style="font-size: 0.76rem; color: var(--ink-3);">${apt.email}</span>
      </td>
      <td style="max-width: 220px; font-size: 0.84rem; color: var(--ink-2);">
        "${apt.reason.length > 55 ? apt.reason.substring(0, 52) + '…' : apt.reason}"
      </td>
      <td>
        <span style="font-size: 0.76rem; font-weight: 600; padding: 3px 8px; border-radius: var(--r-pill); border: 1px solid var(--line-strong);">${apt.status}</span>
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" style="font-size: 0.76rem; padding: 4px 8px;" onclick="viewPatientInAgenda('${apt.key}')">
          Ver Ficha
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.viewPatientInAgenda = function(key) {
  document.getElementById('adminNavAgenda')?.click();
  appState.selectedPatientKey = key;
  renderAdminAgenda();
};

function renderAdminServices() {
  const grid = document.getElementById('adminServicesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appState.services.forEach(s => {
    const card = document.createElement('div');
    card.className = 'admin-service-card';
    card.style.cssText = 'padding: 18px; border-radius: var(--r-m); border: 1px solid var(--line); background: var(--card); display: flex; flex-direction: column; justify-content: space-between; gap: 14px;';
    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <h4 style="font-size: 1.05rem; color: var(--ink); margin: 0;">${s.title}</h4>
          <span style="font-size: 0.72rem; padding: 2px 8px; border-radius: var(--r-pill); font-weight: 600; ${s.active ? 'background: rgba(63, 107, 58, 0.15); color: var(--ok);' : 'background: rgba(156, 54, 38, 0.15); color: var(--stop);'}">
            ${s.active ? 'Activo' : 'Pausado'}
          </span>
        </div>
        <p style="font-size: 0.84rem; color: var(--ink-2); line-height: 1.45; margin-bottom: 10px;">${s.description}</p>
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--ink);">
          ${s.price} <span style="font-size: 0.76rem; font-weight: 400; color: var(--ink-3);">· ${s.duration}</span>
        </div>
        <div style="font-size: 0.76rem; color: var(--ink-3); margin-top: 2px;">${s.modality}</div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; pt-2; border-top: 1px solid var(--line); padding-top: 10px;">
        <label style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: var(--ink-2); cursor: pointer;">
          <input type="checkbox" ${s.active ? 'checked' : ''} onchange="toggleServiceActive(${s.id}, this.checked)">
          <span>Visible en Web</span>
        </label>
        <button class="btn btn-secondary btn-sm" style="font-size: 0.76rem;" onclick="openEditServiceModal(${s.id})">
          Editar Tarifa
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.toggleServiceActive = function(serviceId, isActive) {
  const s = appState.services.find(item => item.id === serviceId);
  if (s) {
    s.active = isActive;
    renderAdminServices();
    renderPublicServices();
    renderFooterServices();
    showToast(`Consulta "${s.title}" ${isActive ? 'activada' : 'pausada'} en el sitio`, 'info');
  }
};

window.openEditServiceModal = function(serviceId) {
  const s = appState.services.find(item => item.id === serviceId);
  if (!s) return;

  document.getElementById('editServiceId').value = s.id;
  document.getElementById('editServiceTitle').value = s.title;
  document.getElementById('editServicePrice').value = s.price;
  document.getElementById('editServiceDuration').value = s.duration;
  document.getElementById('editServiceDesc').value = s.description;

  document.getElementById('adminEditServiceModal')?.classList.add('active');
};

/* ==========================================================================
   CONTACT DATA BINDING
   ========================================================================== */
function bindSiteContactData() {
  const info = appState.siteInfo;

  // Year Now
  const yearEl = document.getElementById('yearNow');
  if (yearEl) yearEl.textContent = '2026';

  // Matrícula
  document.querySelectorAll('[data-site-inline="matricula"]').forEach(el => {
    el.textContent = ` · ${info.matricula}`;
  });

  // Text contents
  document.querySelectorAll('[data-site="address"]').forEach(el => {
    el.textContent = info.address;
  });
  document.querySelectorAll('[data-site="hours"]').forEach(el => {
    el.textContent = info.hours;
  });
  document.querySelectorAll('[data-site="whatsappLabel"]').forEach(el => {
    el.textContent = info.phone;
  });
  document.querySelectorAll('[data-site="email"]').forEach(el => {
    el.textContent = info.email;
  });

  // Hrefs
  document.querySelectorAll('[data-site-href="mailto"]').forEach(el => {
    el.href = `mailto:${info.email}`;
  });

  // WhatsApp links
  document.querySelectorAll('[data-wa]').forEach(el => {
    const customText = el.dataset.waText || 'Hola Natalia, quería consultarte por un turno de medicina integrativa.';
    el.href = `https://wa.me/${info.phoneClean}?text=${encodeURIComponent(customText)}`;
    el.target = '_blank';
    el.rel = 'noopener';
  });
}
