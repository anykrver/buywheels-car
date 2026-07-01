import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, Tag, ArrowLeft, Send, Check, MessageSquare, Heart, Share2 } from 'lucide-react';
import { blogPosts } from '../utils/data';

const categories = ['All', 'Buying Guide', 'EV', 'Comparison', 'News', 'Tips'];

const allPosts = blogPosts;

export default function Blog() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Newsletter
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Like & Share feedback for detail page
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Scroll to top and update page metadata (SEO) when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
    
    if (slug) {
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        document.title = post.metaTitle || `${post.title} | Buywheels`;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', post.metaDescription || post.excerpt);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'description';
          meta.content = post.metaDescription || post.excerpt;
          document.head.appendChild(meta);
        }
      }
    } else {
      document.title = 'Buying Guides & Auto News | Buywheels';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Expert advice, detailed vehicle comparisons, and the latest news to help you make smarter vehicle decisions in Jharkhand.');
      }
    }
  }, [slug]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  // If slug is present, render the single blog post details
  if (slug) {
    const post = allPosts.find(p => p.slug === slug);
    
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h2 className="font-heading font-bold text-dark text-2xl mb-3">Article Not Found</h2>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </div>
      );
    }

    const relatedPosts = allPosts.filter(p => p.slug !== slug && (p.category === post.category || p.category === 'Buying Guide')).slice(0, 3);

    return (
      <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
        <div className="container-fluid max-w-4xl">
          {/* Header Controls */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </button>
            <span className="bg-primary-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Article Main */}
          <article className="bg-white rounded-2xl border border-border shadow-card overflow-hidden p-6 sm:p-10 mb-8">
            <header className="mb-6">
              <h1 className="font-heading font-bold text-dark text-2xl sm:text-4xl leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-xs text-muted flex-wrap">
                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span>Published on {post.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span>By Buywheels Editorial Team</span>
              </div>
            </header>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-8 border border-border">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                }}
              />
            </div>

            {/* Article Dynamic Content */}
            <div className="prose prose-sm max-w-none text-dark-600 text-sm leading-relaxed space-y-6">
              {post.content && post.content.map((section, index) => (
                <div key={index} className="space-y-3">
                  {section.heading && (
                    <h3 className={`font-heading font-bold text-dark text-lg ${index > 0 ? 'pt-4 border-t border-border' : ''}`}>
                      {section.heading}
                    </h3>
                  )}
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className={pIdx === 0 && !section.heading ? "text-base font-semibold text-dark" : "text-dark-600"}>
                      {p}
                    </p>
                  ))}
                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.listItems.map((item, itemIdx) => {
                        const colonIndex = item.indexOf(':');
                        if (colonIndex !== -1) {
                          const titlePart = item.substring(0, colonIndex);
                          const descPart = item.substring(colonIndex + 1);
                          return (
                            <li key={itemIdx}>
                              <strong>{titlePart}:</strong> {descPart}
                            </li>
                          );
                        }
                        return <li key={itemIdx}>{item}</li>;
                      })}
                    </ul>
                  )}
                  {section.image && (
                    <div className="aspect-video w-full overflow-hidden rounded-xl my-4 border border-border">
                      <img src={section.image} alt={section.heading || post.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Like, Share & Comments controls */}
            <div className="border-t border-border mt-8 pt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    isLiked
                      ? 'bg-primary-50 text-primary border-primary'
                      : 'border-border text-muted hover:text-primary hover:border-primary/50'
                  }`}
                >
                  <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} />
                  {isLiked ? 'Liked!' : 'Like Article'}
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    isCopied
                      ? 'bg-success-50 text-success border-success'
                      : 'border-border text-muted hover:text-primary hover:border-primary/50'
                  }`}
                >
                  <Share2 size={14} />
                  {isCopied ? 'Link Copied!' : 'Share'}
                </button>
              </div>

              <div className="text-xs text-muted flex items-center gap-1.5">
                <MessageSquare size={14} /> <span>Join the discussion (12 Comments)</span>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="font-heading font-bold text-dark text-xl mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(p => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.slug}`}
                    className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-card transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-dark text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                      <p className="text-muted text-[10px] mt-2">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Box */}
          <div className="bg-primary rounded-2xl p-8 text-center relative overflow-hidden text-white">
            <h2 className="font-heading font-bold text-white text-2xl mb-2">Subscribe to Auto News</h2>
            <p className="text-white/80 text-xs mb-6 max-w-sm mx-auto">Get monthly buying guides, dealer pricing alerts, and automotive reviews direct to Jharkhand inbox.</p>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-xl text-dark placeholder-muted bg-white focus:outline-none"
                />
                <button type="submit" className="h-11 px-6 bg-dark text-white font-semibold rounded-xl hover:bg-dark-700 transition-colors flex items-center justify-center gap-1.5">
                  <Send size={14} /> Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 bg-white/20 rounded-xl py-3 px-6 w-fit mx-auto border border-white/20">
                <Check size={16} /> <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Filter logic for blog list
  const filteredPosts = allPosts.filter(post => 
    activeCategory === 'All' ? true : post.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const featuredPost = filteredPosts[0];
  const gridPosts = activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      {/* Hero */}
      <div className="bg-dark py-14 mb-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container-fluid text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-3">
            Buying Guides & Auto News
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Expert advice, detailed comparisons, and the latest news to help you make smarter vehicle decisions.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                cat === activeCategory
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-white border border-border text-dark-600 hover:text-primary hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* If no posts match active category */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-border">
            <p className="text-muted text-sm">No articles found in this category.</p>
          </div>
        ) : (
          <>
            {/* Featured post - only show if on 'All' tab and there are articles */}
            {activeCategory === 'All' && featuredPost && (
              <div className="mb-8">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group grid md:grid-cols-2 bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all"
                >
                  <div className="overflow-hidden aspect-video md:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                      }}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex items-center gap-1.5 bg-primary-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                        <Tag size={11} /> {featuredPost.category}
                      </span>
                      <span className="text-muted text-xs flex items-center gap-1"><Clock size={11} /> {featuredPost.readTime}</span>
                    </div>
                    <h2 className="font-heading font-bold text-dark text-2xl mb-3 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-5">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">{featuredPost.date}</span>
                      <span className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Post grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="overflow-hidden aspect-video relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-dark text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Newsletter */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="relative">
            <h2 className="font-heading font-bold text-white text-2xl mb-2">Get Auto News in Your Inbox</h2>
            <p className="text-white/80 mb-6">Subscribe for weekly buying guides, new launches, and exclusive deals.</p>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl text-dark placeholder-muted bg-white focus:outline-none"
                />
                <button type="submit" className="h-12 px-6 bg-dark text-white font-semibold rounded-xl hover:bg-dark-700 transition-colors flex-shrink-0 flex items-center justify-center gap-1.5">
                  <Send size={14} /> Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 bg-white/20 rounded-xl py-3 px-6 w-fit mx-auto border border-white/20">
                <Check size={16} /> <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
