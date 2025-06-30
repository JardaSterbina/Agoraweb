import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/BlogData";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blog | Ajurvédské centrum Agora</title>
        <meta
          name="description"
          content="Přečtěte si nejnovější články o ajurvédě, masážích a zdravém životním stylu na našem blogu."
        />
        <meta
          name="keywords"
          content="ajurvéda blog, masáže blog, ajurvédské centrum blog, zdravý životní styl, blog masáže ostrava, přírodní medicína"
        />
      </Helmet>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="underline-336">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
                <h2
                  className="text-2xl font-semibold mb-3 cursor-pointer hover:text-[var(--secondary)]"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button
                  className="px-4 py-2 bg-[var(--secondary)] text-white rounded hover:brightness-110 transition"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  Číst více
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
