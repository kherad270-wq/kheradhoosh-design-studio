import type { Lang } from "./i18n";

export type Bi = { fa: string; en: string };
export const L = (v: Bi, lang: string) => (lang === "en" ? v.en : v.fa);
export const isRtl = (lang: string) => lang !== "en";
export type { Lang };

export const PROFILE = {
  email: "hello@kheradhoosh.design",
  linkedin: "https://www.linkedin.com/in/kheradhoosh",
  behance: "https://www.behance.net/kheradhoosh",
  resume: "/resume-mohamad-kheradhoosh.pdf",
};

export const STATS: { value: string; key: "years" | "products" | "industries" }[] = [
  { value: "15+", key: "years" },
  { value: "40+", key: "products" },
  { value: "8+", key: "industries" },
];

export const PILLARS: { title: Bi; body: Bi }[] = [
  {
    title: { fa: "کسب‌وکار", en: "Business" },
    body: {
      fa: "هر تصمیم طراحی یک تصمیم اقتصادی است. کار را از مدل درآمد، محدودیت‌ها و شاخص‌های موفقیت شروع می‌کنم، نه از صفحه سفید فیگما.",
      en: "Every design decision is an economic decision. I start from the revenue model, the constraints and the success metrics — not from an empty Figma canvas.",
    },
  },
  {
    title: { fa: "کاربران", en: "Users" },
    body: {
      fa: "پژوهش برای من مرحله‌ای در ابتدای پروژه نیست؛ عادتی همیشگی است. مصاحبه، مشاهده رفتار و داده کمی، جهت محصول را تصحیح می‌کنند.",
      en: "Research is not a phase at the start of a project; it is a standing habit. Interviews, behavioural observation and quantitative data keep correcting the product's direction.",
    },
  },
  {
    title: { fa: "فناوری", en: "Technology" },
    body: {
      fa: "با تیم مهندسی به زبان مشترک حرف می‌زنم. سیستم طراحی را به توکن، کامپوننت و کد قابل نگهداری ترجمه می‌کنم تا طراحی در تولید زنده بماند.",
      en: "I speak the engineering team's language. I translate design systems into tokens, components and maintainable code so the design survives production.",
    },
  },
  {
    title: { fa: "استراتژی و رهبری", en: "Strategy & Leadership" },
    body: {
      fa: "طراحان ارشد را راهنمایی می‌کنم، فرایند نقد را می‌سازم و کیفیت را در مقیاس تیم تضمین می‌کنم؛ بدون تبدیل شدن به گلوگاه.",
      en: "I mentor senior designers, build the critique practice and hold quality at team scale — without becoming the bottleneck.",
    },
  },
];

