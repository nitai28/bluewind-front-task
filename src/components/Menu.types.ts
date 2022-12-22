export interface MenuItem {
  name: string;
  url?: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}
