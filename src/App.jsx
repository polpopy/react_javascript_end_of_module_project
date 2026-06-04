import React, { useEffect, useRef, useState } from "react";
import clubLogo from "./assets/lions-fsbm-logo-transparent.png";
import universityLogo from "./assets/fsbm-university-logo-transparent.png";
import universityFooterLogo from "./assets/fsbm-university-logo.png";
import ayaMabchour from "./assets/old-site/aya-mabchour.jpeg";
import hamzaSabir from "./assets/old-site/hamza-sabir.jpeg";
import ayaNaraki from "./assets/old-site/aya-naraki.jpeg";
import assiaOmari from "./assets/old-site/assia-omari.jpeg";
import rayaneOuatgammi from "./assets/old-site/rayane-ouatgammi.jpeg";
import hajarOthmane from "./assets/old-site/hajar-othmane.jpeg";
import assiyaKharbouch from "./assets/old-site/assiya-kharbouch.jpeg";
import karimaLaglil from "./assets/old-site/karima-laglil.jpeg";
import bloodDonation from "./assets/old-site/blood-donation.png";
import diabetesScreening from "./assets/old-site/diabetes-screening.png";
import ramadanBasket from "./assets/old-site/ramadan-basket.jpg";
import medicalCaravan from "./assets/old-site/medical-caravan.jpg";
import environmentCleanup from "./assets/old-site/environment-cleanup.jpg";
import orientationDay from "./assets/old-site/orientation-day.jpg";
import lionsTeam from "./assets/old-site/lions-team.jpeg";
import linkedinLogo from "./assets/old-site/linkedin-logo.png";
import instagramLogo from "./assets/old-site/instagram-logo.png";
import tiktokLogo from "./assets/old-site/tiktok-logo.png";

const members = [
  { role: "President", name: "Aya Mabchour", focus: "Leads activities, strategic decisions and club representation", photo: ayaMabchour },
  { role: "Vice President", name: "Hamza Sabir", focus: "Supports the president and coordinates team continuity", photo: hamzaSabir },
  { role: "Follow-up Officer", name: "Aya Naraki", focus: "Tracks actions, meetings and meeting minutes", photo: ayaNaraki },
  { role: "Membership Officer", name: "Assia Omari", focus: "Manages new member registration and welcome process", photo: assiaOmari },
  { role: "Marketing Manager", name: "Rayane Ouatgammi", focus: "Social media management and content creation", photo: rayaneOuatgammi },
  { role: "Treasurer", name: "Hajar Othmane", focus: "Responsible for finances and budget tracking", photo: hajarOthmane },
  { role: "General Secretary", name: "Assiya Kharbouch", focus: "Manages documents and communications", photo: assiyaKharbouch },
  { role: "Organization Manager", name: "Karima Laglil", focus: "Organizes events and community actions", photo: karimaLaglil },
];

const events = [
  {
    title: "Blood Donation",
    date: "Health action",
    place: "FSBM campus",
    description: "A solidarity event where volunteers donate blood to help answer urgent medical needs.",
    photo: bloodDonation,
  },
  {
    title: "Diabetes Screening",
    date: "Prevention action",
    place: "Community spaces",
    description: "Free screening and awareness with health professionals to encourage early detection.",
    photo: diabetesScreening,
  },
  {
    title: "Ramadan Food Basket",
    date: "Ramadan",
    place: "Casablanca",
    description: "Distribution of essential food baskets to support families in need during the holy month.",
    photo: ramadanBasket,
  },
  {
    title: "Medical Caravan",
    date: "Community health",
    place: "Remote areas",
    description: "Free consultations, health checks and advice for communities with limited access to care.",
    photo: medicalCaravan,
  },
  {
    title: "Environmental Cleanup",
    date: "Environment action",
    place: "Beach or forest",
    description: "Collective cleanup to protect natural spaces and raise awareness about biodiversity.",
    photo: environmentCleanup,
  },
  {
    title: "Baccalaureate Orientation Day",
    date: "Student guidance",
    place: "FSBM campus",
    description: "Conferences and meetings to guide new graduates through university choices and opportunities.",
    photo: orientationDay,
  },
];