export type Experience = {
  company: Bi;
  role: Bi;
  period: Bi;
  industry: Bi;
  summary: Bi;
  responsibilities: Bi[];
  impact: Bi[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: { fa: "استودیو مستقل", en: "Independent Studio" },
    role: { fa: "طراح محصول ارشد و مشاور", en: "Senior Product Designer & Advisor" },
    period: { fa: "۲۰۲۲ — اکنون", en: "2022 — Present" },
    industry: { fa: "SaaS · فین‌تک · ابزارهای هوش مصنوعی", en: "SaaS · Fintech · AI tooling" },
    summary: {
      fa: "همکاری با تیم‌های محصول بین‌المللی به‌عنوان طراح ارشد و مشاور استراتژی؛ از کشف مسئله تا تحویل سیستم طراحی و پیاده‌سازی.",
      en: "Partnering with international product teams as a senior designer and strategy advisor — from problem discovery to delivered design systems and implementation.",
    },
    responsibilities: [
      { fa: "هدایت کشف محصول و تعریف استراتژی تجربه", en: "Leading product discovery and experience strategy" },
      { fa: "طراحی و نگهداری سیستم‌های طراحی چندمحصولی", en: "Designing and maintaining multi-product design systems" },
      { fa: "ساخت پروتوتایپ‌های قابل آزمایش با کمک هوش مصنوعی", en: "Building testable prototypes with AI-assisted workflows" },
    ],
    impact: [
      { fa: "کاهش ۴۰٪ زمان تحویل از ایده تا نمونه قابل تست", en: "40% faster path from idea to testable prototype" },
      { fa: "راه‌اندازی سیستم طراحی برای سه محصول هم‌زمان", en: "Shipped a shared design system across three products" },
    ],
  },
  {
    company: { fa: "پلتفرم فین‌تک منطقه‌ای", en: "Regional Fintech Platform" },
    role: { fa: "سرپرست طراحی محصول", en: "Product Design Lead" },
    period: { fa: "۲۰۱۸ — ۲۰۲۲", en: "2018 — 2022" },
    industry: { fa: "بانکداری دیجیتال", en: "Digital banking" },
    summary: {
      fa: "رهبری تیم پنج‌نفره طراحی برای اپلیکیشن بانکی با بیش از دو میلیون کاربر فعال ماهانه.",
      en: "Led a team of five designers on a banking app serving more than two million monthly active users.",
    },
    responsibilities: [
      { fa: "مدیریت و مربی‌گری تیم طراحی", en: "Managing and mentoring the design team" },
      { fa: "بازطراحی کامل جریان‌های پرداخت و احراز هویت", en: "Full redesign of payment and onboarding flows" },
      { fa: "استقرار فرایند پژوهش پیوسته", en: "Establishing a continuous research practice" },
    ],
    impact: [
      { fa: "افزایش ۳۲٪ نرخ تکمیل ثبت‌نام", en: "32% increase in onboarding completion" },
      { fa: "کاهش ۲۵٪ تماس‌های پشتیبانی مرتبط با پرداخت", en: "25% fewer payment-related support contacts" },
    ],
  },
  {
    company: { fa: "گروه تجارت الکترونیک", en: "E-Commerce Group" },
    role: { fa: "طراح ارشد تجربه کاربری", en: "Senior UX Designer" },
    period: { fa: "۲۰۱۴ — ۲۰۱۸", en: "2014 — 2018" },
    industry: { fa: "خرده‌فروشی آنلاین · لجستیک", en: "Online retail · Logistics" },
    summary: {
      fa: "طراحی تجربه خرید، جست‌وجو و پرداخت برای بازارگاهی با میلیون‌ها بازدید ماهانه.",
      en: "Designed browse, search and checkout experiences for a marketplace with millions of monthly sessions.",
    },
    responsibilities: [
      { fa: "طراحی جریان‌های جست‌وجو و صفحه محصول", en: "Search and product detail experience design" },
      { fa: "اجرای برنامه تست A/B با تیم داده", en: "Running an A/B testing program with the data team" },
    ],
    impact: [
      { fa: "رشد ۱۸٪ نرخ تبدیل سبد خرید", en: "18% lift in cart conversion" },
      { fa: "کاهش ۲۱٪ نرخ رها کردن جست‌وجو", en: "21% drop in search abandonment" },
    ],
  },
  {
    company: { fa: "آژانس محصول دیجیتال", en: "Digital Product Agency" },
    role: { fa: "طراح رابط و تجربه کاربری", en: "UI/UX Designer" },
    period: { fa: "۲۰۱۱ — ۲۰۱۴", en: "2011 — 2014" },
    industry: { fa: "سلامت · آموزش · صنعتی", en: "Health · Education · Industrial" },
    summary: {
      fa: "طراحی بیش از بیست محصول برای صنایع مختلف؛ دوره‌ای که پایه تفکر سیستمی من شکل گرفت.",
      en: "Designed more than twenty products across industries — the years that shaped my systems thinking.",
    },
    responsibilities: [
      { fa: "طراحی محصول از صفر تا تحویل", en: "End-to-end product design" },
      { fa: "همکاری نزدیک با تیم‌های مهندسی مشتریان", en: "Close collaboration with client engineering teams" },
    ],
    impact: [
      { fa: "تحویل بیش از ۲۰ محصول در ۳ سال", en: "Shipped 20+ products in three years" },
    ],
  },
];

export type Project = {
  slug: string;
  title: Bi;
  subtitle: Bi;
  year: string;
  role: Bi;
  sector: Bi;
  cover: string;
  problem: Bi;
  research: Bi;
  process: Bi;
  wireframes: Bi;
  designSystem: Bi;
  finalUi: Bi;
  results: Bi[];
  lessons: Bi;
};

