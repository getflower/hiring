import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import Image from "next/image";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Optionally show a loading spinner here
    return null;
  }

  const getTotal = () =>
    cartItems.reduce(
      (sum: number, { price, quantity }) => sum + price * quantity,
      0
    );

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(({ id, name, price, quantity, image }) => (
          <li key={id} style={{ marginBottom: 16 }}>
            <div>
              <strong>{name}</strong>
            </div>
            <div>Price: ${price.toFixed(2)}</div>
            <Image
              src={image}
              alt={name}
              width={240}
              height={150}
              style={{ objectFit: "cover" }}
            />
            <div>
              Quantity:
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => updateQuantity(id, Number(e.target.value))}
                style={{ width: 50, marginLeft: 8 }}
              />
            </div>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${getTotal().toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
