import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/BlogData';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Najít článek podle slugu
  const post = blogPosts.find(post => post.slug === slug);
  
  // Pokud článek neexistuje, přesměrujeme na seznam blogů
  if (!post) {
    return (
      <div className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Článek nebyl nalezen</h1>
        <p className="mb-8">Omlouváme se, požadovaný článek neexistuje.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-[var(--secondary)] text-white rounded hover:brightness-110 transition"
        >
          Zpět na blog
        </button>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Ajurvédské centrum Agora</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="py-16 px-4 max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/blog')}
          className="mb-8 inline-flex items-center text-[var(--secondary)] hover:brightness-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Zpět na seznam článků
        </button>
        
        <div className="mb-8">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-sm text-gray-500">Autor: {post.author}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Mohlo by vás také zajímat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => relatedPost.slug !== post.slug)
              .slice(0, 2)
              .map(relatedPost => (
                <div 
                  key={relatedPost.id} 
                  className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </article>
    </>
  );
}