export const PROJECTS: Project[] = [
  {
    slug: "atlas-banking",
    title: { fa: "اطلس بانکینگ", en: "Atlas Banking" },
    subtitle: {
      fa: "بازطراحی کامل تجربه بانکداری موبایل برای دو میلیون کاربر",
      en: "A full redesign of mobile banking for two million users",
    },
    year: "2021",
    role: { fa: "سرپرست طراحی محصول", en: "Product Design Lead" },
    sector: { fa: "فین‌تک", en: "Fintech" },
    cover: "atlas",
    problem: {
      fa: "اپلیکیشن پس از هفت سال توسعه تدریجی به مجموعه‌ای از قابلیت‌های ناهماهنگ تبدیل شده بود. کاربران تازه‌وارد در مرحله احراز هویت متوقف می‌شدند و تیم پشتیبانی زیر فشار بود.",
      en: "After seven years of incremental development the app had become a pile of inconsistent features. New users stalled during verification and the support team was overwhelmed.",
    },
    research: {
      fa: "۳۲ مصاحبه عمیق، تحلیل ۹۰ روز داده رفتاری و بازبینی ۴٬۰۰۰ تیکت پشتیبانی. سه الگوی شکست تکرارشونده شناسایی شد.",
      en: "32 in-depth interviews, ninety days of behavioural analytics and a review of 4,000 support tickets surfaced three repeating failure patterns.",
    },
    process: {
      fa: "کارگاه‌های هم‌آفرینی با محصول، ریسک و مهندسی؛ نقشه سفر جدید؛ سه دور تست کاربری روی نمونه‌های تعاملی پیش از نوشتن یک خط کد.",
      en: "Co-creation workshops with product, risk and engineering; a rebuilt journey map; three rounds of usability testing on interactive prototypes before a line of code was written.",
    },
    wireframes: {
      fa: "بیش از ۱۲۰ وایرفریم با تمرکز روی کاهش گام‌های احراز هویت از یازده به شش گام.",
      en: "Over 120 wireframes focused on cutting verification from eleven steps down to six.",
    },
    designSystem: {
      fa: "سیستم طراحی «اطلس» با ۱۸۰ کامپوننت، توکن‌های معنایی و پشتیبانی کامل از راست‌به‌چپ و دسترسی‌پذیری AA.",
      en: "The Atlas design system: 180 components, semantic tokens, full RTL support and AA accessibility baked in.",
    },
    finalUi: {
      fa: "رابط آرام و تایپوگرافی‌محور با سلسله‌مراتب روشن، حالت تاریک بومی و انیمیشن‌های کارکردی.",
      en: "A calm, typography-led interface with clear hierarchy, native dark mode and purely functional motion.",
    },
    results: [
      { fa: "افزایش ۳۲٪ تکمیل ثبت‌نام", en: "32% increase in onboarding completion" },
      { fa: "کاهش ۲۵٪ تماس پشتیبانی", en: "25% fewer support contacts" },
      { fa: "رشد ۴.۲ به ۴.۷ امتیاز فروشگاه", en: "App store rating up from 4.2 to 4.7" },
    ],
    lessons: {
      fa: "بزرگ‌ترین برد پروژه از حذف قابلیت‌ها آمد، نه اضافه کردن آن‌ها. متقاعد کردن ذی‌نفعان برای حذف، بخش سخت کار بود.",
      en: "The biggest win came from removing features, not adding them. Convincing stakeholders to subtract was the hard part.",
    },
  },
  {
    slug: "nova-ai-studio",
    title: { fa: "استودیو هوش مصنوعی نوا", en: "Nova AI Studio" },
    subtitle: {
      fa: "ابزار داخلی برای تیم‌های محصول جهت ساخت جریان‌های مبتنی بر مدل زبانی",
      en: "An internal tool for product teams building LLM-powered flows",
    },
    year: "2024",
    role: { fa: "طراح محصول هوش مصنوعی", en: "AI Product Designer" },
    sector: { fa: "ابزار داخلی · SaaS", en: "Internal tooling · SaaS" },
    cover: "nova",
    problem: {
      fa: "تیم‌های محصول بدون درک قابل اتکا از رفتار مدل، ویژگی‌های هوش مصنوعی می‌ساختند و نتیجه، تجربه‌های غیرقابل پیش‌بینی بود.",
      en: "Product teams were shipping AI features without a reliable mental model of how the model behaved, producing unpredictable experiences.",
    },
    research: {
      fa: "مطالعه سایه‌ای روی هفت تیم، تحلیل ۲۰۰ لاگ گفتگو و کارگاه شناسایی نقاط بی‌اعتمادی.",
      en: "Shadowing seven teams, analysing 200 conversation logs and running a workshop to locate the moments of distrust.",
    },
    process: {
      fa: "طراحی الگوهای تعامل برای عدم قطعیت: حالت‌های اطمینان، مسیرهای بازگشت و کنترل انسانی در حلقه.",
      en: "Designed interaction patterns for uncertainty: confidence states, recovery paths and human-in-the-loop controls.",
    },
    wireframes: {
      fa: "وایرفریم‌های موازی برای سه سطح تخصص کاربر، از طراح تا مهندس.",
      en: "Parallel wireframe tracks for three levels of user expertise, from designer to engineer.",
    },
    designSystem: {
      fa: "کتابخانه الگوهای هوش مصنوعی: وضعیت تولید، منابع، بازخورد و خطا — قابل استفاده در تمام محصولات سازمان.",
      en: "An AI pattern library — generation states, sources, feedback and errors — reusable across the whole portfolio.",
    },
    finalUi: {
      fa: "فضای کاری دو ستونی با ویرایشگر دستور و بوم آزمایش زنده.",
      en: "A two-column workspace pairing a prompt editor with a live evaluation canvas.",
    },
    results: [
      { fa: "کاهش ۵۰٪ زمان ساخت اولین نمونه", en: "50% faster first prototype" },
      { fa: "پذیرش توسط ۹ تیم محصول در شش ماه", en: "Adopted by nine product teams in six months" },
    ],
    lessons: {
      fa: "طراحی برای هوش مصنوعی یعنی طراحی برای احتمال. رابط باید خطا را محترمانه و قابل بازیابی نشان دهد.",
      en: "Designing for AI means designing for probability. The interface has to make failure graceful and recoverable.",
    },
  },
  {
    slug: "meridian-commerce",
    title: { fa: "مریدین کامرس", en: "Meridian Commerce" },
    subtitle: {
      fa: "بازطراحی جست‌وجو و پرداخت برای یک بازارگاه بزرگ",
      en: "Rebuilding search and checkout for a large marketplace",
    },
    year: "2017",
    role: { fa: "طراح ارشد تجربه کاربری", en: "Senior UX Designer" },
    sector: { fa: "تجارت الکترونیک", en: "E-commerce" },
    cover: "meridian",
    problem: {
      fa: "کاربران محصول مناسب را پیدا نمی‌کردند و سبد خرید در گام پرداخت رها می‌شد.",
      en: "Shoppers could not find the right product, and carts were abandoned at the payment step.",
    },
    research: {
      fa: "تحلیل ۱.۲ میلیون جست‌وجو، تست درخت اطلاعات و مصاحبه با فروشندگان.",
      en: "Analysis of 1.2 million queries, tree testing of the taxonomy and interviews with sellers.",
    },
    process: {
      fa: "بازسازی دسته‌بندی، طراحی فیلترهای وضعیت‌محور و ساده‌سازی پرداخت به یک صفحه.",
      en: "Rebuilt the taxonomy, designed stateful filters and collapsed checkout into a single page.",
    },
    wireframes: {
      fa: "نمونه‌های موبایل‌اول برای صفحه نتایج، با تمرکز بر تراکم اطلاعات قابل اسکن.",
      en: "Mobile-first results-page explorations focused on scannable information density.",
    },
    designSystem: {
      fa: "کتابخانه کارت محصول و شبکه واکنش‌گرا با قواعد دقیق تصویر.",
      en: "A product-card library and responsive grid with strict imagery rules.",
    },
    finalUi: {
      fa: "شبکه آرام با تصاویر بزرگ، تایپوگرافی خوانا و بدون نویز بصری.",
      en: "A quiet grid with large imagery, readable typography and no visual noise.",
    },
    results: [
      { fa: "رشد ۱۸٪ نرخ تبدیل", en: "18% conversion lift" },
      { fa: "کاهش ۲۱٪ رها کردن جست‌وجو", en: "21% less search abandonment" },
    ],
    lessons: {
      fa: "سرعت ادراک‌شده به اندازه سرعت واقعی اهمیت دارد؛ طراحی حالت‌های بارگذاری، بخشی از طراحی جست‌وجوست.",
      en: "Perceived speed matters as much as real speed; designing loading states is part of designing search.",
    },
  },
];

