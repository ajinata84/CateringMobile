interface Catering {
    nama: string;
}

interface Paket {
    id: string;
    nama: string;
    cateringId: string;
    durasi: number;
    harga: number;
    deskripsi: string;
    kategoriId: string;
}

export interface Order {
    id: string;
    transaksiId: string;
    paketId: string;
    cateringId: string;
    totalHarga: number;
    tanggal: string;
    statusOrder: string;
    durasi: number;
    quantity: number;
    catering: Catering;
    paket: Paket;
}

export interface Transaction {
    id: string;
    customerId: string;
    startDate: string;
    endDate: string;
    paymentMethod: string;
    alamat: string;
    ongkir: number;
    Orders: Order[];
}
