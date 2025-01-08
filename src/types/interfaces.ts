export interface Owner {
  id: string;
  userId: string;
}

export interface Makanan {
  id: string;
  nama: string;
  deskripsi: string;
  imageUrl: string;
}

export interface ScheduleFood {
  id: string;
  makananId: string;
  scheduleId: string;
  makanan: Makanan;
}

export interface Schedule {
  id: string;
  paketId: string;
  waktu: string;
  ScheduleFoods: ScheduleFood[];
}

export interface Paket {
  id: string;
  nama: string;
  cateringId: string;
  durasi: number;
  harga: number;
  deskripsi: string;
  kategoriId: string;
  kategori: string;
  Schedules: Schedule[];
}

export interface Catering {
  id: string;
  ownerId: string;
  nama: string;
  alamat: string;
  hp: string;
  rating: number;
  deskripsi: string;
  imageUrl: string;
  owner: Owner;
  kategoris: any[];
  Manajemens: any[];
  Pakets: Paket[];
}
