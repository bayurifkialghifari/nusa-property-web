export const project = {
  name: "Nusa Property",
  address: "Jalan G.A. Manulang Km. 2, Rancabali Purabaya, Padalarang",
  whatsapp: "6280000000000",
  phoneDisplay: "+62 800-0000-0000 (Demo)",
  latitude: -6.850577,
  longitude: 107.4743523,
  sourceUrl: "https://www.ganproperti.com/proyek.php?proyek=30",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.850577%2C107.4743523",
  verificationNote: "Harga, spesifikasi, dan ketersediaan dikonfirmasi bersama tim marketing",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const marketingLink = whatsappLink(
  "Halo, saya ingin mendapat informasi tentang pilihan hunian dari Nusa Property.",
);

export const brochureLink = whatsappLink(
  "Halo, saya ingin meminta brosur dan informasi harga dari Nusa Property.",
);
