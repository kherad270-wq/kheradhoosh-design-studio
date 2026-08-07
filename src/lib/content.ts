import type { Lang } from "./i18n";

export type Bi = {
  fa: string;
  en: string;
};

export const L = (v: Bi, lang: string) =>
  lang === "en" ? v.en : v.fa;

export const isRtl = (lang: string) => lang !== "en";

export type { Lang };


/* =========================
   PROFILE
========================= */

export const PROFILE = {

  name: {
    fa: "محمد خردهوش",
    en: "Mohamad Kheradhoosh",
  },

  title: {
    fa: "طراح محصول ارشد",
    en: "Senior Product Designer",
  },

  roles: {
    fa:
      "AI Product Designer · UX Strategist · Design System Specialist",

    en:
      "AI Product Designer · UX Strategist · Design System Specialist",
  },

  experience: {
    fa: "بیش از ۱۵ سال تجربه در طراحی محصولات دیجیتال",
    en: "15+ years of experience designing digital products",
  },

  location: {
    fa: "ایران",
    en: "Iran",
  },

  email: "hello@kheradhoosh.design",

  linkedin:
    "https://www.linkedin.com/in/kheradhoosh",

  behance:
    "https://www.behance.net/kheradhoosh",

  resume:
    "/resume-mohamad-kheradhoosh.pdf",

};


/* =========================
   STATS
========================= */

export const STATS: {
  value: string;
  key: "years" | "products" | "industries";
}[] = [

  {
    value: "15+",
    key: "years",
  },

  {
    value: "40+",
    key: "products",
  },

  {
    value: "10+",
    key: "industries",
  },

];



/* =========================
   DESIGN PILLARS
========================= */

export const PILLARS = [

{
title:{
  fa:"محصول و کسب‌وکار",
  en:"Product & Business"
},

body:{

fa:
"طراحی را از مسئله واقعی کسب‌وکار شروع می‌کنم؛ جایی که اهداف محصول، نیاز کاربران و محدودیت‌های تکنولوژی به یک تجربه ارزشمند تبدیل می‌شوند.",

en:
"I start design from real business problems, connecting product goals, user needs and technology constraints into valuable experiences."

}

},


{
title:{
fa:"تجربه کاربر",
en:"User Experience"
},

body:{

fa:
"با تحقیق کاربر، معماری اطلاعات و طراحی تعامل، محصولات پیچیده را به تجربه‌هایی ساده و قابل استفاده تبدیل می‌کنم.",

en:
"Through user research, information architecture and interaction design, I transform complex products into simple experiences."

}

},


{
title:{
fa:"سیستم طراحی",
en:"Design Systems"
},

body:{

fa:
"طراحی سیستم‌های قابل توسعه، ساخت کامپوننت‌ها و ایجاد زبان مشترک بین طراحی و توسعه.",

en:
"Building scalable design systems and creating a shared language between design and engineering."

}

},


{
title:{
fa:"هوش مصنوعی",
en:"Artificial Intelligence"
},

body:{

fa:
"استفاده از ابزارهای هوش مصنوعی برای تحقیق، ایده‌پردازی، نمونه‌سازی و توسعه سریع‌تر محصولات دیجیتال.",

en:
"Using AI tools for research, ideation, prototyping and faster digital product development."

}

}

];



/* =========================
   EXPERIENCE TYPE
========================= */


export type Experience = {

company: Bi;

role: Bi;

period: Bi;

industry: Bi;

summary: Bi;

responsibilities: Bi[];

impact: Bi[];

};



/* =========================
   EXPERIENCE
========================= */


