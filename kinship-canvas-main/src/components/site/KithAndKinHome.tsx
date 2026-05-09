import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Coffee, MapPin, Phone, Instagram, Facebook, Clock, ArrowRight,
  ChevronDown, Star, Leaf, Pizza, Wine, Cake,
} from "lucide-react";

import bar from "@/assets/interior-bar.jpg";
import table from "@/assets/interior-table.jpg";
import exterior from "@/assets/exterior-evening.png";
import signage from "@/assets/signage.jpg";
import plants from "@/assets/plant-corner.jpg";
import latte from "@/assets/drink-latte.jpg";
import pizza from "@/assets/food-pizza.jpg";
import mocktail from "@/assets/drink-mocktail.jpg";
import espresso from "@/assets/drink-espresso.jpg";

const WA_NUMBER = "8401527600"; // TODO: replace with real Kith & Kin WhatsApp number
const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* -------------------------------------------------- WhatsApp Float */
function WhatsAppFloat() {
  return (
    <a
      href={wa("Hi Kith & Kin! I'd like to place an order.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full gradient-warm blur-xl opacity-60 group-hover:opacity-90 transition" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-warm transition-transform group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current"><path d="M19.11 17.61c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.46-.83-2-.22-.53-.45-.46-.61-.47l-.52-.01a.99.99 0 0 0-.72.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.13.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.16 1.6 5.97L4 28l6.18-1.62A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.86c-1.78 0-3.51-.48-5.03-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.86 9.86 0 1 1 25.86 16 9.87 9.87 0 0 1 16 25.86z" /></svg>
      </span>
    </a>
  );
}

/* -------------------------------------------------- Nav */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Story", "#story"],
    ["Drinks", "#drinks"],
    ["Menu", "#menu"],
    ["Space", "#space"],
    ["Visit", "#visit"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/60 py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full border ${scrolled ? "border-foreground/30" : "border-cream/60"}`}>
            <Leaf className={`h-4 w-4 ${scrolled ? "text-foreground" : "text-cream"}`} />
          </span>
          <span className={`font-display text-lg tracking-wide ${scrolled ? "text-foreground" : "text-cream"}`}>
            Kith <span className="text-accent">&</span> Kin
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors ${scrolled ? "text-foreground/80 hover:text-accent" : "text-cream/80 hover:text-cream"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={wa("Hi! I'd like to reserve a table at Kith & Kin.")}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-soft hover:scale-[1.03] transition-transform"
        >
          Reserve <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------- Hero */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={exterior} alt="Kith & Kin cafe at evening with warm string lights" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase backdrop-blur"
        >
          <Leaf className="h-3 w-3" /> Specialty Cafe · India
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] font-light"
        >
          Kith <span className="italic text-accent">&</span> Kin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-6 max-w-xl text-pretty text-base sm:text-lg text-cream/85"
        >
          Coffee &amp; More, served with kinship. A warm corner where every cup
          and every conversation feels like coming home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={wa("Hi! I'd like to order from Kith & Kin.")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink shadow-warm hover:scale-[1.03] transition-transform"
          >
            Order via WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            Explore the Menu
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/70">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-float" />
      </div>
    </section>
  );
}

/* -------------------------------------------------- Marquee */
function Marquee() {
  const items = ["Specialty Coffee", "Wood-Fired Pizzas", "Crafted Mocktails", "All-Day Menu", "Cozy Corners", "Made with Kinship"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-wood-deep text-cream py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl tracking-wide flex items-center gap-12">
            {t}
            <Leaf className="h-4 w-4 text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------- Reveal helper */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------- Story */
function Story() {
  return (
    <section id="story" className="relative py-28 md:py-40 px-6 bg-grain">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-6">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Our Story</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-pretty">
              For the people who feel <em className="text-accent not-italic">like family.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground text-pretty">
              <span className="font-display italic text-foreground">Kith</span> — your
              dearest friends. <span className="font-display italic text-foreground">Kin</span> —
              the family you're born into. Together, the heart of every great
              gathering. We poured the same idea into every detail of this cafe:
              honest beans, slow-fermented dough, plants that breathe with you,
              and lighting that softens the day.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-8 pt-4">
              <Stat value="120+" label="Daily smiles" />
              <Stat value="4.9" label="Google rating" />
              <Stat value="22" label="House recipes" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 grid grid-cols-6 gap-4">
          <Reveal>
            <div className="col-span-6 sm:col-span-4 aspect-[4/5] overflow-hidden rounded-2xl shadow-warm">
              <img src={bar} alt="Wooden bar with espresso machine and shelves" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.2s]" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="col-span-6 sm:col-span-2 flex flex-col gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img src={signage} alt="Glowing Kith & Kin signage with string lights" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.2s]" loading="lazy" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img src={plants} alt="Lush plant corner inside the cafe" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.2s]" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-foreground">{value}</div>
      <div className="text-xs tracking-wider uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

/* -------------------------------------------------- Signature drinks (horizontal scroll on desktop) */
type Drink = { name: string; ingredients: string; price: string; img: string; tag: string };
const drinks: Drink[] = [
  { name: "House Latte", ingredients: "Single-origin espresso · steamed milk · rosetta art", price: "₹220", img: latte, tag: "Signature" },
  { name: "Citrus Cold Brew", ingredients: "12-hour cold brew · orange · fresh mint", price: "₹260", img: mocktail, tag: "Mocktail" },
  { name: "Slow Espresso", ingredients: "Double shot · golden crema · seasonal bean", price: "₹160", img: espresso, tag: "Coffee" },
  { name: "Cocoa Cloud", ingredients: "Dark chocolate · oat milk · sea salt foam", price: "₹290", img: latte, tag: "House Special" },
];

function SignatureDrinks() {
  return (
    <section id="drinks" className="relative py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Signature Drinks</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-5xl md:text-6xl text-pretty max-w-2xl">
              Crafted slowly. <em className="text-accent not-italic">Sipped lovingly.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-md text-muted-foreground">
            Every drink on our bar is made by a barista who knows your name —
            or wants to. Hover and tap to add to your WhatsApp order.
          </p>
        </Reveal>
      </div>

      <div className="overflow-x-auto px-6 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 min-w-max">
          {drinks.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <DrinkCard drink={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <div className="lift group relative w-[78vw] sm:w-[360px] overflow-hidden rounded-3xl bg-card shadow-soft">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={drink.img} alt={drink.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
      </div>
      <div className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-ink">{drink.tag}</div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl">{drink.name}</h3>
          <span className="font-display text-xl text-accent">{drink.price}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{drink.ingredients}</p>
        <a
          href={wa(`Hi! I'd like to order: ${drink.name} (${drink.price}).`)}
          target="_blank" rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-between rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
        >
          Add to WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* -------------------------------------------------- All-day menu */
type Item = { name: string; desc: string; price: string };
const menu: { title: string; icon: React.ReactNode; img: string; items: Item[] }[] = [
  {
    title: "Wood-Fired Pizzas",
    icon: <Pizza className="h-5 w-5" />,
    img: pizza,
    items: [
      { name: "Margherita Classico", desc: "San Marzano · fior di latte · basil", price: "₹420" },
      { name: "Truffle Mushroom", desc: "Wild mushrooms · truffle oil · parmesan", price: "₹560" },
      { name: "Spicy Paneer Tikka", desc: "House paneer · smoked chillies · cilantro", price: "₹490" },
    ],
  },
  {
    title: "Coffee Bar",
    icon: <Coffee className="h-5 w-5" />,
    img: espresso,
    items: [
      { name: "Flat White", desc: "Velvet microfoam · double ristretto", price: "₹210" },
      { name: "Pour Over", desc: "Single-origin · changes weekly", price: "₹240" },
      { name: "Iced Mocha", desc: "Dark cocoa · espresso · cold milk", price: "₹250" },
    ],
  },
  {
    title: "Mocktails & More",
    icon: <Wine className="h-5 w-5" />,
    img: mocktail,
    items: [
      { name: "Garden Spritz", desc: "Cucumber · elderflower · tonic", price: "₹280" },
      { name: "Berry Sour", desc: "Mixed berries · lime · rosemary", price: "₹290" },
      { name: "Kin Kombucha", desc: "House-brewed · ginger · honey", price: "₹230" },
    ],
  },
  {
    title: "Sweet Endings",
    icon: <Cake className="h-5 w-5" />,
    img: latte,
    items: [
      { name: "Tiramisu Jar", desc: "Mascarpone · espresso-soaked sponge", price: "₹240" },
      { name: "Basque Cheesecake", desc: "Burnt top · creamy centre", price: "₹260" },
      { name: "Warm Brownie", desc: "Vanilla bean ice cream", price: "₹220" },
    ],
  },
];

function MenuSection() {
  return (
    <section id="menu" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-accent">All-Day Menu</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-5xl md:text-6xl text-pretty">
              Plates to linger over.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {menu.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <article className="lift group overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={cat.img} alt={cat.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3 text-cream">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">{cat.icon}</span>
                    <h3 className="font-display text-3xl">{cat.title}</h3>
                  </div>
                </div>
                <ul className="divide-y divide-border">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-6 px-6 py-5 hover:bg-secondary/50 transition-colors">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-lg text-accent">{item.price}</span>
                        <a
                          href={wa(`Hi! I'd like to order: ${item.name} (${item.price}).`)}
                          target="_blank" rel="noreferrer"
                          aria-label={`Order ${item.name} via WhatsApp`}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- The space (cinematic vertical) */
const zones = [
  { img: bar, title: "The Bar", text: "Where copper machines hiss and beans sing." },
  { img: table, title: "The Table", text: "A long shared table for unhurried mornings." },
  { img: plants, title: "The Garden", text: "A frangipani breathing through stone walls." },
  { img: signage, title: "After Dark", text: "String lights, slow records, second servings." },
];

function TheSpace() {
  return (
    <section id="space" className="relative bg-wood-deep text-cream">
      <div className="px-6 py-28 md:py-36 mx-auto max-w-7xl text-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-accent">The Space</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display text-5xl md:text-6xl text-cream">
            Four corners of <em className="text-accent not-italic">comfort.</em>
          </h2>
        </Reveal>
      </div>

      <div className="space-y-32 md:space-y-48 pb-32">
        {zones.map((z, i) => (
          <Zone key={z.title} z={z} index={i} />
        ))}
      </div>
    </section>
  );
}
function Zone({ z, index }: { z: typeof zones[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const flip = index % 2 === 1;
  return (
    <div ref={ref} className="px-6 mx-auto max-w-7xl grid md:grid-cols-12 gap-10 items-center">
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-3xl aspect-[16/10] shadow-warm">
          <motion.img
            src={z.img}
            alt={z.title}
            loading="lazy"
            style={{ y }}
            className="absolute inset-0 h-[130%] w-full object-cover"
          />
        </div>
      </div>
      <div className={`md:col-span-5 ${flip ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
        <Reveal>
          <span className="font-display text-7xl text-accent/40">0{index + 1}</span>
          <h3 className="mt-3 font-display text-4xl md:text-5xl">{z.title}</h3>
          <p className="mt-4 text-cream/75 text-lg max-w-md">{z.text}</p>
        </Reveal>
      </div>
    </div>
  );
}

/* -------------------------------------------------- Visit */
function Visit() {
  return (
    <section id="visit" className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-warm h-full min-h-[420px]">
            <img src={exterior} alt="Kith & Kin exterior at evening" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-0 p-8 text-cream">
              <h3 className="font-display text-4xl">Come find us.</h3>
              <p className="mt-2 text-cream/80 max-w-sm">Park your day at our doorstep. Walk in, slow down.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-card p-8 md:p-10 shadow-soft h-full flex flex-col gap-8">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent">Visit Us</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">A warm welcome, always.</h2>
            </div>

            <ul className="space-y-5">
              <Info icon={<MapPin className="h-5 w-5" />} title="Address">
                42, Garden Lane, Bandra West<br />Mumbai 400050, India
              </Info>
              <Info icon={<Clock className="h-5 w-5" />} title="Hours">
                Mon – Sun · 8:00 am – 11:30 pm
              </Info>
              <Info icon={<Phone className="h-5 w-5" />} title="Reservations">
                +91 98765 43210
              </Info>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border aspect-[16/9]">
              <iframe
                title="Kith & Kin location map"
                src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={wa("Hi! I'd like to reserve a table.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:scale-[1.03] transition-transform">
                Reserve a Table <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://maps.google.com/?q=Kith+%26+Kin+Cafe" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition">
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-accent shrink-0">{icon}</span>
      <div>
        <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{title}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </li>
  );
}

/* -------------------------------------------------- Moments grid */
function Moments() {
  const imgs = [bar, table, exterior, signage, plants, latte, pizza, mocktail];
  return (
    <section className="py-28 md:py-36 px-6 bg-secondary/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-accent">Moments</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">@kithandkin</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-accent transition">
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="aspect-square overflow-hidden rounded-2xl group">
                <img src={src} alt={`Moment ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- Testimonials */
const reviews = [
  { name: "Aanya R.", text: "The kind of place where you arrive for a coffee and stay for the evening. Pizzas are unreal.", role: "Regular" },
  { name: "Karan M.", text: "Easily the warmest cafe in the city. Service feels like a hug.", role: "Mumbai Foodies" },
  { name: "Priya & Sam", text: "Our weekend ritual. The cold brew and the corner under the frangipani — perfect.", role: "Couple" },
];
function Testimonials() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Kind Words</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display text-5xl md:text-6xl text-pretty">
            Loved by our <em className="text-accent not-italic">kith & kin.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="lift h-full rounded-3xl bg-card p-8 text-left shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-pretty">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- Footer */
function Footer() {
  return (
    <footer className="bg-wood-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-2xl">Kith <span className="text-accent">&</span> Kin</span>
          </div>
          <p className="mt-5 max-w-sm text-cream/70">
            Coffee &amp; More, served with kinship. A warm corner where every cup
            and every conversation feels like coming home.
          </p>
          <a
            href={wa("Hi Kith & Kin!")} target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:scale-[1.03] transition-transform"
          >
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-cream/60">Visit</div>
          <p className="mt-3 text-cream/85">
            42, Garden Lane<br />Bandra West, Mumbai<br />8:00 am – 11:30 pm
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-cream/60">Follow</div>
          <div className="mt-3 flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-accent hover:text-accent transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-accent hover:text-accent transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Kith &amp; Kin. Brewed with love in India.</span>
          <span>Designed for the people who feel like family.</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------- Page */
export function KithAndKinHome() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <SignatureDrinks />
      <MenuSection />
      <TheSpace />
      <Visit />
      <Moments />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
