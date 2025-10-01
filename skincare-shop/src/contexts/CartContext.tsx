import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type UpdateQuantity = (id: string, quantity: number) => void;
type RemoveFromCart = (id: string) => void;

type CartContextType = {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: UpdateQuantity;
  removeFromCart: RemoveFromCart;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  // Persist cartItems to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity: UpdateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((ci) => (ci.id === id ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart: RemoveFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((ci) => ci.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