export const EXPERIENCES: Experience[] = [

{
company:{
fa:"بیت‌بان",
en:"Bitbaan"
},

role:{
fa:"طراح محصول ارشد",
en:"Senior Product Designer"
},

period:{
fa:"۱۳۹۸ — اکنون",
en:"2019 — Present"
},

industry:{
fa:"امنیت سایبری · آنتی‌ویروس",
en:"Cyber Security · Antivirus"
},

summary:{

fa:
"طراحی تجربه محصولات امنیتی با تمرکز بر سادگی، اعتماد و تبدیل مفاهیم پیچیده فنی به تجربه‌ای قابل فهم برای کاربران.",

en:
"Designing security products with focus on simplicity, trust and transforming complex technical concepts into understandable experiences."

},

responsibilities:[

{
fa:"طراحی UX/UI محصولات امنیت دیجیتال",
en:"Designing UX/UI for digital security products"
},

{
fa:"ایجاد و توسعه Design System",
en:"Creating and evolving design systems"
},

{
fa:"همکاری با تیم محصول، توسعه و کسب‌وکار",
en:"Collaborating with product, engineering and business teams"
}

],

impact:[

{
fa:"بهبود یکپارچگی تجربه محصولات",
en:"Improved product experience consistency"
},

{
fa:"کاهش پیچیدگی تعامل کاربران",
en:"Reduced user interaction complexity"
}

]

},


{
company:{
fa:"بیداپین",
en:"Bidopin"
},

role:{
fa:"طراح محصول",
en:"Product Designer"
},

period:{
fa:"۱۳۹۷ — ۱۳۹۸",
en:"2018 — 2019"
},

industry:{
fa:"محصولات دیجیتال",
en:"Digital Products"
},

summary:{

fa:
"طراحی تجربه محصولات دیجیتال و تبدیل نیازهای کسب‌وکار به راهکارهای کاربردی.",

en:
"Designing digital products and translating business requirements into usable solutions."

},

responsibilities:[

{
fa:"طراحی Wireframe و Prototype",
en:"Creating wireframes and prototypes"
},

{
fa:"طراحی رابط کاربری",
en:"Designing user interfaces"
},

{
fa:"همکاری با توسعه‌دهندگان",
en:"Working with developers"
}

],

impact:[

{
fa:"بهبود تجربه بخش‌های اصلی محصول",
en:"Improved key product experiences"
}

]

},

];
/* =========================
   PROJECTS
========================= */


export type Project = {

slug:string;

title:Bi;

subtitle:Bi;

year:string;

role:Bi;

sector:Bi;

cover:string;

problem:Bi;

research:Bi;

process:Bi;

wireframes:Bi;

designSystem:Bi;

finalUi:Bi;

results:Bi[];

lessons:Bi;

};



