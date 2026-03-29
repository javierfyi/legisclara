export const mockLaws = [
  {
    id: "cpeum",
    title: "Constitución Política de los Estados Unidos Mexicanos",
    branch: "CONSTITUTIONAL" as const,
    publishedAt: "1917-02-05",
    lastReformAt: "2024-11-15",
    articleCount: 136,
    status: "vigente",
  },
  {
    id: "lft",
    title: "Ley Federal del Trabajo",
    branch: "LABOR" as const,
    publishedAt: "1970-04-01",
    lastReformAt: "2024-06-20",
    articleCount: 1010,
    status: "vigente",
  },
  {
    id: "cpf",
    title: "Código Penal Federal",
    branch: "CRIMINAL" as const,
    publishedAt: "1931-08-14",
    lastReformAt: "2024-03-12",
    articleCount: 400,
    status: "vigente",
  },
  {
    id: "ccf",
    title: "Código Civil Federal",
    branch: "CIVIL" as const,
    publishedAt: "1928-05-26",
    lastReformAt: "2023-12-01",
    articleCount: 2999,
    status: "vigente",
  },
  {
    id: "cff",
    title: "Código Fiscal de la Federación",
    branch: "FISCAL" as const,
    publishedAt: "1981-12-31",
    lastReformAt: "2024-01-01",
    articleCount: 263,
    status: "vigente",
  },
  {
    id: "lgeepa",
    title: "Ley General del Equilibrio Ecológico y la Protección al Ambiente",
    branch: "ENVIRONMENTAL" as const,
    publishedAt: "1988-01-28",
    lastReformAt: "2023-06-08",
    articleCount: 204,
    status: "vigente",
  },
  {
    id: "lfpa",
    title: "Ley Federal de Procedimiento Administrativo",
    branch: "ADMINISTRATIVE" as const,
    publishedAt: "1994-08-04",
    lastReformAt: "2024-05-10",
    articleCount: 96,
    status: "vigente",
  },
  {
    id: "lgsm",
    title: "Ley General de Sociedades Mercantiles",
    branch: "COMMERCIAL" as const,
    publishedAt: "1934-08-04",
    lastReformAt: "2024-02-20",
    articleCount: 264,
    status: "vigente",
  },
];

export const mockRecentSearches = [
  "derechos laborales embarazada",
  "prescripción delitos fiscales",
  "libertad de expresión artículo 6",
  "contrato de arrendamiento código civil",
  "despido injustificado indemnización",
];

export const mockRecentConsultations = [
  {
    id: "c1",
    question: "¿Cuáles son los derechos de un trabajador ante un despido injustificado?",
    date: "2024-03-28",
    articlesCount: 4,
  },
  {
    id: "c2",
    question: "¿Qué establece el artículo 123 constitucional sobre el salario mínimo?",
    date: "2024-03-27",
    articlesCount: 2,
  },
  {
    id: "c3",
    question: "¿Cuál es el plazo de prescripción para delitos fiscales?",
    date: "2024-03-26",
    articlesCount: 3,
  },
];

export const branchLabels: Record<string, string> = {
  CONSTITUTIONAL: "Constitucional",
  CIVIL: "Civil",
  CRIMINAL: "Penal",
  LABOR: "Laboral",
  ADMINISTRATIVE: "Administrativo",
  FISCAL: "Fiscal",
  COMMERCIAL: "Mercantil",
  ENVIRONMENTAL: "Ambiental",
  ELECTORAL: "Electoral",
  OTHER: "Otro",
};

export const branchColors: Record<string, string> = {
  CONSTITUTIONAL: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  CIVIL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  CRIMINAL: "bg-red-500/10 text-red-400 border-red-500/20",
  LABOR: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  ADMINISTRATIVE: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  FISCAL: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  COMMERCIAL: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  ENVIRONMENTAL: "bg-green-500/10 text-green-400 border-green-500/20",
  ELECTORAL: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  OTHER: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};
