import type { Lang } from "./i18n";

export type Bi = {
  fa: string;
  en: string;
};

export const L = (v: Bi, lang: string) =>
  lang === "en" ? v.en : v.fa;

export const isRtl = (lang: string) => lang !== "en";

export type { Lang };


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
    fa: "AI Product Designer · UX Strategist · Design System Specialist",
    en: "AI Product Designer · UX Strategist · Design System Specialist",
  },

  email: "hello@kheradhoosh.design",

  linkedin:
    "https://www.linkedin.com/in/kheradhoosh",

  behance:
    "https://www.behance.net/kheradhoosh",

  resume:
    "/resume-mohamad-kheradhoosh.pdf",
};


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


export const PILLARS: {
  title: Bi;
  body: Bi;
}[] = [

{
title:{
fa:"محصول و کسب‌وکار",
en:"Product & Business"
},

body:{
fa:
"طراحی را از مسئله واقعی کسب‌وکار شروع می‌کنم؛ با درک اهداف محصول، نیاز کاربران و محدودیت‌های تکنولوژی، راه‌حل‌هایی می‌سازم که ارزش واقعی ایجاد کنند.",

en:
"I start design from real business problems. By understanding product goals, user needs and technology constraints, I create solutions that deliver real value."
}
},


{
title:{
fa:"تجربه کاربر",
en:"User Experience"
},

body:{
fa:
"با ترکیب تحقیق کاربر، تحلیل رفتار و طراحی تعامل، تجربه‌هایی ساده و قابل اعتماد برای محصولات پیچیده ایجاد می‌کنم.",

en:
"By combining user research, behavioural insights and interaction design, I create simple and trustworthy experiences for complex products."
}
},


{
title:{
fa:"سیستم طراحی",
en:"Design Systems"
},

body:{
fa:
"تجربه ساخت Design System، کامپوننت‌های قابل توسعه و همکاری نزدیک با تیم‌های توسعه را دارم تا طراحی در محصول نهایی زنده بماند.",

en:
"I build scalable design systems, reusable components and collaborate closely with engineering teams to bring design into production."
}
},


{
title:{
fa:"هوش مصنوعی",
en:"Artificial Intelligence"
},

body:{
fa:
"از ابزارهای هوش مصنوعی برای تحقیق، ایده‌پردازی، نمونه‌سازی سریع و تبدیل ایده‌ها به محصولات واقعی استفاده می‌کنم.",

en:
"I use AI tools for research, ideation, rapid prototyping and transforming ideas into real products."
}
}

];