export const PROJECTS:Project[] = [


/* =====================
   BITBAAN
===================== */


{

slug:"bitbaan-security",

title:{
fa:"بیت‌بان",
en:"Bitbaan Security Platform"
},

subtitle:{
fa:"طراحی تجربه محصولات امنیت دیجیتال و آنتی‌ویروس",
en:"Designing digital security and antivirus experiences"
},

year:"2024",

role:{
fa:"طراح محصول ارشد",
en:"Senior Product Designer"
},

sector:{
fa:"امنیت سایبری",
en:"Cyber Security"
},

cover:"bitbaan",


problem:{

fa:
"محصولات امنیتی معمولاً دارای مفاهیم پیچیده فنی هستند. هدف، ایجاد تجربه‌ای ساده و قابل اعتماد برای کاربران بود.",

en:
"Security products contain complex technical concepts. The goal was creating simple and trusted experiences for users."

},


research:{

fa:
"بررسی رفتار کاربران، تحلیل جریان‌های اصلی محصول و شناسایی نقاط سردرگمی در تجربه کاربری.",

en:
"Analysing user behaviour, reviewing main product journeys and identifying UX friction points."

},


process:{

fa:
"طراحی معماری اطلاعات، وایرفریم، پروتوتایپ و همکاری نزدیک با تیم توسعه.",

en:
"Information architecture, wireframes, prototypes and close collaboration with engineering."

},


wireframes:{

fa:
"طراحی جریان‌های امنیت، وضعیت سیستم، اعلان‌ها و مدیریت کاربران.",

en:
"Designed security flows, system status, notifications and user management."

},


designSystem:{

fa:
"ساخت ساختار کامپوننت‌ها و الگوهای طراحی قابل توسعه.",

en:
"Created reusable components and scalable design patterns."

},


finalUi:{

fa:
"رابطی ساده و اعتمادساز برای نمایش وضعیت امنیت دستگاه.",

en:
"A simple trust-building interface for communicating device security."

},


results:[

{
fa:"بهبود یکپارچگی تجربه محصول",
en:"Improved product experience consistency"
},

{
fa:"کاهش پیچیدگی تعامل کاربران",
en:"Reduced user interaction complexity"
}

],


lessons:{

fa:
"در محصولات امنیتی، اعتماد مهم‌ترین بخش تجربه کاربر است.",

en:
"Trust is the most important part of security product experience."

}

},



/* =====================
   DR CAR
===================== */


{

slug:"dr-car-ai",


title:{
fa:"دکتر خودرو",
en:"Dr.Car AI Assistant"
},


subtitle:{
fa:
"دستیار هوشمند خودرو برای تشخیص و نگهداری بهتر",

en:
"AI automotive assistant for smarter vehicle maintenance"
},


year:"2026",


role:{
fa:"طراح محصول و AI Product Designer",
en:"Product Designer & AI Product Designer"
},


sector:{
fa:"AI · Automotive · Mobile",
en:"AI · Automotive · Mobile"
},


cover:"dr-car",



problem:{

fa:
"بسیاری از رانندگان اطلاعات کافی برای درک مشکلات خودرو ندارند. هدف ایجاد تجربه‌ای ساده برای فهم وضعیت خودرو بود.",

en:
"Many drivers lack knowledge to understand vehicle problems. The goal was creating a simple vehicle health experience."

},


research:{

fa:
"بررسی سناریوهای رایج خودرو و طراحی تعامل انسان و هوش مصنوعی.",

en:
"Studying common vehicle scenarios and designing human-AI interactions."

},


process:{

fa:
"طراحی Dashboard خودرو، مدل سه‌بعدی، وضعیت قطعات و جریان‌های تشخیص هوشمند.",

en:
"Designing vehicle dashboard, 3D model, component status and AI diagnostic flows."

},


wireframes:{

fa:
"طراحی مسیرهای اصلی شامل وضعیت خودرو، هشدارها و گزارش‌ها.",

en:
"Designed vehicle status, alerts and reporting flows."

},


designSystem:{

fa:
"سیستم طراحی Dark Theme مناسب داده‌های خودرو.",

en:
"Dark theme design system optimized for automotive data."

},


finalUi:{

fa:
"تجربه مدرن ارتباط راننده با خودرو با کمک AI.",

en:
"Modern AI-powered driver vehicle experience."

},


results:[

{
fa:"ساخت MVP کامل محصول",
en:"Built complete product MVP"
},

{
fa:"ترکیب طراحی محصول و توسعه Frontend",
en:"Combined product design and frontend development"
}

],


lessons:{

fa:
"بهترین تجربه‌های AI، پیچیدگی تکنولوژی را از کاربر پنهان می‌کنند.",

en:
"The best AI experiences hide technical complexity from users."

}

},



/* =====================
   QUIZ PARTY
===================== */


{

slug:"quiz-party",

title:{
fa:"Quiz Party",
en:"Quiz Party"
},


subtitle:{
fa:
"پلتفرم بازی و آزمون تعاملی",

en:
"Interactive quiz gaming platform"
},


year:"2026",


role:{
fa:"طراح محصول",
en:"Product Designer"
},


sector:{
fa:"Gaming · Web App",
en:"Gaming · Web App"
},


cover:"quiz-party",


problem:{

fa:
"ایجاد تجربه‌ای سرگرم‌کننده که باعث بازگشت دوباره کاربران شود.",

en:
"Creating an engaging experience that encourages users to return."

},


research:{

fa:
"بررسی الگوهای Gamification و سیستم‌های پیشرفت کاربر.",

en:
"Researching gamification patterns and progression systems."

},


process:{

fa:
"طراحی سیستم XP، سکه، رقابت و جریان بازی.",

en:
"Designing XP, coins, competition and gameplay systems."

},


wireframes:{

fa:
"طراحی مسیر بازی، سوالات، نتیجه و پاداش.",

en:
"Designing gameplay, questions, results and rewards."

},


designSystem:{

fa:
"ساخت کامپوننت‌های قابل استفاده برای وب اپ.",

en:
"Creating reusable web app components."

},


finalUi:{

fa:
"رابط سریع، جذاب و مناسب استفاده روزانه.",

en:
"Fast, engaging daily-use interface."

},


results:[

{
fa:"ساخت تجربه کامل بازی تحت وب",
en:"Built complete web gaming experience"
}

],


lessons:{

fa:
"احساس پیشرفت، موتور اصلی بازگشت کاربر است.",

en:
"Progress feeling is the main driver of retention."

}

}

];
/* =========================
   PROJECTS
========================= */


