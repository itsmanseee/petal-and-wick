import { useState, useEffect } from "react";

/* ── Self-hosted product photos (fetched once via GitHub Actions,
      committed to /public/photos — no external CDN dependency) ──────── */
const PHOTO = name => `/petal-and-wick/photos/${name}.jpg`;

const PRODUCTS = [
  {
    id: 1,
    name: "Crystal Petal Candle",
    cat: "candles", price: 28,
    img: PHOTO("crystal-petal"),
    badge: "Best Seller", rating: 5, reviews: 84,
    scent: "Rose quartz, botanicals & essential oils",
  },
  {
    id: 2,
    name: "Sunflower Garden Candle",
    cat: "candles", price: 24,
    img: PHOTO("sunflower-garden"),
    rating: 5, reviews: 61,
    scent: "Summer honey & wildflower",
  },
  {
    id: 3,
    name: "Matcha Dream Candle",
    cat: "candles", price: 26,
    img: PHOTO("matcha-dream"),
    badge: "New", rating: 5, reviews: 38,
    scent: "Green tea, cedar & fresh linen",
  },
  {
    id: 4,
    name: "Coffee Morning Candle",
    cat: "candles", price: 26,
    img: PHOTO("coffee-morning"),
    rating: 4, reviews: 52,
    scent: "Espresso, dark chocolate & vanilla",
  },
  {
    id: 5,
    name: "Bubble Cloud Candle",
    cat: "candles", price: 32,
    img: PHOTO("bubble-cloud"),
    badge: "Limited", rating: 5, reviews: 29,
    scent: "Cotton, white musk & sandalwood",
  },
];

const REVIEWS = [
  { name:"Sarah M.",   rating:5, text:"I ordered the crystal petal candle as a gift and it blew us away — the scent is unreal and it looks like a piece of art. Will 100% be back!", product:"Crystal Petal Candle",    initials:"SM", color:"#F9D5D3" },
  { name:"Emma K.",    rating:5, text:"The matcha candle is so calming. I light it every evening while reading and it completely transforms the room. Absolutely obsessed.", product:"Matcha Dream Candle",       initials:"EK", color:"#C8DDD1" },
  { name:"Jessica T.", rating:5, text:"The bubble cloud candle is the most beautiful candle I've ever owned. The scent is soft and dreamy — exactly what I needed.", product:"Bubble Cloud Candle",        initials:"JT", color:"#EAD7F5" },
  { name:"Lily R.",    rating:5, text:"Coffee morning candle wakes me up better than my actual coffee! The scent is warm, rich, and cosy. My whole home smells amazing.", product:"Coffee Morning Candle",      initials:"LR", color:"#FFD4B2" },
  { name:"Olivia P.",  rating:5, text:"Ordered the sunflower garden candle on a whim and it's become my all-time favourite. Bright, happy, and the burn time is incredible.", product:"Sunflower Garden Candle", initials:"OP", color:"#FDE8C4" },
];

const ABOUT_IMG = PHOTO("about-studio");

function StarRating({ rating, size=14 }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i=>(
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i<=rating?"#D4A853":"#E5DDD8"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function Flower({ size=60, color="#F9D5D3", style:s={} }) {
  const inner = color==="#F9D5D3"?"#E07B85":color==="#EAD7F5"?"#9370C0":"#7BAFA3";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{opacity:.4,...s}} aria-hidden="true">
      {[0,72,144,216,288].map((d,i)=>(
        <ellipse key={i} cx="50" cy="22" rx="13" ry="22" fill={color} transform={`rotate(${d} 50 50)`}/>
      ))}
      <circle cx="50" cy="50" r="17" fill={inner}/>
    </svg>
  );
}

function Sparkle({ size=22, color="#D4A853", style:s={} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{opacity:.65,...s}} aria-hidden="true">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" fill={color}/>
    </svg>
  );
}

