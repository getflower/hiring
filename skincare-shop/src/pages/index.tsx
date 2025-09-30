import { Roboto } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { ProductList } from "@/components/ProductList";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section
        style={{
          padding: "2.5rem",
          textAlign: "center",
          background: "linear-gradient(90deg, #ede9fe 0%, #f3e8ff 100%)",
          margin: "2rem 2rem 0 2rem",
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
        }}
      >
        <h2
          style={{ color: "#7c3aed", fontSize: "2rem", marginBottom: "1rem" }}
        >
          About Us
        </h2>
        <p
          style={{
            color: "#6d28d9",
            fontSize: "1.15rem",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Welcome to Noli! We believe in clean, effective skincare for everyone.
          Our products are crafted with natural ingredients and backed by
          science to help you look and feel your best.
        </p>
      </section>

      {/* Product Cards */}
      <section style={{ padding: "2.5rem 2rem" }}>
        <h2
          style={{ textAlign: "center", color: "#7c3aed", fontSize: "1.7rem" }}
        >
          Featured Products
        </h2>
        <ProductList />
      </section>
    </>
  );
}
