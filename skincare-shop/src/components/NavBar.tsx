export const NavBar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.2rem 2.5rem",
      borderBottom: "1px solid #d1b3ff",
      background: "rgba(255,255,255,0.85)",
      boxShadow: "0 2px 8px rgba(120,60,180,0.05)",
    }}
  >
    <div
      style={{
        fontWeight: "bold",
        fontSize: "1.7rem",
        color: "#7c3aed",
        letterSpacing: "1px",
        fontFamily: "inherit",
      }}
    >
      Noli
    </div>
    <div style={{ display: "flex", gap: "2rem" }}>
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "#7c3aed",
          fontWeight: 500,
          padding: "0.3rem 0.8rem",
          borderRadius: 6,
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ede9fe")}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Home
      </a>
      <a
        href="/profile"
        style={{
          textDecoration: "none",
          color: "#7c3aed",
          fontWeight: 500,
          padding: "0.3rem 0.8rem",
          borderRadius: 6,
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ede9fe")}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Profile
      </a>
      <a
        href="/products"
        style={{
          textDecoration: "none",
          color: "#7c3aed",
          fontWeight: 500,
          padding: "0.3rem 0.8rem",
          borderRadius: 6,
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ede9fe")}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Products
      </a>
    </div>
  </nav>
);
