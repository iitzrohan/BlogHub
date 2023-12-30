import CardList from "@/components/CardList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    // Container
    <div>
      <Featured />
      {/* Content */}
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
