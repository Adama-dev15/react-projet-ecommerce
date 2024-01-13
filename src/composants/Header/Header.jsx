import "./Header.css";
function Header() {
  return (
    <header>
      <div className="header-content">
        <a href="/" className="navlink">
          home
        </a>
        <a href="/produits">products</a>
      </div>
    </header>
  );
}

export default Header;
