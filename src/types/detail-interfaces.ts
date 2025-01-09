import { Paket } from "./interfaces";


interface Order {
  id: string;
  transaksiId: string;
  paketId: string;
  catering: {
    nama: string;
  };
  totalHarga: number;
  tanggal: string;
  statusOrder: string;
  durasi: number;
  quantity: number;
  paket: Paket;
}

interface Customer {
  id: string;
  userId: string;
}

export interface TransactionDetail {
  id: string;
  customerId: string;
  startDate: string;
  endDate: string;
  paymentMethod: string;
  alamat: string;
  ongkir: number;
  Orders: Order[];
  customer: Customer;
}
