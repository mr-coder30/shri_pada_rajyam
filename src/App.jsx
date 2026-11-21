import { useState } from "react";
import {
  UsersRound, 
  HeartHandshake,
  Bath,
  Car,
  ConciergeBell,
  Droplets,
  Sparkles,
  Wifi,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Fan,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Star,
  Users,
  X,
  Home,
  Images,
  MoreHorizontal,
  ShieldCheck,
  Building2,
} from "lucide-react";
import {
  rooms,
  reviews,
  WHATSAPP_NUMBER,
  PROPERTY,
} from "./data/rooms";

const img = {
  hero: "/images/heroimage.png",
  ac: "/images/singlestay.png",
  nonAc: "/images/groupstay.png",
  entrance: "/images/entrance.png",
  about: "/images/about.png",
  preview: "/images/preview.png",
  plant: "/images/plant.png",
  bathroom1: "/images/bathroom1.png",
  bathroom2: "/images/bathroom2.png",
  bathroom3: "/images/bathroom3.png"
};

function getRoomImage(room) {
  return room.image || img.ac;
}

function Lotus() {
  return (
    <svg viewBox="0 0 76 60" className="lotus" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M38 5C26 20 28 30 38 38C48 30 50 20 38 5Z" />
        <path d="M38 37C22 35 13 26 12 16C26 20 33 28 38 37Z" />
        <path d="M38 37C54 35 63 26 64 16C50 20 43 28 38 37Z" />
        <path d="M8 32C14 45 25 48 38 42C51 48 62 45 68 32" />
        <path d="M20 50H56M27 55H49" />
      </g>
    </svg>
  );
}

function Brand({ inverse = false }) {
  return (
    <a
      href="#home"
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      aria-label="Shri Pada Rajyam Homestays"
    >
      <Lotus />
      <span className="brand-name">
        <span>SHRI PADA</span>
        <span>RAJYAM</span>
        <small>H O M E S T A Y S</small>
      </span>
    </a>
  );
}

function WhatsApp({ message, className = "", children }) {
  const ready = /^\d{10,15}$/.test(WHATSAPP_NUMBER);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className={className}
      href={ready ? href : undefined}
      target={ready ? "_blank" : undefined}
      rel="noreferrer"
      onClick={(e) => {
        if (!ready) {
          e.preventDefault();
          window.alert(
            "Set the owner's WhatsApp number in src/data/rooms.js first."
          );
        }
      }}
    >
      {children}
    </a>
  );
}

function MobileNavigation() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {moreOpen && (
        <div
          className="mobile-more-backdrop"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {moreOpen && (
        <nav className="mobile-more-menu" aria-label="More navigation">
          <a href="#reviews" onClick={() => setMoreOpen(false)}>
            Reviews
          </a>
          <a href="#about" onClick={() => setMoreOpen(false)}>
            About us
          </a>
        </nav>
      )}

      <nav className="mobile-bottom-nav" aria-label="Main navigation">
        <a href="#home" className="mobile-nav-item">
          <Home size={20} />
          <span>Home</span>
        </a>

        <a href="#location" className="mobile-nav-item">
          <MapPin size={20} />
          <span>Find us</span>
        </a>

        <a href="#rooms" className="mobile-nav-item mobile-nav-primary">
          <BedDouble size={22} />
          <span>Rooms</span>
        </a>

        <a href="#gallery" className="mobile-nav-item">
          <Images size={20} />
          <span>Gallery</span>
        </a>

        <button
          type="button"
          className="mobile-nav-item"
          onClick={() => setMoreOpen((open) => !open)}
          aria-expanded={moreOpen}
          aria-label={moreOpen ? "Close more navigation" : "Open more navigation"}
        >
          <MoreHorizontal size={20} />
          <span>More</span>
        </button>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo hero-photo-main">
        <img
          src={img.hero}
          alt="Comfortable homestay bedroom"
          fetchPriority="high"
        />
      </div>

      <svg
        className="hero-curve-overlay"
        viewBox="0 0 500 860"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero-curve-fill"
          d="M 0 0 H 500 C 452 24, 405 66, 383 116 C 357 169, 363 206, 404 240 C 434 265, 411 301, 378 341 C 343 386, 311 430, 276 478 C 239 529, 201 571, 166 614 C 130 657, 125 697, 153 725 C 176 749, 179 783, 145 860 H 0 Z"
        />
      </svg>

      <header className="mobile-header">
        <Brand />
      </header>

      <p className="hero-handwritten">
        A simple stay,
        <br />
        a warm welcome.
        <span />
      </p>

      <div className="hero-copy">
        <h1>
          Come
          <br />
          as you are.
          <br />
          <em>
            Stay
            <br />
            comfortably.
          </em>
        </h1>

        <p>
          Clean rooms, a peaceful stay
          <br />
          and everything you need
          <br />
          for a comfortable visit.
        </p>

        <a className="scroll-cue" href="#rooms">
          <span>
            SCROLL
            <br />
            TO EXPLORE
          </span>
          <ArrowDown size={20} strokeWidth={1.2} />
        </a>
      </div>
    </section>
  );
}

