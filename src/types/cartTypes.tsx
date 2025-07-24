export interface IProduct {
  id: number;
  name: string;
  image_url: string[];
  price: number;
  previous_price: number;
  status: boolean;
  rating: number;
  quantity: number;
}

export interface OrderProduct {
  id: string;
  name: string;
  image?: string;
  price: number;
  status?: boolean;
  quantity: number;
}
