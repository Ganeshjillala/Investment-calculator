import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="image of calculator" />
      <h1>investment calculator</h1>
    </header>
  );
}
