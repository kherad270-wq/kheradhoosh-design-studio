import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type Lang = "fa" | "en";
export const LANG_STORAGE_KEY = "mk-lang";

const fa = {
  nav: {
    home: "خانه",
    about: "درباره",
    experience: "تجربه",
    work: "نمونه‌کار",
    ai: "هوش مصنوعی",
    contact: "تماس",
    menu: "منو",
    close: "بستن",
  },
  common: {
    viewProjects: "مشاهده پروژه‌ها",
    downloadResume: "دریافت رزومه",
    readCase: "خواندن مطالعه موردی",
    allProjects: "همه پروژه‌ها",
    back: "بازگشت",
    lang: "تغییر زبان",
    theme: "تغییر تم",
    email: "ایمیل",
    resume: "رزومه",
    next: "پروژه بعدی",
  },
  hero: {
    eyebrow: "طراح محصول ارشد — ایران",
    name: "محمد خردهوش",
    roles: "طراح محصول ارشد · طراح محصول هوش مصنوعی · استراتژیست تجربه کاربری",
    statement:
      "پانزده سال است که چالش‌های پیچیده کسب‌وکار را به محصولات دیجیتال کاربرمحور تبدیل می‌کنم؛ از استراتژی و پژوهش تا سیستم طراحی و پیاده‌سازی نهایی.",
    portraitAlt: "پرتره سیاه و سفید محمد خردهوش، طراح محصول ارشد",
  },
  stats: {
    years: "سال تجربه",
    products: "محصول",
    industries: "صناعت",
  },
  about: {
    eyebrow: "فلسفه طراحی",
    title: "طراحی، نقطه تلاقی کسب‌وکار، فناوری و انسان است.",
    lead: "من طراحی را تزئین محصول نمی‌دانم. طراحی برای من روشی برای تفکر است؛ روشی برای کوچک کردن ابهام، روشن کردن تصمیم‌ها و ساختن چیزی که هم برای مردم معنا دارد و هم برای کسب‌وکار نتیجه می‌سازد.",
  },
  experience: { eyebrow: "مسیر حرفه‌ای", title: "پانزده سال ساختن محصول" },
  work: {
    eyebrow: "نمونه‌کار منتخب",
    title: "پروژه‌هایی که نتیجه ساختند",
    lead: "چند نمونه از کارهایی که در آن‌ها از استراتژی تا پیاده‌سازی درگیر بوده‌ام.",
  },
  ai: {
    eyebrow: "جریان کاری هوش مصنوعی",
    title: "هوش مصنوعی، شتاب‌دهنده قضاوت طراحی",
    lead: "هوش مصنوعی جای تفکر طراحی را نمی‌گیرد؛ فاصله میان ایده و نمونه قابل آزمایش را کوتاه می‌کند. پژوهش سریع‌تر، ایده‌پردازی وسیع‌تر و پروتوتایپ‌های واقعی‌تر.",
    toolsTitle: "ابزارهای روزمره",
  },
  skills: { eyebrow: "مهارت‌ها", title: "دامنه تخصص" },
  contact: {
    eyebrow: "تماس",
    title: "بیایید درباره محصول بعدی حرف بزنیم.",
    lead: "برای همکاری، فرصت‌های دورکاری و مشاوره طراحی محصول در دسترس هستم.",
  },
  footer: { credit: "طراحی و توسعه توسط محمد خردهوش", year: "۲۰۲۶" },
};

const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    work: "Work",
    ai: "AI Workflow",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  common: {
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    readCase: "Read case study",
    allProjects: "All projects",
    back: "Back",
    lang: "Switch language",
    theme: "Toggle theme",
    email: "Email",
    resume: "Resume",
    next: "Next project",
  },
  hero: {
    eyebrow: "Senior Product Designer — Iran",
    name: "Mohamad Kheradhoosh",
    roles: "Senior Product Designer · AI Product Designer · UX Strategist",
    statement:
      "For fifteen years I have turned complex business challenges into user-centered digital products — from strategy and research to design systems and shipped implementation.",
    portraitAlt: "Black and white portrait of Mohamad Kheradhoosh, senior product designer",
  },
  stats: { years: "Years", products: "Products", industries: "Industries" },
  about: {
    eyebrow: "Design Philosophy",
    title: "Design is where business, technology and people meet.",
    lead: "I do not treat design as decoration. Design is a way of thinking — a way to shrink ambiguity, sharpen decisions and build something that means something to people while producing outcomes for the business.",
  },
  experience: { eyebrow: "Career", title: "Fifteen years of shipping product" },
  work: {
    eyebrow: "Selected Work",
    title: "Projects that produced outcomes",
    lead: "A few engagements where I owned the work from strategy through implementation.",
  },
  ai: {
    eyebrow: "AI Workflow",
    title: "AI as an accelerator for design judgement",
    lead: "AI does not replace design thinking. It shortens the distance between an idea and something testable — faster research, wider ideation, more honest prototypes.",
    toolsTitle: "Daily tools",
  },
  skills: { eyebrow: "Skills", title: "Areas of expertise" },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about the next product.",
    lead: "Available for collaborations, remote roles and product design advisory.",
  },
  footer: { credit: "Designed by Mohamad Kheradhoosh", year: "2026" },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { fa: { translation: fa }, en: { translation: en } },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
