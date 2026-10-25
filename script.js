// Set this to the inbox that should receive applications before deploying.
const APPLICATION_EMAIL = "";

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navLinks?.classList.toggle("open", open);
});
navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
}));

document.querySelector("#year").textContent = new Date().getFullYear();

const applicationForm = document.querySelector("#application-form");
const formMessage = document.querySelector("#form-message");
applicationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!APPLICATION_EMAIL) {
    formMessage.textContent = "Applications are being configured. Please check back shortly.";
    return;
  }
  const values = new FormData(applicationForm);
  const subject = encodeURIComponent(`Swayframe trial application â€” ${values.get("company")}`);
  const body = encodeURIComponent([
    `Name: ${values.get("name")}`,
    `Work email: ${values.get("email")}`,
    `Company: ${values.get("company")}`,
    `Role: ${values.get("role")}`,
    `Team size: ${values.get("team")}`,
    `Interested in: ${values.get("need")}`,
    `Current workflow: ${values.get("workflow")}`,
  ].join("\n"));
  window.location.href = `mailto:${encodeURIComponent(APPLICATION_EMAIL)}?subject=${subject}&body=${body}`;
  formMessage.textContent = "Your email app should open with the application ready for you to review and send.";
});