const actions = [
  "Founded in 2018 at the Faculty of Sciences Ben M'Sick",
  "Around 70 active student volunteers",
  "11 completed community activities",
  "Health, education, social support and environmental actions",
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "70+", label: "Active members" },
  { value: "11", label: "Completed projects" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lionsclubfsbm", icon: linkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/lions_fsbm/", icon: instagramLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@lions.club.fsbm", icon: tiktokLogo },
];

const navItems = [
  { href: "#accueil", label: "Home", icon: "home" },
  { href: "#membres", label: "Members", icon: "members" },
  { href: "#evenements", label: "Events", icon: "events" },
  { href: "#contact", label: "Contact", icon: "contact" },
];

function NavIcon({ type }) {
  const paths = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </>
    ),
    members: (
      <>
        <path d="M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M2.5 20a6 6 0 0 1 12 0" />
        <path d="M17 11.5a3 3 0 1 0 0-6" />
        <path d="M16.5 14a5 5 0 0 1 5 5" />
      </>
    ),
    events: (
      <>
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4.5 8h15" />
        <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Z" />
        <path d="M8 12h3" />
        <path d="M8 16h6" />
      </>
    ),
    contact: (
      <>
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="m5 7 7 6 7-6" />
      </>
    ),
  };

  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toastOpen, setToastOpen] = useState(false);
  const joinSectionRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const openJoinSection = () => {
    setShowJoin(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (showJoin && joinSectionRef.current) {
      joinSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showJoin]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateZoomReadability = () => {
      const screenWidth = window.screen?.width || window.innerWidth;
      const zoomOutRatio = screenWidth > 0 ? window.innerWidth / screenWidth : 1;
      const shouldBoost = zoomOutRatio >= 1.55;
      const readabilityScale = Math.min(4.5, Math.max(1, zoomOutRatio * 0.95));

      document.documentElement.classList.toggle("zoom-readable", shouldBoost);
      document.documentElement.style.setProperty(
        "--zoom-readable-scale",
        shouldBoost ? readabilityScale.toFixed(2) : "1"
      );
    };

    updateZoomReadability();
    window.addEventListener("resize", updateZoomReadability);
    window.visualViewport?.addEventListener("resize", updateZoomReadability);

    return () => {
      window.removeEventListener("resize", updateZoomReadability);
      window.visualViewport?.removeEventListener("resize", updateZoomReadability);
      document.documentElement.classList.remove("zoom-readable");
      document.documentElement.style.removeProperty("--zoom-readable-scale");
    };
  }, []);

  useEffect(() => {
    if (!toastOpen) return undefined;

    const timer = window.setTimeout(() => setToastOpen(false), 4200);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  return (
    <div className="app">
      {isLoading && (
        <div className="loader-screen" role="status" aria-live="polite" aria-label="Page loading">
          <div className="loader-logos">
            <img src={clubLogo} alt="Logo Lions Club FSBM" />
            <span className="loader-spinner" aria-hidden="true" />
            <img src={universityLogo} alt="Logo Faculte des Sciences Ben M'Sick" />
          </div>
          <p>Loading Lions Club FSBM</p>
        </div>
      )}

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Lions Club FSBM home" onClick={closeMenu}>
          <img src={clubLogo} alt="Logo Lions Club FSBM" />
          <span>Lions Club FSBM</span>
        </a>

        <button
          className={menuOpen ? "menu-toggle menu-toggle-open" : "menu-toggle"}
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              onClick={closeMenu}
              key={item.href}
            >
              <NavIcon type={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-content">
            <div className="logos">
              <img className="club-logo" src={clubLogo} alt="Logo du club Lions FSBM" />
              <img className="university-logo" src={universityLogo} alt="Logo Faculte des Sciences Ben M'Sick" />
            </div>
            <p className="eyebrow">University community service club</p>
            <h1>Lions Club FSBM</h1>
            <p className="hero-text">
              Founded in 2018, Lions FSBM brings together around 70 active students to serve local
              communities through health, education, humanitarian and environmental actions.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={openJoinSection}>
                Join the club
              </button>
              <a className="secondary-button" href="#evenements">View activities</a>
            </div>
          </div>
        </section>

        <section className="section split-section" aria-labelledby="objectif-title">
          <div>
            <p className="section-kicker">Our goal</p>
            <h2 id="objectif-title">Turning goodwill into concrete action.</h2>
            <img className="team-photo" src={lionsTeam} alt="Lions FSBM team activity" />
          </div>
          <div className="mission-box">
            <p>
              Lions FSBM is an engaged student community dedicated to leadership, collaboration and
              practical service. Its mission is to help students turn social challenges into sustainable
              opportunities for change.
            </p>
            <div className="stats-grid" aria-label="Club numbers">
              {stats.map((stat) => (
                <strong key={stat.label}>
                  {stat.value}
                  <span>{stat.label}</span>
                </strong>
              ))}
            </div>
            <ul>
              {actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="membres" aria-labelledby="members-title">
          <div className="section-heading">
            <p className="section-kicker">Team</p>
            <h2 id="members-title">Main members</h2>
          </div>
          <div className="card-grid">
            {members.map((member) => (
              <article className="member-card" key={member.role}>
                <img src={member.photo} alt={`${member.name}, ${member.role}`} />
                <span>{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section events-section" id="evenements" aria-labelledby="events-title">
          <div className="section-heading">
            <p className="section-kicker">Program</p>
            <h2 id="events-title">Upcoming events and activities</h2>
          </div>
          <div className="events-list">
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <img src={event.photo} alt={event.title} />
                <div>
                  <span className="event-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <strong>{event.place}</strong>
              </article>
            ))}
          </div>
        </section>

        {showJoin && (
          <section className="section join-panel" ref={joinSectionRef} aria-labelledby="join-title">
            <div>
              <p className="section-kicker">Membership</p>
              <h2 id="join-title">Join Lions Club FSBM</h2>
              <p>
                Fill in this information to show your interest. The data stays local in this React
                demo, following the no-backend requirement.
              </p>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setShowJoin(false);
                setToastOpen(true);
              }}
            >
              <label>
                Full name
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                University email
                <input type="email" name="email" required placeholder="name@etu.univh2c.ma" />
              </label>
              <label>
                Motivation
                <textarea name="message" rows="4" required placeholder="Why do you want to join the club?" />
              </label>
              <div className="form-actions">
                <button className="primary-button" type="submit">Send</button>
                <button className="ghost-button" type="button" onClick={() => setShowJoin(false)}>Close</button>
              </div>
            </form>
          </section>
        )}
      </main>

      <footer className="footer" id="contact">
        <div className="footer-brand">
          <img className="footer-club-logo" src={clubLogo} alt="Logo Lions Club FSBM" />
          <div>
            <p className="footer-kicker">Student service club</p>
            <h2>Lions Club FSBM</h2>
            <p>
              Faculty of Sciences Ben M'Sick community committed to health, education,
              social support and environmental action.
            </p>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-panel">
            <h3>Contact</h3>
            <address>
              Faculty of Sciences Ben M'Sick<br />
              Av Driss El Harti, Sidi Othmane, Casablanca B.P 7955
            </address>
            <a href="mailto:lionsclubfsbm@gmail.com">lionsclubfsbm@gmail.com</a>
            <a href="tel:+212694443376">+212 694-443376</a>
          </div>

          <div className="footer-panel">
            <h3>Club</h3>
            <a href="#accueil">Home</a>
            <a href="#membres">Members</a>
            <a href="#evenements">Events</a>
            <p>Membership: 125 DH / semester</p>
          </div>

          <div className="footer-panel footer-university">
            <h3>Partner Faculty</h3>
            <img src={universityFooterLogo} alt="Logo of Hassan II University of Casablanca" />
            <p>RIB: 007780000335930040014342</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright Lions FSBM 2026</p>
          <div className="social-links" aria-label="Social media links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <img src={social.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <a className="top-button" href="#accueil" aria-label="Back to top">
        ↑
      </a>

      {toastOpen && (
        <div className="toast-popup" role="status" aria-live="polite">
          <div className="toast-icon" aria-hidden="true">✓</div>
          <div>
            <strong>Request sent</strong>
            <p>Thank you for your interest. Lions Club FSBM will contact you soon.</p>
          </div>
          <button type="button" aria-label="Close message" onClick={() => setToastOpen(false)}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
