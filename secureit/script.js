/* ============================================================
   SecurIT — интерактив сайта: темы, меню, калькулятор, табы,
   аккордеоны, фильтры, слайдер, счётчики, формы, fallback фото
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Тема (светлая / тёмная) ---------- */
  const root = document.documentElement;
  const THEME_KEY = 'securit-theme';

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem(THEME_KEY, t);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(t === 'dark'));
    });
  }
  // Инициализация (inline-скрипт в <head> уже поставил тему до отрисовки)
  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-theme-toggle]');
    if (t) applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------- 2. Мобильное меню ---------- */
  const mm = document.querySelector('.mobile-menu');
  const burger = document.querySelector('[data-menu-open]');
  const mmClose = document.querySelector('[data-menu-close]');
  function menu(open) {
    if (!mm) return;
    mm.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }
  if (burger) burger.addEventListener('click', () => menu(true));
  if (mmClose) mmClose.addEventListener('click', () => menu(false));
  if (mm) mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu(false)));

  /* ---------- 3. Прогресс-бар и кнопка «наверх» ---------- */
  const progress = document.querySelector('.progress');
  const toTop = document.querySelector('.to-top');
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- 4. Появление блоков при скролле ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- 5. Анимированные счётчики ---------- */
  const counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    const target = parseFloat(el.dataset.count || '0');
    const dur = 1400, start = performance.now();
    const fmt = n => n.toLocaleString('ru-RU');
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target) + (el.dataset.suffix || '');
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
    }), { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  /* ---------- 6. Аккордеон FAQ ---------- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const body = item.querySelector('.faq-a');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    });
  });

  /* ---------- 7. Табы (услуги) ---------- */
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tabs-wrap') || document;
      group.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b === btn));
      group.querySelectorAll('.tab-panel').forEach(p =>
        p.classList.toggle('active', p.id === btn.dataset.tab));
    });
  });

  /* ---------- 8. Фильтры болей ---------- */
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll('[data-cat]').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f);
      });
    });
  });

  /* ---------- 9. Слайдер кейсов ---------- */
  document.querySelectorAll('[data-slide]').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = document.querySelector(btn.dataset.slideTarget || '.slider-track');
      if (!track) return;
      const slide = track.querySelector('.slide');
      const step = slide ? slide.getBoundingClientRect().width + 20 : track.clientWidth;
      track.scrollBy({ left: btn.dataset.slide === 'next' ? step : -step, behavior: 'smooth' });
    });
  });

  /* ---------- 10. Калькулятор стоимости SLA ---------- */
  const calc = document.getElementById('calc');
  if (calc) {
    const els = {
      cam: document.getElementById('calc-cameras'),
      bar: document.getElementById('calc-barriers'),
      skud: document.getElementById('calc-skud'),
      obj: document.getElementById('calc-objects'),
      sla: document.getElementById('calc-sla'),
      mon: document.getElementById('calc-monitor'),
      total: document.getElementById('calc-total'),
      break: document.getElementById('calc-breakdown')
    };
    const RATE = { cam: 320, bar: 850, skud: 480, objBase: 9000 };
    const SLA = { basic: { k: 1, name: 'Базовый' }, business: { k: 1.35, name: 'Бизнес' }, corporate: { k: 1.7, name: 'Корпоративный' } };

    function recalc() {
      const cam = +els.cam.value, bar = +els.bar.value, skud = +els.skud.value, obj = +els.obj.value;
      const sla = SLA[els.sla.value] || SLA.basic;
      document.getElementById('out-cameras').textContent = cam;
      document.getElementById('out-barriers').textContent = bar;
      document.getElementById('out-skud').textContent = skud;
      document.getElementById('out-objects').textContent = obj;

      const lCam = cam * RATE.cam, lBar = bar * RATE.bar, lSkud = skud * RATE.skud, lObj = obj * RATE.objBase;
      let sum = (lCam + lBar + lSkud + lObj) * sla.k;
      if (els.mon.checked) sum *= 1.12;
      sum = Math.round(sum / 100) * 100;

      els.total.textContent = sum.toLocaleString('ru-RU') + ' ₽/мес';
      els.break.innerHTML =
        '<li><span>Камеры (' + cam + ')</span><b>' + lCam.toLocaleString('ru-RU') + ' ₽</b></li>' +
        '<li><span>Шлагбаумы/ворота (' + bar + ')</span><b>' + lBar.toLocaleString('ru-RU') + ' ₽</b></li>' +
        '<li><span>Точки СКУД (' + skud + ')</span><b>' + lSkud.toLocaleString('ru-RU') + ' ₽</b></li>' +
        '<li><span>Объекты (' + obj + ')</span><b>' + lObj.toLocaleString('ru-RU') + ' ₽</b></li>' +
        '<li><span>Тариф SLA</span><b>' + sla.name + (els.mon.checked ? ' + мониторинг 24/7' : '') + '</b></li>';
      calc.dataset.summary = 'Камер: ' + cam + ', шлагбаумов: ' + bar + ', точек СКУД: ' + skud +
        ', объектов: ' + obj + ', SLA: ' + sla.name + (els.mon.checked ? ', мониторинг 24/7' : '') +
        '. Расчёт: ~' + sum.toLocaleString('ru-RU') + ' ₽/мес';
    }
    ['input', 'change'].forEach(ev => calc.addEventListener(ev, recalc));
    recalc();

    const tgBtn = document.getElementById('btn-calc-tg');
    if (tgBtn) tgBtn.addEventListener('click', () => {
      const text = 'Здравствуйте! Расчёт с сайта: ' + (calc.dataset.summary || '');
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
      const fab = document.querySelector('.fab');
      window.open((fab ? fab.href : 'https://t.me/') , '_blank');
    });
  }

  /* ---------- 11. Формы (валидация + успех) ---------- */
  document.querySelectorAll('form[data-ajax-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(inp => {
        const bad = !inp.value.trim() || (inp.type === 'checkbox' && !inp.checked);
        inp.style.borderColor = bad ? 'var(--danger)' : '';
        if (bad) valid = false;
      });
      const phone = form.querySelector('input[type="tel"]');
      if (phone && phone.value.trim() && phone.value.replace(/\D/g, '').length < 10) {
        phone.style.borderColor = 'var(--danger)'; valid = false;
      }
      if (!valid) return;
      const box = form.closest('.form-box');
      if (box) box.classList.add('sent');
      form.reset();
    });
  });

  /* ---------- 12. Fallback для незагрузившихся фото ---------- */
  const PH = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs>' +
    '<rect width="1200" height="800" fill="url(#g)"/>' +
    '<text x="600" y="410" fill="#ffffff" font-family="Arial" font-size="52" font-weight="bold" text-anchor="middle">SECURIT • TRASSIR • СКУД</text></svg>');
  document.addEventListener('error', function (e) {
    const t = e.target;
    if (t && t.tagName === 'IMG' && t.src !== PH) t.src = PH;
  }, true);

  /* ---------- 13. Год в футере ---------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();