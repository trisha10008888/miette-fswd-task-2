function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MIETTE</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/recipes">Explore</a>
        <a href="/favourites">♡ Saved</a>
      </div>
    </nav>
  );
}

export default Navbar;