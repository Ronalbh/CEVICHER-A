(() => {
  "use strict";

  const MENU_ITEMS = [
    {
      id: "ceviche-pescado",
      name: "Ceviche de Pescado",
      category: "ceviches",
      categoryLabel: "Ceviches & Tiraditos",
      spice: "picante",
      spiceLabel: "Ají regulable",
      price: 32,
      description: "Pesca blanca fresca del día curada en limón sutil, cebolla morada en pluma, culantro y ají limo. Con camote glaseado, choclo y cancha."
    },
    {
      id: "ceviche-mixto",
      name: "Ceviche Mixto BalPari",
      category: "ceviches",
      categoryLabel: "Ceviches & Tiraditos",
      spice: "picante",
      spiceLabel: "Ají regulable",
      price: 38,
      description: "Combinación de pescado fresco, pulpo tierno, calamar y langostinos en leche de limón, ají limo, camote, choclo y chifles."
    },
    {
      id: "tiradito-aji",
      name: "Tiradito al Ají Amarillo",
      category: "ceviches",
      categoryLabel: "Ceviches & Tiraditos",
      spice: "suave",
      spiceLabel: "Picante suave",
      price: 34,
      description: "Finas láminas de pescado fresco bañadas en crema sedosa de ají amarillo y limón, coronadas con choclo tierno y crocante de camote."
    },
    {
      id: "leche-tigre-clasica",
      name: "Leche de Tigre Clásica",
      category: "leches",
      categoryLabel: "Leches de Tigre",
      spice: "picante",
      spiceLabel: "Clásico / con ají",
      price: 22,
      description: "Concentrado cítrico de la barra con trozos de pescado fresco, chicharrón crocante de pota, cebolla roja, choclo y cancha serrana."
    },
    {
      id: "leche-tigre-mixta",
      name: "Leche de Tigre Mixta",
      category: "leches",
      categoryLabel: "Leches de Tigre",
      spice: "picante",
      spiceLabel: "Clásico / con ají",
      price: 26,
      description: "Nuestra copa poderosa con pescado, langostinos y pulpo en extracto marino bien frío, acompañada de chicharrón de calamar."
    },
    {
      id: "leche-tigre-rocoto",
      name: "Leche de Tigre al Rocoto",
      category: "leches",
      categoryLabel: "Leches de Tigre",
      spice: "picante",
      spiceLabel: "Intensidad alta",
      price: 24,
      description: "Emulsión cremosa de rocoto ahumado y limón sutil con pesca del día, chicharrón marino, choclo desgranado y cancha."
    },
    {
      id: "sudado-pescado",
      name: "Sudado de Pescado",
      category: "calientes",
      categoryLabel: "Sudados & Calientes",
      spice: "suave",
      spiceLabel: "Picante suave",
      price: 36,
      description: "Filete entero cocido a fuego lento en chicha de jora, tomate, cebolla roja, ají amarillo y culantro. Servido con yuca y arroz blanco."
    },
    {
      id: "parihuela-balpari",
      name: "Parihuela BalPari",
      category: "calientes",
      categoryLabel: "Sudados & Calientes",
      spice: "suave",
      spiceLabel: "Picante suave",
      price: 42,
      description: "Sopa marina concentrada con filete de pescado, cangrejo, langostinos, pulpo, calamar y conchas, perfumada con vino blanco y ají panca."
    },
    {
      id: "chilcano-pescado",
      name: "Chilcano de Pescado",
      category: "calientes",
      categoryLabel: "Sudados & Calientes",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 16,
      description: "Caldo tradicional de cabezas y espinazos de pescado fresco con kion, cebolla china y culantro. Incluye rocoto y limón aparte."
    },
    {
      id: "chicharron-pescado",
      name: "Chicharrón de Pescado",
      category: "calientes",
      categoryLabel: "Sudados & Calientes",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 34,
      description: "Trozos jugosos de pescado arrebozados y fritos al punto crocante, servidos con yuca dorada, salsa criolla y tártara de la casa."
    },
    {
      id: "arroz-mariscos",
      name: "Arroz con Mariscos",
      category: "arroces",
      categoryLabel: "Arroces & Jaleas",
      spice: "suave",
      spiceLabel: "Picante suave",
      price: 38,
      description: "Arroz meloso salteado al wok en aderezo de ají amarillo y panca con langostinos, calamar, pulpo, conchas y salsa criolla."
    },
    {
      id: "chaufa-mariscos",
      name: "Chaufa de Mariscos",
      category: "arroces",
      categoryLabel: "Arroces & Jaleas",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 36,
      description: "Fusión marina al wok con arroz graneado, mixtura de mariscos, tortilla de huevo, kion, sillao y cebolla china."
    },
    {
      id: "jalea-mixta",
      name: "Jalea Mixta Crocante",
      category: "arroces",
      categoryLabel: "Arroces & Jaleas",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 44,
      description: "Chicharrón de pescado, calamar, pota y langostinos sobre yuca frita, coronado con sarsa criolla fresca y tártara artesanal."
    },
    {
      id: "trio-marino",
      name: "Trío Marino BalPari",
      category: "arroces",
      categoryLabel: "Arroces & Jaleas",
      spice: "suave",
      spiceLabel: "Ají regulable",
      price: 48,
      description: "Ideal para probar lo mejor de la casa: porción de ceviche de pescado, arroz con mariscos y chicharrón de pescado crocante."
    },
    {
      id: "chicha-morada",
      name: "Jarra de Chicha Morada (1L)",
      category: "bebidas",
      categoryLabel: "Bebidas & Extras",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 16,
      description: "Preparada cada mañana con maíz morado hervido con piña, manzana, canela, clavo de olor y limón fresco."
    },
    {
      id: "maracuya-jarra",
      name: "Jarra de Maracuyá (1L)",
      category: "bebidas",
      categoryLabel: "Bebidas & Extras",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 16,
      description: "Refresco natural de pulpa pura de maracuyá bien helado, perfecto para equilibrar platos picantes."
    },
    {
      id: "guarnicion-yuca",
      name: "Porción de Yuca Frita & Tártara",
      category: "bebidas",
      categoryLabel: "Bebidas & Extras",
      spice: "sin-picante",
      spiceLabel: "Sin picante",
      price: 10,
      description: "Bastones de yuca amarilla dorados por fuera y suaves por dentro con crema tártara casera."
    }
  ];

  const SPICE_DETAILS = {
    sin: {
      title: "Sin ají (Cero picor)",
      text: "Ideal para niños o paladares sensibles. Mantenemos todo el aroma del culantro, limón fresco y ajo suave sin agregar ají limo ni rocoto."
    },
    suave: {
      title: "Suave (Aromático)",
      text: "Un toque sutil de ají limo sin venas ni pepas. Aporta perfume cítrico y frescura sin resultar picante."
    },
    clasico: {
      title: "Clásico BalPari (Punto tradicional)",
      text: "El equilibrio característico de la barra cevichería: picor vivo que despierta el paladar y respeta el sabor del pescado."
    },
    bravo: {
      title: "Bien picante (Para amantes del ají)",
      text: "Preparado con ají limo y rocoto fresco para quienes disfrutan una leche de tigre o ceviche con carácter intenso."
    }
  };

  const OPENING_HOURS = {
    0: { open: 11, close: 18, label: "Domingo · 11:00 a 18:00" },
    1: null,
    2: { open: 11, close: 17, label: "Martes · 11:00 a 17:00" },
    3: { open: 11, close: 17, label: "Miércoles · 11:00 a 17:00" },
    4: { open: 11, close: 17, label: "Jueves · 11:00 a 17:00" },
    5: { open: 11, close: 17.5, label: "Viernes · 11:00 a 17:30" },
    6: { open: 11, close: 18, label: "Sábado · 11:00 a 18:00" }
  };

  const state = {
    category: "todos",
    search: "",
    spice: "todos",
    selection: new Map()
  };

  const els = {
    navToggle: document.getElementById("nav-toggle"),
    mainNav: document.getElementById("main-nav"),
    liveStatus: document.getElementById("live-status"),
    liveStatusText: document.getElementById("live-status-text"),
    tabs: document.querySelectorAll(".tab-btn"),
    searchInput: document.getElementById("menu-search"),
    spiceSelect: document.getElementById("spice-select"),
    menuGrid: document.getElementById("menu-grid"),
    menuMeta: document.getElementById("menu-results-meta"),
    menuEmpty: document.getElementById("menu-empty"),
    resetFiltersBtn: document.getElementById("reset-filters-btn"),
    spiceOpts: document.querySelectorAll(".spice-opt"),
    spiceDetail: document.getElementById("spice-detail"),
    hoursList: document.getElementById("hours-list"),
    faqTriggers: document.querySelectorAll(".faq-trigger"),
    openDrawerBtn: document.getElementById("open-drawer-btn"),
    closeDrawerBtn: document.getElementById("close-drawer-btn"),
    drawerBackdrop: document.getElementById("drawer-backdrop"),
    drawer: document.getElementById("selection-drawer"),
    drawerItems: document.getElementById("drawer-items"),
    drawerTotal: document.getElementById("drawer-total"),
    selectionCount: document.getElementById("selection-count"),
    clearSelectionBtn: document.getElementById("clear-selection-btn"),
    drawerToReservationBtn: document.getElementById("drawer-to-reservation-btn"),
    formSelectionText: document.getElementById("form-selection-text"),
    attachSelectionBtn: document.getElementById("attach-selection-btn"),
    reservationForm: document.getElementById("reservation-form"),
    resDate: document.getElementById("res-date"),
    resNotes: document.getElementById("res-notes"),
    formConfirmation: document.getElementById("form-confirmation"),
    confirmationSummary: document.getElementById("confirmation-summary"),
    copyReservationBtn: document.getElementById("copy-reservation-btn"),
    newReservationBtn: document.getElementById("new-reservation-btn"),
    currentYear: document.getElementById("current-year")
  };

  function normalizeText(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function formatPrice(amount) {
    return `S/ ${amount.toFixed(2)}`;
  }

  function updateLiveStatusAndHours() {
    const now = new Date();
    const day = now.getDay();
    const decimalHour = now.getHours() + now.getMinutes() / 60;
    const schedule = OPENING_HOURS[day];

    if (els.hoursList) {
      const todayRow = els.hoursList.querySelector(`li[data-day="${day}"]`);
      if (todayRow) {
        todayRow.classList.add("is-today");
      }
    }

    if (!els.liveStatus || !els.liveStatusText) return;

    if (schedule && decimalHour >= schedule.open && decimalHour < schedule.close) {
      els.liveStatus.classList.remove("is-closed");
      els.liveStatusText.textContent = `Abierto ahora (${schedule.label})`;
    } else if (schedule && decimalHour < schedule.open) {
      els.liveStatus.classList.add("is-closed");
      els.liveStatusText.textContent = `Abrimos hoy a las 11:00 (${schedule.label})`;
    } else {
      els.liveStatus.classList.add("is-closed");
      els.liveStatusText.textContent = "Cerrado ahora · Atención de Mar a Dom desde las 11:00";
    }
  }

  function getFilteredItems() {
    const query = normalizeText(state.search.trim());
    return MENU_ITEMS.filter((item) => {
      const matchCategory = state.category === "todos" || item.category === state.category;
      const matchSpice = state.spice === "todos" || item.spice === state.spice;
      const searchable = normalizeText(`${item.name} ${item.description} ${item.categoryLabel}`);
      const matchQuery = !query || searchable.includes(query);
      return matchCategory && matchSpice && matchQuery;
    });
  }

  function getSpiceBadgeClass(spice) {
    if (spice === "sin-picante") return "spice-sin";
    if (spice === "suave") return "spice-suave";
    return "spice-picante";
  }

  function renderMenu() {
    const items = getFilteredItems();
    els.menuGrid.textContent = "";

    if (items.length === 0) {
      els.menuEmpty.classList.remove("hidden");
      els.menuMeta.textContent = "0 platos mostrados";
      return;
    }

    els.menuEmpty.classList.add("hidden");
    els.menuMeta.textContent = `Mostrando ${items.length} ${items.length === 1 ? "opción" : "opciones"} de nuestra carta`;

    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-item";

      const top = document.createElement("div");
      top.className = "menu-item-top";

      const cat = document.createElement("span");
      cat.className = "menu-cat-label";
      cat.textContent = item.categoryLabel;

      const spice = document.createElement("span");
      spice.className = `spice-badge ${getSpiceBadgeClass(item.spice)}`;
      spice.textContent = item.spiceLabel;

      top.append(cat, spice);

      const title = document.createElement("h3");
      title.textContent = item.name;

      const desc = document.createElement("p");
      desc.className = "menu-item-desc";
      desc.textContent = item.description;

      const contentWrap = document.createElement("div");
      contentWrap.append(top, title, desc);

      const footer = document.createElement("div");
      footer.className = "menu-item-footer";

      const price = document.createElement("span");
      price.className = "menu-item-price";
      price.textContent = formatPrice(item.price);

      const qtyInCart = state.selection.get(item.id) || 0;
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = qtyInCart > 0 ? "btn-add added" : "btn-add";
      addBtn.dataset.itemId = item.id;
      addBtn.textContent = qtyInCart > 0 ? `En lista (${qtyInCart})` : "+ Agregar";
      addBtn.addEventListener("click", () => addToSelection(item.id));

      footer.append(price, addBtn);
      card.append(contentWrap, footer);
      fragment.appendChild(card);
    });

    els.menuGrid.appendChild(fragment);
  }

  function addToSelection(itemId) {
    const current = state.selection.get(itemId) || 0;
    state.selection.set(itemId, current + 1);
    syncSelectionUI();
  }

  function updateQuantity(itemId, delta) {
    const current = state.selection.get(itemId) || 0;
    const next = current + delta;
    if (next <= 0) {
      state.selection.delete(itemId);
    } else {
      state.selection.set(itemId, next);
    }
    syncSelectionUI();
  }

  function buildSelectionSummaryText() {
    if (state.selection.size === 0) return "";
    const parts = [];
    let total = 0;
    state.selection.forEach((qty, id) => {
      const item = MENU_ITEMS.find((entry) => entry.id === id);
      if (item) {
        parts.push(`${qty}x ${item.name}`);
        total += item.price * qty;
      }
    });
    return `${parts.join(", ")} (Total ref: ${formatPrice(total)})`;
  }

  function syncSelectionUI() {
    let count = 0;
    let total = 0;

    els.drawerItems.textContent = "";

    if (state.selection.size === 0) {
      const emptyMsg = document.createElement("p");
      emptyMsg.className = "drawer-empty";
      emptyMsg.textContent = "Tu lista está vacía. Agrega platos desde La Carta para estimar tu pedido o adjuntarlos a tu reserva.";
      els.drawerItems.appendChild(emptyMsg);
    } else {
      const fragment = document.createDocumentFragment();
      state.selection.forEach((qty, id) => {
        const item = MENU_ITEMS.find((entry) => entry.id === id);
        if (!item) return;

        count += qty;
        total += item.price * qty;

        const row = document.createElement("div");
        row.className = "drawer-item";

        const info = document.createElement("div");
        info.className = "drawer-item-info";
        const nameEl = document.createElement("strong");
        nameEl.textContent = item.name;
        const subEl = document.createElement("span");
        subEl.textContent = `${formatPrice(item.price)} c/u · Subtotal: ${formatPrice(item.price * qty)}`;
        info.append(nameEl, subEl);

        const controls = document.createElement("div");
        controls.className = "drawer-qty-controls";

        const minusBtn = document.createElement("button");
        minusBtn.type = "button";
        minusBtn.className = "qty-btn";
        minusBtn.setAttribute("aria-label", `Quitar una unidad de ${item.name}`);
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", () => updateQuantity(item.id, -1));

        const qtySpan = document.createElement("span");
        qtySpan.textContent = String(qty);

        const plusBtn = document.createElement("button");
        plusBtn.type = "button";
        plusBtn.className = "qty-btn";
        plusBtn.setAttribute("aria-label", `Agregar una unidad de ${item.name}`);
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", () => updateQuantity(item.id, 1));

        controls.append(minusBtn, qtySpan, plusBtn);
        row.append(info, controls);
        fragment.appendChild(row);
      });
      els.drawerItems.appendChild(fragment);
    }

    els.selectionCount.textContent = String(count);
    els.drawerTotal.textContent = formatPrice(total);

    if (count > 0) {
      els.formSelectionText.textContent = buildSelectionSummaryText();
      els.attachSelectionBtn.classList.remove("hidden");
    } else {
      els.formSelectionText.textContent = "Aún no has agregado platos de la carta (opcional).";
      els.attachSelectionBtn.classList.add("hidden");
    }

    renderMenu();
  }

  function openDrawer() {
    els.drawer.hidden = false;
    els.drawerBackdrop.classList.remove("hidden");
    els.closeDrawerBtn.focus();
  }

  function closeDrawer() {
    els.drawer.hidden = true;
    els.drawerBackdrop.classList.add("hidden");
    els.openDrawerBtn.focus();
  }

  function attachSelectionToNotes() {
    const summary = buildSelectionSummaryText();
    if (!summary) return;
    const prefix = "Platos de interés: ";
    const existing = els.resNotes.value.trim();
    if (!existing) {
      els.resNotes.value = `${prefix}${summary}`;
    } else if (!existing.includes(summary)) {
      els.resNotes.value = `${existing}\n${prefix}${summary}`;
    }
    els.resNotes.focus();
  }

  function setupNavigation() {
    els.navToggle.addEventListener("click", () => {
      const expanded = els.navToggle.getAttribute("aria-expanded") === "true";
      els.navToggle.setAttribute("aria-expanded", String(!expanded));
      els.mainNav.classList.toggle("open");
    });

    els.mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        els.navToggle.setAttribute("aria-expanded", "false");
        els.mainNav.classList.remove("open");
      });
    });
  }

  function setupMenuControls() {
    els.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        els.tabs.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        state.category = tab.dataset.category || "todos";
        renderMenu();
      });
    });

    els.searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderMenu();
    });

    els.spiceSelect.addEventListener("change", (event) => {
      state.spice = event.target.value;
      renderMenu();
    });

    els.resetFiltersBtn.addEventListener("click", () => {
      state.category = "todos";
      state.search = "";
      state.spice = "todos";
      els.searchInput.value = "";
      els.spiceSelect.value = "todos";
      els.tabs.forEach((btn) => {
        const isAll = btn.dataset.category === "todos";
        btn.classList.toggle("active", isAll);
        btn.setAttribute("aria-selected", String(isAll));
      });
      renderMenu();
    });
  }

  function setupSpiceGuide() {
    els.spiceOpts.forEach((btn) => {
      btn.addEventListener("click", () => {
        const level = btn.dataset.level;
        const info = SPICE_DETAILS[level];
        if (!info) return;

        els.spiceOpts.forEach((opt) => opt.classList.remove("active"));
        btn.classList.add("active");

        els.spiceDetail.textContent = "";
        const heading = document.createElement("h4");
        heading.textContent = info.title;
        const body = document.createElement("p");
        body.textContent = info.text;
        els.spiceDetail.append(heading, body);
      });
    });
  }

  function setupFaq() {
    els.faqTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panel = trigger.nextElementSibling;
        trigger.setAttribute("aria-expanded", String(!expanded));
        if (panel) {
          panel.hidden = expanded;
        }
      });
    });
  }

  function setupDrawer() {
    els.openDrawerBtn.addEventListener("click", openDrawer);
    els.closeDrawerBtn.addEventListener("click", closeDrawer);
    els.drawerBackdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !els.drawer.hidden) {
        closeDrawer();
      }
    });

    els.clearSelectionBtn.addEventListener("click", () => {
      state.selection.clear();
      syncSelectionUI();
    });

    els.drawerToReservationBtn.addEventListener("click", () => {
      closeDrawer();
      attachSelectionToNotes();
      document.getElementById("reservas").scrollIntoView({ behavior: "smooth" });
    });

    els.attachSelectionBtn.addEventListener("click", attachSelectionToNotes);
  }

  function setFieldError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function setupReservationForm() {
    const today = getLocalDateString();
    if (els.resDate) {
      els.resDate.min = today;
      els.resDate.value = today;
    }

    let lastSummary = "";

    els.reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("res-name").value.trim();
      const phone = document.getElementById("res-phone").value.trim();
      const date = els.resDate.value;
      const time = document.getElementById("res-time").value;
      const guests = Number(document.getElementById("res-guests").value);
      const notes = els.resNotes.value.trim();

      setFieldError("err-name", "");
      setFieldError("err-phone", "");
      setFieldError("err-date", "");
      setFieldError("err-time", "");
      setFieldError("err-guests", "");

      let valid = true;

      if (name.length < 2) {
        setFieldError("err-name", "Ingresa tu nombre completo.");
        valid = false;
      }
      if (phone.replace(/\D/g, "").length < 7) {
        setFieldError("err-phone", "Ingresa un número válido.");
        valid = false;
      }
      if (!date) {
        setFieldError("err-date", "Elige una fecha.");
        valid = false;
      }
      if (!time) {
        setFieldError("err-time", "Elige una hora.");
        valid = false;
      }
      if (!Number.isInteger(guests) || guests < 1 || guests > 25) {
        setFieldError("err-guests", "Entre 1 y 25 personas.");
        valid = false;
      }

      if (!valid) return;

      lastSummary = [
        `Reserva BalPari Cevichería`,
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Fecha y hora: ${date} a las ${time}`,
        `Personas: ${guests}`,
        notes ? `Notas: ${notes}` : null
      ]
        .filter(Boolean)
        .join("\n");

      els.confirmationSummary.textContent = lastSummary;
      els.formConfirmation.classList.remove("hidden");
    });

    els.copyReservationBtn.addEventListener("click", async () => {
      if (!lastSummary) return;
      try {
        await navigator.clipboard.writeText(lastSummary);
        els.copyReservationBtn.textContent = "¡Resumen copiado!";
        setTimeout(() => {
          els.copyReservationBtn.textContent = "Copiar resumen";
        }, 2200);
      } catch {
        els.copyReservationBtn.textContent = "Selecciona y copia el texto";
      }
    });

    els.newReservationBtn.addEventListener("click", () => {
      els.reservationForm.reset();
      if (els.resDate) els.resDate.value = today;
      els.formConfirmation.classList.add("hidden");
    });
  }

  function init() {
    if (els.currentYear) {
      els.currentYear.textContent = String(new Date().getFullYear());
    }
    updateLiveStatusAndHours();
    setupNavigation();
    setupMenuControls();
    setupSpiceGuide();
    setupFaq();
    setupDrawer();
    setupReservationForm();
    syncSelectionUI();
  }

  init();
})();
