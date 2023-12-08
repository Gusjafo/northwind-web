export interface Supplier {
  id: number;
  companyName: string;
  contactName: string;
  contactTitle: string | null;
  city: string;
  phone: number;
  fax: number | null;
  totalRecords: number;
}