export type Project = {

slug:string;

title:Bi;

subtitle:Bi;

year:string;

role:Bi;

sector:Bi;

cover:string;

problem:Bi;

research:Bi;

process:Bi;

wireframes:Bi;

designSystem:Bi;

finalUi:Bi;

results:Bi[];

lessons:Bi;

};



export const PROJECTS:Project[] = [


/* =====================
   BITBAAN
===================== */


{

slug:"bitbaan-security",

title:{
fa:"بیت‌بان",
en:"Bitbaan Security Platform"
},

subtitle:{
fa:"طراحی تجربه محصولات امنیت دیجیتال و آنتی‌ویروس",
en:"Designing digital security and antivirus experiences"
},

year:"2024",

role:{
fa:"طراح محصول ارشد",
en:"Senior Product Designer"
},

sector:{
fa:"امنیت سایبری",
en:"Cyber Security"
},

cover:"bitbaan",


problem:{

fa:
"محصولات امنیتی معمولاً دارای مفاهیم پیچیده فنی هستند. هدف، ایجاد تجربه‌ای ساده و قابل اعتماد برای کاربران بود.",

en:
"Security products contain complex technical concepts. The goal was creating simple and trusted experiences for users."

},


research:{

fa:
"بررسی رفتار کاربران، تحلیل جریان‌های اصلی محصول و شناسایی نقاط سردرگمی در تجربه کاربری.",

en:
"Analysing user behaviour, reviewing main product journeys and identifying UX friction points."

},


process:{

fa:
"طراحی معماری اطلاعات، وایرفریم، پروتوتایپ و همکاری نزدیک با تیم توسعه.",

en:
"Information architecture, wireframes, prototypes and close collaboration with engineering."

},


wireframes:{

fa:
"طراحی جریان‌های امنیت، وضعیت سیستم، اعلان‌ها و مدیریت کاربران.",

en:
"Designed security flows, system status, notifications and user management."

},


designSystem:{

fa:
"ساخت ساختار کامپوننت‌ها و الگوهای طراحی قابل توسعه.",

en:
"Created reusable components and scalable design patterns."

},


finalUi:{

fa:
"رابطی ساده و اعتمادساز برای نمایش وضعیت امنیت دستگاه.",

en:
"A simple trust-building interface for communicating device security."

},


results:[

{
fa:"بهبود یکپارچگی تجربه محصول",
en:"Improved product experience consistency"
},

{
fa:"کاهش پیچیدگی تعامل کاربران",
en:"Reduced user interaction complexity"
}

],


lessons:{

fa:
"در محصولات امنیتی، اعتماد مهم‌ترین بخش تجربه کاربر است.",

en:
"Trust is the most important part of security product experience."

}

},



/* =====================
   DR CAR
===================== */


{

slug:"dr-car-ai",


title:{
fa:"دکتر خودرو",
en:"Dr.Car AI Assistant"
},


subtitle:{
fa:
"دستیار هوشمند خودرو برای تشخیص و نگهداری بهتر",

en:
"AI automotive assistant for smarter vehicle maintenance"
},


year:"2026",


role:{
fa:"طراح محصول و AI Product Designer",
en:"Product Designer & AI Product Designer"
},


sector:{
fa:"AI · Automotive · Mobile",
en:"AI · Automotive · Mobile"
},


cover:"dr-car",



problem:{

fa:
"بسیاری از رانندگان اطلاعات کافی برای درک مشکلات خودرو ندارند. هدف ایجاد تجربه‌ای ساده برای فهم وضعیت خودرو بود.",

en:
"Many drivers lack knowledge to understand vehicle problems. The goal was creating a simple vehicle health experience."

},


research:{

fa:
"بررسی سناریوهای رایج خودرو و طراحی تعامل انسان و هوش مصنوعی.",

en:
"Studying common vehicle scenarios and designing human-AI interactions."

},


process:{

fa:
"طراحی Dashboard خودرو، مدل سه‌بعدی، وضعیت قطعات و جریان‌های تشخیص هوشمند.",

en:
"Designing vehicle dashboard, 3D model, component status and AI diagnostic flows."

},


wireframes:{

fa:
"طراحی مسیرهای اصلی شامل وضعیت خودرو، هشدارها و گزارش‌ها.",

en:
"Designed vehicle status, alerts and reporting flows."

},


designSystem:{

fa:
"سیستم طراحی Dark Theme مناسب داده‌های خودرو.",

en:
"Dark theme design system optimized for automotive data."

},


finalUi:{

fa:
"تجربه مدرن ارتباط راننده با خودرو با کمک AI.",

en:
"Modern AI-powered driver vehicle experience."

},


results:[

{
fa:"ساخت MVP کامل محصول",
en:"Built complete product MVP"
},

{
fa:"ترکیب طراحی محصول و توسعه Frontend",
en:"Combined product design and frontend development"
}

],


lessons:{

fa:
"بهترین تجربه‌های AI، پیچیدگی تکنولوژی را از کاربر پنهان می‌کنند.",

en:
"The best AI experiences hide technical complexity from users."

}

},



/* =====================
   QUIZ PARTY
===================== */


{

slug:"quiz-party",

title:{
fa:"Quiz Party",
en:"Quiz Party"
},


subtitle:{
fa:
"پلتفرم بازی و آزمون تعاملی",

en:
"Interactive quiz gaming platform"
},


year:"2026",


role:{
fa:"طراح محصول",
en:"Product Designer"
},


sector:{
fa:"Gaming · Web App",
en:"Gaming · Web App"
},


cover:"quiz-party",


problem:{

fa:
"ایجاد تجربه‌ای سرگرم‌کننده که باعث بازگشت دوباره کاربران شود.",

en:
"Creating an engaging experience that encourages users to return."

},


research:{

fa:
"بررسی الگوهای Gamification و سیستم‌های پیشرفت کاربر.",

en:
"Researching gamification patterns and progression systems."

},


process:{

fa:
"طراحی سیستم XP، سکه، رقابت و جریان بازی.",

en:
"Designing XP, coins, competition and gameplay systems."

},


wireframes:{

fa:
"طراحی مسیر بازی، سوالات، نتیجه و پاداش.",

en:
"Designing gameplay, questions, results and rewards."

},


designSystem:{

fa:
"ساخت کامپوننت‌های قابل استفاده برای وب اپ.",

en:
"Creating reusable web app components."

},


finalUi:{

fa:
"رابط سریع، جذاب و مناسب استفاده روزانه.",

en:
"Fast, engaging daily-use interface."

},


results:[

{
fa:"ساخت تجربه کامل بازی تحت وب",
en:"Built complete web gaming experience"
}

],


lessons:{

fa:
"احساس پیشرفت، موتور اصلی بازگشت کاربر است.",

en:
"Progress feeling is the main driver of retention."

}

}

];
/* =========================
   AI TOOLS
========================= */

