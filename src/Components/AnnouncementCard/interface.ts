export interface Props {
  currency?: string;
  price: number;
  nMonths: number;
  city: string;
  state: string;
  breed: string;
  nOxen: number;
  thumbmails: Array<{
    url: string;
  }>;
}
