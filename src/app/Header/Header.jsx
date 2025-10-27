import BannerNav from "./BannerNav";
import TopBar from "./TopBar";

export default function Header({ className }) {
  return (
    <header className={`font-sans ${className}`}>
      <TopBar />
      <BannerNav />
    </header>
  );
}