export const AI_TOOLS: { name: string; use: Bi }[] = [
  { name: "ChatGPT", use: { fa: "ساختاردهی پژوهش و تحلیل مصاحبه", en: "Structuring research and synthesising interviews" } },
  { name: "Claude", use: { fa: "نوشتن مستندات محصول و بازبینی منطق جریان", en: "Product documentation and reviewing flow logic" } },
  { name: "Gemini", use: { fa: "تحلیل داده و بررسی رقبا", en: "Data analysis and competitive review" } },
  { name: "Lovable", use: { fa: "ساخت سریع نمونه‌های واقعی و قابل تست", en: "Shipping real, testable product prototypes" } },
  { name: "Cursor", use: { fa: "پیاده‌سازی کامپوننت‌های سیستم طراحی", en: "Implementing design-system components" } },
  { name: "Claude Code", use: { fa: "بازآرایی کد و اتصال طراحی به مخزن", en: "Refactoring and wiring design into the repo" } },
  { name: "Google AI Studio", use: { fa: "آزمایش مدل‌ها و طراحی دستورها", en: "Model experiments and prompt design" } },
  { name: "Bolt", use: { fa: "نمونه‌سازی فوری ایده‌های اولیه", en: "Instant scaffolding of early ideas" } },
];

export const AI_STEPS: { step: string; title: Bi; body: Bi }[] = [
  {
    step: "01",
    title: { fa: "پژوهش", en: "Research" },
    body: {
      fa: "خلاصه‌سازی مصاحبه‌ها، کدگذاری کیفی و استخراج الگو در ساعت‌ها به‌جای هفته‌ها — با بازبینی انسانی روی هر نتیجه.",
      en: "Interview synthesis, qualitative coding and pattern extraction in hours instead of weeks — with human review on every output.",
    },
  },
  {
    step: "02",
    title: { fa: "ایده‌پردازی", en: "Ideation" },
    body: {
      fa: "تولید دامنه وسیع‌تری از راه‌حل‌ها و نقد سریع آن‌ها برای رسیدن به گزینه‌های واقعاً متفاوت.",
      en: "Generating a wider solution space and critiquing it fast to reach genuinely different options.",
    },
  },
  {
    step: "03",
    title: { fa: "پروتوتایپ", en: "Prototyping" },
    body: {
      fa: "تبدیل جریان‌ها به نمونه‌های کارکردی با داده واقعی؛ تست با کاربر روی چیزی که واقعاً کار می‌کند.",
      en: "Turning flows into working prototypes with real data, so users test something that actually behaves.",
    },
  },
  {
    step: "04",
    title: { fa: "پیاده‌سازی", en: "Implementation" },
    body: {
      fa: "همراهی با مهندسی در تبدیل توکن‌ها و کامپوننت‌ها به کد تولیدی و کاهش فاصله طراحی و محصول نهایی.",
      en: "Pairing with engineering to turn tokens and components into production code, closing the gap between design and shipped product.",
    },
  },
];