export const AI_TOOLS = [

{
name:"ChatGPT",

use:{
fa:"تحقیق، تحلیل، ساختاردهی ایده‌ها و کمک در فرآیند طراحی",

en:"Research, analysis, ideation and design workflow support"
}

},


{
name:"Claude",

use:{
fa:"مستندسازی محصول، تحلیل جریان‌ها و بازبینی UX",

en:"Product documentation, flow analysis and UX review"
}

},


{
name:"Gemini",

use:{
fa:"تحلیل داده، بررسی رقبا و آزمایش قابلیت‌های AI",

en:"Data analysis, competitive research and AI experiments"
}

},


{
name:"Lovable",

use:{
fa:"ساخت سریع نمونه‌های واقعی و قابل تست",

en:"Rapid creation of real testable prototypes"
}

},


{
name:"Cursor",

use:{
fa:"پیاده‌سازی کامپوننت‌ها و همکاری طراحی با کد",

en:"Implementing components and connecting design with code"
}

},


{
name:"Claude Code",

use:{
fa:"بازبینی کد، Refactor و توسعه سریع‌تر",

en:"Code review, refactoring and faster development"
}

},


{
name:"Google AI Studio",

use:{
fa:"آزمایش مدل‌های هوش مصنوعی و Prompt Engineering",

en:"AI model experiments and prompt engineering"
}

},


{
name:"Bolt",

use:{
fa:"نمونه‌سازی سریع ایده‌های اولیه",

en:"Rapid early idea prototyping"
}

}

];