function RoomCard({ room }) {
  const Icon = room.icon === "users" ? Users : BedDouble;

  return (
    <article className={`room-card room-card-${room.tone}`}>
      <div className="room-card-photo">
        <img src={getRoomImage(room)} alt={room.alt} loading="lazy" />
      </div>

      <div className="room-card-copy">
        <span className="room-number">{room.number}</span>
        <Icon className="room-type-icon" strokeWidth={1.6} />
        <h3>{room.name}</h3>
        <p>{room.short}</p>
        <p className="room-capacity">{room.capacity}</p>
        <p className="room-options">
          {room.options?.length
            ? room.options.join(" / ")
            : "Enquire for options"}
        </p>
      </div>

      <a
        className="room-arrow"
        href={`#details-${room.id}`}
        aria-label={`View ${room.name} details`}
      >
        <ArrowRight size={21} />
      </a>
    </article>
  );
}

function AmenitiesSection() {
  const amenities = [
    { icon: BedDouble, name: "Furnished rooms" },
    { icon: Fan, name: "AC / Non-AC options" },
    { icon: ShieldCheck, name: "CCTV security" },
    { icon: Building2, name: "Elevator" },
    { icon: Wifi, name: "Wi-Fi" },
    { icon: Car, name: "Parking" },
    { icon: Bath, name: "Attached bathroom" },
    { icon: Droplets, name: "Hot water" },
    { icon: Sparkles, name: "Regular housekeeping" },
    { icon: ConciergeBell, name: "Guest assistance" },
  ];

  return (
    <section className="amenities-section" id="amenities">
      <p className="eyebrow">AMENITIES</p>
      <h2>Thoughtful comforts for your stay.</h2>
      <p className="amenities-intro">
        A few practical comforts to make your visit easier.
      </p>

      <div className="amenities-grid">
        {amenities.map(({ icon: Icon, name }) => (
          <div className="amenity-item" key={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoomSection() {
  return (
    <section className="room-section" id="rooms">
      <div className="room-section-intro">
        <span className="eyebrow">FIND YOUR KIND OF COMFORT</span>
        <p>
          Choose from private stays, accommodation for small groups, or
          arrangements for larger groups of up to 30 guests.
        </p>
      </div>

      <div className="room-list">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <WhatsApp
        className="main-whatsapp"
        message="Hello Shri Pada Rajyam, I would like to enquire about room prices and availability."
      >
        <MessageCircle size={27} strokeWidth={1.7} />
        <span>Enquire on WhatsApp</span>
        <ArrowRight size={21} />
      </WhatsApp>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-photo">
        <img
          src={img.entrance}
          alt="Illustrative homestay entrance and veranda"
          loading="lazy"
        />
        <div className="welcome-photo-blob">
          A PLACE
          <br />
          TO REST,
          <br />
          EXPLORE
          <br />
          AND RETURN.
        </div>
        <div className="welcome-photo-oval">
          <span />
          STAY
          <br />
          RELAX
          <br />
          EXPLORE
          <br />
          REPEAT
          <span />
        </div>
      </div>

      <div className="why-section">
        <p className="eyebrow">WHY GUESTS CHOOSE US</p>
        <h2>
          Simple things
          <br />
          make a better stay.
        </h2>

        <div className="why-grid">
          <article className="why-card">
            <span className="why-card-icon" aria-hidden="true">
              <BedDouble aria-hidden="true" />
            </span>
            <h3>Comfortable Rooms</h3>
          </article>

          <article className="why-card">
            <span className="why-card-icon" aria-hidden="true">
              <Wifi aria-hidden="true" />
            </span>
            <h3>Everyday Essentials</h3>
          </article>

          <article className="why-card">
            <span className="why-card-icon" aria-hidden="true">
              <UsersRound aria-hidden="true" />
            </span>
            <h3>Room for Everyone</h3>
          </article>

          <article className="why-card">
            <span className="why-card-icon" aria-hidden="true">
              <HeartHandshake aria-hidden="true" />
            </span>
            <h3>A Warm Welcome</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ onPreview }) {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">ABOUT SHRI PADA RAJYAM</p>
        <h2>
          A welcoming stay
          <br />
          in a convenient
          <br />
          location.
        </h2>
        <p className="about-description">
          Whether you’re visiting for business, family or a short getaway,
          Shri Pada Rajyam offers clean, comfortable rooms and a warm,
          homely atmosphere.
        </p>
      </div>

      <div className="about-plant">
        <img src={img.plant} alt="" aria-hidden="true" loading="lazy" />
        <span />
        <p>
          Comfort
          <br />
          in the little
          <br />
          things.
        </p>
      </div>

      <button className="preview-card" onClick={onPreview}>
        <img
          src={img.preview}
          alt="Preview of the accommodation"
          loading="lazy"
        />
        <span className="preview-play">
          <Play size={21} />
        </span>
        <span className="preview-caption">Take a quick look</span>
      </button>
    </section>
  );
}

function RoomDetails({ onEnquire }) {
  return (
    <section className="room-details">
      <div className="room-details-heading">
        <p className="eyebrow">ROOM OPTIONS</p>
        <h2>
          Comfort for
          <br />
          <em>your kind of stay.</em>
        </h2>
      </div>

      {rooms.map((room) => (
        <article className="detail-card" id={`details-${room.id}`} key={room.id}>
          <img src={getRoomImage(room)} alt={room.alt} loading="lazy" />
          <div>
            <span className="eyebrow">{room.label}</span>
            <h3>{room.name}</h3>
            <p>{room.short}</p>
            <p className="room-capacity">{room.capacity}</p>
            <p className="room-options">
              {room.options?.length
                ? `Options: ${room.options.join(" / ")}`
                : "Please enquire about available arrangements."}
            </p>
            <button
              className="detail-enquiry"
              type="button"
              onClick={() => onEnquire(room)}
            >
              Ask about this stay <ArrowUpRight size={17} />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

function RoomEnquiryModal({ room, onClose }) {
  const [name, setName] = useState("");
  const [timing, setTiming] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const defaultGuests =
    room.id === "large-group-stay" ? "10" :
    room.id === "group-stay" ? "4" :
    "2";

  const [guests, setGuests] = useState(defaultGuests);

  if (!room) return null;

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function handleSubmit(event) {
    event.preventDefault();

    if (timing === "Choose dates" && checkOut <= checkIn) {
      alert("Check-out must be after check-in.");
      return;
    }

    const stayDetails =
      timing === "Choose dates"
        ? `Check-in: ${checkIn}\nCheck-out: ${checkOut}`
        : `Visit timing: ${timing}`;

    const message = [
      "Hello Shri Pada Rajyam Homestays,",
      "",
      `I would like to enquire about: ${room.name}`,
      `Guest name: ${name.trim()}`,
      stayDetails,
      `Guests: ${guests}`,
      "",
      "Please share the price and availability.",
    ].join("\n");

    const number = WHATSAPP_NUMBER.replace(/\D/g, "");
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    onClose();
  }

  return (
    <div className="enquiry-modal" onClick={onClose}>
      <section
        className="enquiry-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="enquiry-close"
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          <X size={20} />
        </button>

        <p className="eyebrow">ROOM ENQUIRY</p>
        <h2 id="enquiry-title">Plan your stay.</h2>
        <p className="enquiry-intro">
          Ask about {room.name}. We’ll confirm the price and availability on WhatsApp.
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            When are you planning to visit?
            <select
              value={timing}
              onChange={(event) => setTiming(event.target.value)}
              required
            >
              <option value="" disabled>Select a time</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This weekend</option>
              <option>Choose dates</option>
              <option>Not sure yet</option>
            </select>
          </label>

          {timing === "Choose dates" && (
            <div className="enquiry-date-grid">
              <label>
                Check-in
                <input
                  type="date"
                  min={minDate}
                  value={checkIn}
                  onChange={(event) => {
                    setCheckIn(event.target.value);
                    if (checkOut && event.target.value >= checkOut) {
                      setCheckOut("");
                    }
                  }}
                  required
                />
              </label>

              <label>
                Check-out
                <input
                  type="date"
                  min={checkIn || minDate}
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                  required
                />
              </label>
            </div>
          )}

          <label>
            Number of guests
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
            >
              {Array.from({ length: 30 }, (_, index) => index + 1).map((count) => (
                <option key={count} value={String(count)}>
                  {count} {count === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>

          <button className="enquiry-submit" type="submit">
            Continue on WhatsApp <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </div>
  );
}

function GallerySection() {
  const galleryImages = [
    { src: img.hero, alt: "Homestay bedroom" },
    { src: img.entrance, alt: "Homestay entrance" },
    { src: img.about, alt: "Homestay interior" },
    { src: img.preview, alt: "Accommodation preview" },
    { src: img.bathroom1, alt: "Bathroom image" },
    { src: img.bathroom2, alt: "Bathroom image" },
    { src: img.bathroom3, alt: "Bathroom image" },
    ...rooms.map((room) => ({
      src: getRoomImage(room),
      alt: room.alt || room.name,
    })),
  ];

  return (
    <section className="gallery-section" id="gallery">
      <p className="eyebrow">GALLERY</p>
      <h2>A glimpse of your stay.</h2>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure className="gallery-item" key={`${image.src}-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((total, review) => total + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : null;

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-inner">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">GUEST EXPERIENCES</p>
            <h2>
              A few kind words
              <br />
              <em>about the stay.</em>
            </h2>
          </div>

          <div className="reviews-rating">
            {averageRating ? (
              <span>
                <Star size={17} fill="currentColor" />
                {averageRating} average rating · {reviews.length} reviews
              </span>
            ) : (
              "Sample reviews for layout preview"
            )}
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={review.id ?? index}>
              <div
                className="review-stars"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    fill={starIndex < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="review-text">“{review.text}”</p>

              <div className="review-author">
                <p>{review.name}</p>
                <span>{review.visit}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="reviews-disclaimer">
          These are placeholder reviews for preview purposes, not verified guest
          testimonials. Replace them with genuine reviews before publishing.
        </p>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="location-section" id="location">
      <div className="location-leaf" />
      <p className="eyebrow">FIND US</p>
      <h2>
        Easy to reach. Closer
        <br />
        to everything you need.
      </h2>

      <div className="location-row">
        <a
          className="map-card"
          href={PROPERTY.mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Shri Pada Rajyam location in Google Maps"
        >
          <div className="map-roads">
            <span className="road road-a" />
            <span className="road road-b" />
            <span className="road road-c" />
            <span className="road road-d" />
          </div>
          <MapPin className="map-pin" size={32} fill="#EF493F" color="#EF493F" />
          <span className="map-label">
            Shri Pada Rajyam
            <br />
            Homestays
          </span>
          <span className="map-town">{PROPERTY.locationLabel}</span>
        </a>

        <a
          className="directions-button"
          href={PROPERTY.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={18} />
          Get Directions
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="contact-section" id="contact">
        <p className="eyebrow">YOUR NEXT STAY STARTS HERE</p>
        <h2>
          Have a question?
          <br />
          <em>We're here to help.</em>
        </h2>
        <p>Ask about our AC and non-AC rooms, prices or your visit.</p>
        <WhatsApp
          className="main-whatsapp"
          message="Hello Shri Pada Rajyam, please share your room prices and availability."
        >
          <MessageCircle size={23} />
          <span>Chat on WhatsApp</span>
          <ArrowRight size={20} />
        </WhatsApp>
        <a className="call-link" href={`tel:${PROPERTY.phone}`}>
          <Phone size={17} /> {PROPERTY.phoneLabel}
        </a>
      </section>

      <footer className="site-footer">
        <Brand inverse />
        <p>A simple stay. A warm welcome.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
        </div>
        <small>© {new Date().getFullYear()} Shri Pada Rajyam Homestays</small>
      </footer>
    </>
  );
}

function FloatingContact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="floating-contact">
      {contactOpen && (
        <>
          <button
            type="button"
            className="floating-contact-backdrop"
            aria-label="Close contact options"
            onClick={() => setContactOpen(false)}
          />

          <div className="floating-contact-menu">
            <WhatsApp
              className="floating-contact-option"
              message="Hello Shri Pada Rajyam, I would like to enquire about your rooms."
            >
              <MessageCircle size={19} />
              <span>WhatsApp</span>
            </WhatsApp>

            <a
              className="floating-contact-option"
              href={`tel:${PROPERTY.phone}`}
            >
              <Phone size={19} />
              <span>Call us</span>
            </a>
          </div>
        </>
      )}

      <button
        type="button"
        className="floating-contact-trigger"
        aria-expanded={contactOpen}
        onClick={() => setContactOpen((open) => !open)}
      >
        {contactOpen ? <X size={20} /> : <Phone size={20} />}
        <span>{contactOpen ? "Close" : "Call us"}</span>
      </button>
    </div>
  );
}

export default function App() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [enquiryRoom, setEnquiryRoom] = useState(null);

  return (
    <div className="site-shell">
      <Hero />
      <RoomSection />
      <AmenitiesSection />
      <WelcomeSection />
      <AboutSection onPreview={() => setPreviewOpen(true)} />
      <RoomDetails onEnquire={setEnquiryRoom} />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <Footer />

      <FloatingContact />
      <MobileNavigation />

      {enquiryRoom && (
        <RoomEnquiryModal
          key={enquiryRoom.id}
          room={enquiryRoom}
          onClose={() => setEnquiryRoom(null)}
        />
      )}

      {previewOpen && (
        <div className="preview-modal" onClick={() => setPreviewOpen(false)}>
          <div
            className="preview-modal-inner"
            role="dialog"
            aria-modal="true"
            aria-label="Property photo preview"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewOpen(false)}
              aria-label="Close preview"
            >
              <X />
            </button>
            <img src={img.preview} alt="Accommodation preview" />
          </div>
        </div>
      )}
    </div>
  );
}