export default function App() {
  const [cart,       setCart]      = useState([]);
  const [cartOpen,   setCartOpen]  = useState(false);
  const [mobileMenu, setMobile]    = useState(false);
  const [reviewIdx,  setReview]    = useState(0);
  const [wishlist,   setWishlist]  = useState([]);
  const [toast,      setToast]     = useState(null);
  const [hovered,    setHovered]   = useState(null);
  const [email,      setEmail]     = useState("");
  const [subscribed, setSub]       = useState(false);

  useEffect(() => {
    const t = setInterval(() => setReview(i=>(i+1)%REVIEWS.length), 4500);
    return ()=>clearInterval(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (cartOpen||mobileMenu)?"hidden":"";
    return () => { document.body.style.overflow=""; };
  }, [cartOpen, mobileMenu]);

  const addToCart = p => {
    setCart(prev=>{
      const ex = prev.find(i=>i.id===p.id);
      return ex ? prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i) : [...prev,{...p,qty:1}];
    });
    setToast(`${p.name} added! 🛒`);
    setTimeout(()=>setToast(null), 2500);
  };
  const updQty = (id,d) => setCart(prev=>prev.map(i=>i.id===id?{...i,qty:i.qty+d}:i).filter(i=>i.qty>0));

  const cartTotal = cart.reduce((s,i)=>s+i.price*i.qty, 0);
  const cartCount = cart.reduce((s,i)=>s+i.qty, 0);

  return (
    <div className="app">

      {toast && <div className="toast" role="alert">{toast}</div>}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="overlay" onClick={()=>setCartOpen(false)}>
          <div className="cart-drawer" onClick={e=>e.stopPropagation()}>
            <div className="cart-header">
              <h3 className="cart-title">Your Cart 🛒</h3>
              <button className="icon-btn" onClick={()=>setCartOpen(false)}>✕</button>
            </div>
            {cart.length===0 ? (
              <div className="cart-empty">
                <span className="cart-empty-icon">🛒</span>
                <p className="fw700">Your cart is empty</p>
                <p className="mid small">Browse and add something lovely!</p>
                <button className="btn-outline mt-sm" onClick={()=>setCartOpen(false)}>Continue Shopping</button>
              </div>
            ):(
              <>
                <div className="cart-items">
                  {cart.map(item=>(
                    <div key={item.id} className="cart-item">
                      <div className="cart-thumb">
                        <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy"/>
                      </div>
                      <div className="cart-item-info">
                        <p className="fw700 small">{item.name}</p>
                        <p className="rose small mb-sm">${item.price.toFixed(2)}</p>
                        <div className="qty-row">
                          <button className="qty-btn" onClick={()=>updQty(item.id,-1)}>−</button>
                          <button className="qty-btn" onClick={()=>updQty(item.id,1)}>+</button>
                          <span className="fw700">{item.qty}</span>
                          <span className="ml-auto fw700">${(item.price*item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span className="mid">Subtotal ({cartCount} item{cartCount!==1?"s":""})</span>
                    <span className="price-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="btn-primary full-width">Checkout ✨</button>
                  <p className="mid small ta-center mt-sm">Free shipping on orders over $35 🌸</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="overlay" onClick={()=>setMobile(false)}>
          <div className="mobile-nav" onClick={e=>e.stopPropagation()}>
            <button className="icon-btn mb-lg" onClick={()=>setMobile(false)}>✕</button>
            <nav className="mobile-nav-links">
              {["Shop","About"].map(n=>(
                <a key={n} href={`#${n.toLowerCase()}`} className="mobile-nav-link" onClick={()=>setMobile(false)}>{n}</a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <button className="hamburger" onClick={()=>setMobile(true)} aria-label="Menu">
            <span/><span/><span/>
          </button>
          <a href="#" className="logo">🌸 Petal &amp; Wick</a>
          <nav className="desktop-nav">
            {["Shop","About"].map(n=>(
              <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
            ))}
          </nav>
          <button className="cart-btn" onClick={()=>setCartOpen(true)}>
            🛒 <span className="cart-btn-text">Cart</span>
            {cartCount>0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* Promo */}
      <div className="promo-bar">
        <div className="marquee">
          {[...Array(4)].map((_,i)=>(
            <span key={i} className="marquee-text">
              ✨ Free shipping on orders over $35 &nbsp;·&nbsp; 🌸 New arrivals every Friday &nbsp;·&nbsp; 🕯️ Use code PETAL10 for 10% off &nbsp;·&nbsp; 🌿 100% natural soy wax &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="shop">
        <Flower size={110} color="#F9D5D3" style={{ position:"absolute", top:-15, right:60, transform:"rotate(15deg)" }}/>
        <Flower size={70}  color="#EAD7F5" style={{ position:"absolute", bottom:50, left:30 }}/>
        <Sparkle size={30} color="#D4A853" style={{ position:"absolute", top:70, left:"43%", transform:"rotate(18deg)" }}/>
        <Sparkle size={18} color="#E8929A" style={{ position:"absolute", bottom:110, right:"24%" }}/>

        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill">✨ Handcrafted with Love</span>
            <h1 className="hero-heading">Your home deserves<br/>a little <em className="accent-rose">magic ✨</em></h1>
            <p className="hero-sub">Artisanal soy candles crafted in small batches with organic ingredients, botanical petals and a whole lot of love.</p>
            <div className="hero-ctas">
              <a href="#products" className="btn-primary">Shop Now ✨</a>
              <a href="#about" className="btn-outline">Our Story</a>
            </div>
            <div className="trust-badges">
              {[["🌿","100% Soy Wax"],["♻️","Eco Packaging"],["💝","Handcrafted"]].map(([e,l])=>(
                <span key={l} className="trust-badge"><span>{e}</span>{l}</span>
              ))}
            </div>
          </div>

          {/* Hero cards — all 5 candles */}
          <div className="hero-cards" aria-hidden="true">
            {PRODUCTS.map((p,i)=>(
              <div key={p.id}
                className={`hero-card ${i%2===0?"rot-l":"rot-r"} ${i>=2?"hero-card-low":""}`}
                onClick={()=>addToCart(p)}>
                <div className="hero-card-illo">
                  <img src={p.img} alt={p.name}
                    style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:12}}
                    loading="eager"/>
                </div>
                <p className="hero-card-name">{p.name}</p>
                <p className="hero-card-price">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        {[["500+","Happy Customers"],["100%","Natural Soy Wax"],["3–5 Days","Avg. Shipping"],["200+","5-Star Reviews"]].map(([n,l])=>(
          <div key={l} className="stat">
            <span className="stat-number">{n}</span>
            <span className="stat-label">{l}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <section className="section" id="products">
        <div className="container">
          <p className="section-eyebrow">Our Collection</p>
          <h2 className="section-heading">Shop with love 🌸</h2>
          <p className="section-sub">Each candle is poured in small batches — because quality always matters more than quantity.</p>

          <div className="products-grid">
            {PRODUCTS.map(p=>(
              <article key={p.id}
                className={`product-card${hovered===p.id?" lifted":""}`}
                onMouseEnter={()=>setHovered(p.id)}
                onMouseLeave={()=>setHovered(null)}>

                <div className="product-illo">
                  <img src={p.img} alt={p.name}
                    style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
                    loading="lazy"/>
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                  <button className="wish-btn"
                    onClick={()=>setWishlist(w=>w.includes(p.id)?w.filter(i=>i!==p.id):[...w,p.id])}
                    aria-label="Wishlist">
                    {wishlist.includes(p.id)?"❤️":"🤍"}
                  </button>
                </div>

                <div className="product-body">
                  <p className="product-cat">Soy Candle</p>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-scent">{p.scent}</p>
                  <div className="rating-row">
                    <StarRating rating={p.rating} size={13}/>
                    <span className="mid small">({p.reviews})</span>
                  </div>
                  <div className="price-row">
                    <span className="price">${p.price.toFixed(2)}</span>
                    <button
                      className={`add-btn${hovered===p.id?" active":""}`}
                      onClick={()=>addToCart(p)}>+ Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="container about-inner">
          <div className="about-visual">
            <div className="about-illo-wrap">
              <img src={ABOUT_IMG} alt="Candle making in our studio"
                style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy"/>
            </div>
            <div className="about-badge">
              <span className="about-badge-icon">🕯️</span>
              <div><p className="small mid">Handcrafting since</p><p className="fw700">2021 ✨</p></div>
            </div>
          </div>

          <div className="about-text">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-heading">Made with care,<br/><em className="accent-rose">crafted with heart</em></h2>
            <p className="body-text">Petal &amp; Wick started in a tiny kitchen in 2021. What began as a passion for creating beautiful, natural things grew into something we're incredibly proud of.</p>
            <p className="body-text mt-sm">Every candle is poured by hand — never mass produced. We use 100% natural soy wax, cotton wicks and premium fragrance oils because your home deserves the best.</p>
            <div className="about-pillars">
              {[["🌿","100% Soy\nWax"],["♻️","Zero Waste\nPackaging"],["💝","Small Batch\nHandmade"]].map(([e,l])=>(
                <div key={l} className="pillar">
                  <span className="pillar-icon">{e}</span>
                  <p className="pillar-label">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section ta-center" id="reviews">
        <div className="container" style={{maxWidth:820}}>
          <p className="section-eyebrow">Customer Love</p>
          <h2 className="section-heading">What people are saying 💬</h2>
          <div className="review-card">
            <span className="review-quote">"</span>
            <div className="review-stars"><StarRating rating={REVIEWS[reviewIdx].rating} size={20}/></div>
            <blockquote className="review-text">"{REVIEWS[reviewIdx].text}"</blockquote>
            <div className="reviewer">
              <div className="reviewer-avatar"
                style={{background:`linear-gradient(135deg,${REVIEWS[reviewIdx].color},#F9D5D3)`}}>
                {REVIEWS[reviewIdx].initials}
              </div>
              <div className="reviewer-info">
                <p className="fw700">{REVIEWS[reviewIdx].name}</p>
                <p className="mid small">Purchased: {REVIEWS[reviewIdx].product}</p>
              </div>
            </div>
          </div>
          <div className="review-dots">
            {REVIEWS.map((_,i)=>(
              <button key={i} className={`dot${i===reviewIdx?" active":""}`} onClick={()=>setReview(i)}/>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container" style={{maxWidth:560,textAlign:"center"}}>
          <p style={{fontSize:40,marginBottom:12}}>💌</p>
          <h2 className="section-heading">Join the Petal Club</h2>
          <p className="body-text" style={{marginBottom:28}}>
            Get <strong>10% off</strong> your first order, early access to new drops &amp; cozy self-care tips.
          </p>
          {subscribed ? (
            <div className="subscribe-success">💝 Welcome to the Petal Club! Check your inbox!</div>
          ):(
            <form className="subscribe-form" onSubmit={e=>{e.preventDefault();email.includes("@")&&setSub(true);}}>
              <input type="email" placeholder="your@email.com" value={email}
                onChange={e=>setEmail(e.target.value)} className="subscribe-input" required/>
              <button type="submit" className="btn-primary">Subscribe ✨</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <p className="logo footer-logo">🌸 Petal &amp; Wick</p>
            <p className="footer-tagline">Handcrafted with love in our little studio. Made for your home, your self-care, and your heart.</p>
            <div className="social-icons">
              {["📷","📌","🎵"].map((e,i)=><span key={i} className="social-icon">{e}</span>)}
            </div>
          </div>
          {[
            ["Shop",   ["Crystal Petal","Sunflower Garden","Matcha Dream","Coffee Morning","Bubble Cloud"]],
            ["Help",   ["Shipping Info","Returns","FAQ","Contact Us"]],
            ["Connect",["Instagram","Pinterest","TikTok","Newsletter"]],
          ].map(([title,items])=>(
            <div key={title} className="footer-col">
              <h4 className="footer-col-title">{title}</h4>
              {items.map(item=><p key={item} className="footer-link">{item}</p>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2025 Petal &amp; Wick. All rights reserved.</p>
          <p>Made with 💝 · 100% Natural Soy Wax</p>
        </div>
      </footer>

    </div>
  );
}
