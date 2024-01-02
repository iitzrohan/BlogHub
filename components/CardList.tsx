import Card from "./Card";
import Pagination from "./Pagination";

type Item = {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  userEmail: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image: string;
  };
};

const getData = async (page: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

const CardList = async ({ page }: { page: number }) => {
  const { posts, count, POST_PER_PAGE } = await getData(page);

  const totalPages = Math.ceil(count / POST_PER_PAGE);

  return (
    // Container
    <div className="w-full lg:w-3/4">
      {/* Title */}
      <h1 className="my-12 font-bold">Recent Posts</h1>
      {/* Posts */}
      <div>
        {/* post */}
        <div>
          {posts?.map((item: Item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
      <Pagination total={totalPages} page={page} />
    </div>
  );
};

export default CardList;
