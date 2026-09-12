export const project = {
  name: "G-Land Padalarang Residence",
  address: "Jalan G.A. Manulang Km. 2, Rancabali Purabaya, Padalarang",
  whatsapp: "6281232385000",
  phoneDisplay: "+62 812-3238-5000",
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
  "Halo tim marketing G-Land Padalarang Residence, saya ingin mendapat informasi tentang pilihan hunian. Bisa dibantu?",
);

export const brochureLink = whatsappLink(
  "Halo tim marketing G-Land Padalarang Residence, saya ingin meminta brosur dan daftar harga terkini. Mohon informasi spesifikasi dan ketersediaan huniannya juga. Terima kasih.",
);
