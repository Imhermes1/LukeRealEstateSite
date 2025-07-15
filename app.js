/* app.js - Luke Fornieri | MAK REALTY */

// Property data (Templestowe & Richmond)
const properties = [
  {
    address: "5 Princely Terrace, Templestowe",
    status: "SOLD",
    price: 6250000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    details:
      "Grand hillside residence with sweeping views, resort-style pool and refined European interiors."
  },
  {
    address: "9 Manton Street, Richmond",
    status: "SOLD",
    price: 2400000,
    image: "https://images.unsplash.com/photo-1616486333466-3e2916a8e30d?auto=format&fit=crop&w=1200&q=80",
    details:
      "Architect-designed contemporary terrace blending heritage façade with light-filled modern living zones."
  }
];

// Utility: format price as AUD currency
function formatPrice(price) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

// Utility: format date for Medium posts
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Modal functionality
function initModal() {
  const modal = document.getElementById("property-modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalLocation = document.getElementById("modal-location");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  const enquireBtn = document.querySelector(".enquire-btn");

  if (!modal) return;

  // Function to open modal
  function openModal(propertyIndex) {
    const property = properties[propertyIndex];
    if (!property) return;

    // Split address
    const [street, suburb] = property.address.split(", ");

    // Populate content
    modalTitle.textContent = street;
    modalImage.src = property.image;
    modalImage.alt = `${street} in ${suburb}`;
    modalLocation.textContent = suburb;
    modalPrice.textContent = formatPrice(property.price);
    modalDescription.textContent = property.details;

    // Show modal
    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");

    // Focus
    modalClose.focus();
    document.body.style.overflow = "hidden";
  }

  // Close modal
  function closeModal() {
    modal.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Open listeners
  document.querySelectorAll(".property-details-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const index = Number(btn.getAttribute("data-property"));
      openModal(index);
    });
  });

  document.querySelectorAll(".property-card").forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.getAttribute("data-property"));
      openModal(index);
    });

    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = Number(card.getAttribute("data-property"));
        openModal(index);
      }
    });

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `View details for ${properties[Number(card.getAttribute("data-property"))].address}`
    );
  });

  // Close listeners
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  enquireBtn.addEventListener("click", () => {
    closeModal();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("name").focus(), 500);
  });

  // Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("modal-open")) {
      closeModal();
    }
  });

  // Trap focus
  modal.addEventListener("keydown", e => {
    if (e.key !== "Tab") return;
    const focusables = modal.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
}

// Fetch Medium posts
async function fetchMediumPosts() {
  const container = document.getElementById("medium-posts");
  if (!container) return;

  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lukeforn"
    );
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    const items = data.items.slice(0, 3);

    container.innerHTML = "";

    items.forEach(item => {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "medium-post";
      link.setAttribute("aria-label", `Read article: ${item.title}`);

      const title = document.createElement("h4");
      title.className = "medium-post-title";
      title.textContent = item.title;
      link.appendChild(title);

      const time = document.createElement("time");
      time.className = "medium-post-date";
      time.dateTime = item.pubDate;
      time.textContent = formatDate(item.pubDate);
      link.appendChild(time);

      const excerpt = document.createElement("p");
      excerpt.className = "medium-post-excerpt";
      const tmp = document.createElement("div");
      tmp.innerHTML = item.description;
      const text = (tmp.textContent || tmp.innerText || "").trim();
      excerpt.textContent = `${text.substring(0, 120)}…`;
      link.appendChild(excerpt);

      container.appendChild(link);
    });
  } catch (err) {
    console.error(err);
    container.innerHTML =
      '<p class="error-message">Unable to load Medium posts at this time.</p>';
  }
}

// Navigation toggle
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("nav-menu--open");
  });

  document.addEventListener("click", e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("nav-menu--open");
    }
  });
}

// Lazy-load iframes
function initLazyIframes() {
  const iframes = document.querySelectorAll("iframe[data-src]");
  if (!("IntersectionObserver" in window)) {
    iframes.forEach(i => {
      i.src = i.getAttribute("data-src");
      i.removeAttribute("data-src");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          iframe.src = iframe.getAttribute("data-src");
          iframe.removeAttribute("data-src");
          obs.unobserve(iframe);
        }
      });
    },
    { rootMargin: "200px" }
  );

  iframes.forEach(i => observer.observe(i));
}

// Smooth scroll accounting for sticky header
function initSmoothScroll() {
  const headerHeight = 80;
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      if (id === "#" || id.length === 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });

      // close mobile menu
      const menu = document.querySelector(".nav-menu");
      const toggle = document.querySelector(".nav-toggle");
      if (menu && toggle) {
        menu.classList.remove("nav-menu--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Contact form
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for your message! Luke will contact you soon.");
    form.reset();
  });
}

// Scroll spy
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-menu a[href^='#']");
  function update() {
    const y = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bottom = top + sec.offsetHeight;
      if (y >= top && y < bottom) {
        links.forEach(l => l.classList.remove("active"));
        links.forEach(l => {
          if (l.getAttribute("href") === `#${sec.id}`) l.classList.add("active");
        });
      }
    });
  }
  window.addEventListener("scroll", update);
  update();
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector(".sticky-header");
  if (!header) return;
  function handle() {
    if (window.pageYOffset > 100) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", handle);
  handle();
}

// Scroll animations
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = "running";
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document
    .querySelectorAll(
      ".property-card, .service-card, .testimonial"
    )
    .forEach(el => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
}

// Update property prices in DOM
function updatePropertyPrices() {
  document.querySelectorAll(".property-card").forEach((card, index) => {
    const priceEl = card.querySelector(".property-price");
    if (priceEl && properties[index]) {
      priceEl.textContent = formatPrice(properties[index].price);
    }
  });
}

// Init All
window.addEventListener("DOMContentLoaded", () => {
  updatePropertyPrices();
  initModal();
  initNavToggle();
  initLazyIframes();
  initSmoothScroll();
  initContactForm();
  initScrollSpy();
  initHeaderScroll();
  initScrollAnimations();
  setTimeout(fetchMediumPosts, 500);
});

// Handle window resize (close mobile menu)
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const menu = document.querySelector(".nav-menu");
    const toggle = document.querySelector(".nav-toggle");
    if (menu) menu.classList.remove("nav-menu--open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
});
