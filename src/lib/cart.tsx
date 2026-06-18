import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string; // `${slug}__${idx}`
  slug: string;
  idx: number;
  name: string;
  img: string;
  location: string;
  price: number; // sale price
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (i: Omit<CartItem, "id">) => void;
  remove: (id: string) => void;
  update: (id: string, patch: Partial<CartItem>) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "campvan_cart_v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: CartCtx["add"] = (i) => {
    const id = `${i.slug}__${i.idx}`;
    setItems((prev) => {
      const exists = prev.find((p) => p.id === id);
      if (exists) {
        return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + i.qty } : p));
      }
      return [...prev, { ...i, id }];
    });
  };
  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const update = (id: string, patch: Partial<CartItem>) =>
    setItems((p) => p.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return <Ctx.Provider value={{ items, add, remove, update, clear, count, subtotal }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