export const SKILL_GROUPS: { title: Bi; items: string[] }[] = [
  {
    title: { fa: "استراتژی محصول", en: "Product Strategy" },
    items: ["Product Discovery", "Vision & Roadmapping", "Jobs to be Done", "Opportunity Mapping", "OKRs", "Workshop Facilitation"],
  },
  {
    title: { fa: "پژوهش", en: "Research" },
    items: ["User Interviews", "Usability Testing", "Survey Design", "Behavioural Analytics", "A/B Testing", "Research Ops"],
  },
  {
    title: { fa: "طراحی", en: "Design" },
    items: ["Interaction Design", "Information Architecture", "Design Systems", "Typography", "RTL & i18n Design", "Motion Design", "Accessibility (WCAG AA)"],
  },
  {
    title: { fa: "هوش مصنوعی", en: "AI" },
    items: ["AI UX Patterns", "Prompt Design", "Human-in-the-loop", "Evaluation Design", "AI-assisted Prototyping"],
  },
  {
    title: { fa: "پیاده‌سازی", en: "Implementation" },
    items: ["React", "TypeScript", "Tailwind CSS", "Design Tokens", "Figma Variables", "Storybook", "Git"],
  },
  {
    title: { fa: "رهبری", en: "Leadership" },
    items: ["Team Mentorship", "Design Critique", "Hiring & Portfolio Review", "Stakeholder Alignment", "Design Ops"],
  },
];
