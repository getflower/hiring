import { useGetProducts } from "@/hooks/useGetProducts";
import Image from "next/image";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const ProductList = () => {
  const { data: products, error, isLoading } = useGetProducts();

  if (error)
    return (
      <div
        className={roboto.className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #f3e8ff 0%, #e0c3fc 100%)",
        }}
      >
        <p style={{ color: "#7c3aed", fontSize: "1.5rem" }}>
          Failed to load products.
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div
        className={roboto.className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #f3e8ff 0%, #e0c3fc 100%)",
        }}
      >
        <p style={{ color: "#7c3aed", fontSize: "1.5rem" }}>Loading...</p>
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "2rem",
      }}
    >
      {products.map((product: any) => (
        <a
          key={product.id}
          href={`/products/${product.id}`}
          style={{
            display: "block",
            width: 240,
            border: "1px solid #d1b3ff",
            borderRadius: 12,
            textDecoration: "none",
            color: "#333",
            background: "transparent",
            boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
            overflow: "hidden",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(124,58,237,0.12)";
            e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 16px rgba(124,58,237,0.07)";
            e.currentTarget.style.transform = "none";
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={240}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <div style={{ padding: "1.1rem" }}>
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.15rem",
                color: "#7c3aed",
              }}
            >
              {product.name}
            </h3>
            <p style={{ margin: 0, fontSize: "1rem", color: "#6d28d9" }}>
              {product.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