/* =========================
   AI WORKFLOW
========================= */


export const AI_STEPS = [

{

step:"01",

title:{
fa:"تحقیق",
en:"Research"
},

body:{

fa:
"استفاده از AI برای خلاصه‌سازی تحقیقات، تحلیل داده‌ها و استخراج الگوهای رفتاری.",

en:
"Using AI to synthesize research, analyse data and discover behavioural patterns."

}

},


{

step:"02",

title:{
fa:"ایده‌پردازی",
en:"Ideation"
},

body:{

fa:
"تولید سریع سناریوهای مختلف و بررسی راهکارهای طراحی.",

en:
"Generating multiple scenarios and exploring design solutions."

}

},


{

step:"03",

title:{
fa:"نمونه‌سازی",
en:"Prototyping"
},

body:{

fa:
"تبدیل ایده‌ها به Prototype قابل تست با سرعت بالا.",

en:
"Turning ideas into high-speed testable prototypes."

}

},


{

step:"04",

title:{
fa:"پیاده‌سازی",
en:"Implementation"
},

body:{

fa:
"همکاری نزدیک با توسعه برای تبدیل Design System به محصول واقعی.",

en:
"Working closely with engineering to transform design systems into real products."

}

}

];



/* =========================
   SKILLS
========================= */


export const SKILL_GROUPS = [


{

title:{
fa:"طراحی محصول",
en:"Product Design"
},

items:[

"UX Design",

"UI Design",

"Interaction Design",

"Information Architecture",

"Design Systems",

"Figma"

]

},



{

title:{
fa:"تحقیق و استراتژی",
en:"Research & Strategy"
},

items:[

"User Research",

"User Interviews",

"Usability Testing",

"Product Strategy",

"Design Thinking"

]

},



{

title:{
fa:"هوش مصنوعی",
en:"Artificial Intelligence"
},

items:[

"AI Product Design",

"Prompt Engineering",

"AI UX Patterns",

"AI Prototyping",

"Human-AI Interaction"

]

},



{

title:{
fa:"توسعه و تکنولوژی",
en:"Development"
},

items:[

"React",

"TypeScript",

"Tailwind CSS",

"Git",

"Design Tokens"

]

},



{

title:{
fa:"رهبری طراحی",
en:"Design Leadership"
},

items:[

"Design Critique",

"Mentoring",

"Design Operations",

"Stakeholder Management"

]

}

];
