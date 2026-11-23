// Desenhos simples para os presentes que ainda não têm foto.
const P = (d: string) =>
  `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

export const icones: Record<string, string> = {
  geladeira: P('<rect x="13" y="4" width="22" height="40" rx="3"/><path d="M13 18h22M17 10v4M17 23v7"/>'),
  pressao: P('<path d="M9 22h30v14a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6z"/><path d="M12 22c0-6 24-6 24 0M24 10v6M20 10h8M39 26h5"/>'),
  panelas: P('<path d="M8 20h28v14a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z"/><path d="M36 24h8M14 20c0-5 16-5 16 0"/>'),
  potes: P('<rect x="8" y="18" width="16" height="20" rx="3"/><rect x="26" y="24" width="14" height="14" rx="3"/><path d="M6 18h20M24 24h18"/>'),
  orggeladeira: P('<rect x="6" y="16" width="36" height="20" rx="4"/><circle cx="16" cy="26" r="4"/><circle cx="32" cy="26" r="4"/>'),
  peneira: P('<circle cx="20" cy="22" r="12"/><path d="M29 31l13 13M14 18h12M12 24h16"/>'),
  portapaes: P('<path d="M6 36h36v-8a10 10 0 0 0-10-10H16A10 10 0 0 0 6 28z"/><path d="M20 26c2-3 6-3 8 0"/>'),
  toalha: P('<path d="M6 16h36l-4 22H10z"/><path d="M14 16v22M24 16v22M34 16v22"/>'),
  mesa: P('<ellipse cx="24" cy="18" rx="18" ry="6"/><path d="M14 23v18M34 23v18"/>'),
  sofa: P('<path d="M8 22v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v6"/><rect x="4" y="22" width="40" height="12" rx="4"/><path d="M8 34v6M40 34v6"/>'),
  tv: P('<rect x="4" y="8" width="40" height="26" rx="3"/><path d="M18 42h12M24 34v8"/>'),
  painel: P('<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="12" y="12" width="24" height="14" rx="2"/><path d="M10 34h28"/>'),
  cortina: P('<path d="M4 6h40M10 6c0 12-4 24-2 36h12c-4-12 0-24-2-36M38 6c0 12 4 24 2 36H28c4-12 0-24 2-36"/>'),
  mesasescritorio: P('<path d="M4 18h40M8 18v22M40 18v22"/><rect x="26" y="6" width="12" height="9" rx="1.5"/>'),
  chuveiro: P('<path d="M12 42V12a6 6 0 0 1 6-6h6v6"/><path d="M18 12h12M20 20v3M24 20v4M28 20v3M22 28v3M26 28v3"/>'),
  tapete: P('<rect x="6" y="14" width="36" height="20" rx="6"/><path d="M14 14v20M22 14v20M30 14v20"/>'),
  tanquinho: P('<rect x="10" y="6" width="28" height="36" rx="4"/><circle cx="24" cy="26" r="9"/><path d="M15 12h6"/>'),
  presente: P('<rect x="8" y="18" width="32" height="24" rx="3"/><path d="M6 12h36v6H6zM24 12v30M24 12c-4-8-14-6-8 0M24 12c4-8 14-6 8 0"/>'),
};
