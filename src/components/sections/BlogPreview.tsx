import { Link, useNavigate } from 'react-router-dom';
import { BlogPost } from '../../data/BlogData';

interface BlogPreviewProps {
  title: string;
  posts: BlogPost[];
}

export default function BlogPreview({ title, posts }: BlogPreviewProps) {
  // Take only the first 3 posts for preview
  const previewPosts = posts.slice(0, 3);
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Přečtěte si nejnovější články o ajurvédě, masážích a zdravém životním stylu
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {previewPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-60 object-cover cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
              <h3 
                className="text-xl font-semibold mb-3 cursor-pointer hover:text-[var(--secondary)]"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
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
      
      <div className="text-center">
        <Link 
          to="/blog"
          className="inline-block px-6 py-3 border-2 border-[var(--secondary)] text-[var(--secondary)] font-medium rounded hover:bg-[var(--secondary)] hover:text-white transition"
        >
          Zobrazit všechny články
        </Link>
      </div>
    </section>
  );
} 