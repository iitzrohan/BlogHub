import CardList from "@/components/CardList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    // Container
    <div>
      <Featured />
      {/* Content */}
      <div className="flex gap-12">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
