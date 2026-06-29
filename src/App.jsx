import { useState, useEffect } from "react";

/* ── Unsplash free photo URLs (no attribution required) ── */
const U = id => `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`;

const PRODUCTS = [
  { id:1,  name:"Rose Petal Candle",       cat:"candles", price:24, img:U("1601479604588-68d9e6d386b5"), badge:"Best Seller", rating:5, reviews:42, scent:"Fresh roses & amber" },
  { id:2,  name:"Sunflower Garden Candle", cat:"candles", price:22, img:U("1572726729207-a78d6feb18d7"),                      rating:5, reviews:31, scent:"Summer fields & honey" },
  { id:3,  name:"Coffee Morning Candle",   cat:"candles", price:26, img:U("1603006905003-be475563bc59"), badge:"New",          rating:4, reviews:28, scent:"Espresso & warm vanilla" },
  { id:4,  name:"Ocean Seashells Candle",  cat:"candles", price:22, img:U("1643122966676-29e8597257f7"),                      rating:5, reviews:67, scent:"Sea salt & driftwood" },
  { id:5,  name:"Koi Fish Pond Candle",    cat:"candles", price:28, img:U("1561212856-44e9bae482aa"),   badge:"Limited",      rating:5, reviews:45, scent:"Lotus blossom & water" },
  { id:6,  name:"Lavender Breeze Candle",  cat:"candles", price:20, img:U("1612293905607-b003de9e54fb"),                      rating:5, reviews:38, scent:"Lavender & chamomile" },
  { id:7,  name:"Vanilla Cloud Candle",    cat:"candles", price:24, img:U("1601922046210-41e129a3e64a"),                      rating:5, reviews:52, scent:"Vanilla bean & sandalwood" },
  { id:8,  name:"Honey Oat Soap Bar",      cat:"soaps",   price:9,  img:U("1584305574647-0cc949a2bb9f"), badge:"Popular",     rating:5, reviews:67, scent:"Oat, honey & shea" },
  { id:9,  name:"Wildflower Soap Set",     cat:"soaps",   price:24, img:U("1585145868057-135bf14b0503"),                      rating:5, reviews:45, scent:"Wildflower meadow · 3-bar set" },
  { id:10, name:"Citrus Burst Soap",       cat:"soaps",   price:11, img:U("1661450159193-633134194753"),                      rating:4, reviews:22, scent:"Citrus & ginger" },
];

const REVIEWS = [
  { name:"Sarah M.",   rating:5, text:"I ordered the rose candle as a gift and my friend absolutely loved it! The scent is heavenly and the packaging is so beautiful.", product:"Rose Petal Candle",      initials:"SM", color:"#F9D5D3" },
  { name:"Emma K.",    rating:5, text:"The honey oat soap bars are so gentle on my skin. I've repurchased them three times already — I genuinely can't imagine using anything else!", product:"Honey Oat Soap Bar",     initials:"EK", color:"#FFD4B2" },
  { name:"Jessica T.", rating:5, text:"The koi fish pond candle is absolutely gorgeous. The scent fills my entire room and the illustration on the box is stunning.",  product:"Koi Fish Pond Candle",  initials:"JT", color:"#C8DDD1" },
  { name:"Lily R.",    rating:5, text:"Every single product feels so carefully handcrafted. You can truly feel the love in each item. My whole apartment smells amazing!", product:"Lavender Breeze Candle",initials:"LR", color:"#EAD7F5" },
  { name:"Olivia P.",  rating:5, text:"Ordered the wildflower soap set for my mum's birthday — she cried happy tears! This is absolutely the best shop I've discovered.", product:"Wildflower Soap Set",   initials:"OP", color:"#C8DDD1" },
];

const CATS = ["all","candles","soaps"];
const CAT_LABEL = { all:"✨ All", candles:"🕯️ Candles", soaps:"🧼 Soaps" };
const HERO_IDS  = [1, 4, 6, 7];
const ABOUT_IMG = U("1528351655744-27cc30462816");

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
  const [activeCat,  setCat]       = useState("all");
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
    setTimeout(()=>setToast(null),2500);
  };
  const updQty = (id,d) => setCart(prev=>prev.map(i=>i.id===id?{...i,qty:i.qty+d}:i).filter(i=>i.qty>0));

  const cartTotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const filtered  = activeCat==="all" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeCat);
  const heroItems = PRODUCTS.filter(p=>HERO_IDS.includes(p.id));

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
                    <span className="mid">Subtotal ({cartCount} items)</span>
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
              {["Shop","Candles","Soaps","About"].map(n=>(
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
            {["Shop","Candles","Soaps","About"].map(n=>(
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
              ✨ Free shipping on orders over $35 &nbsp;·&nbsp; 🌸 New arrivals every Friday &nbsp;·&nbsp; 🕯️ Use code PETAL10 for 10% off &nbsp;·&nbsp; 🌿 100% natural &amp; organic &nbsp;&nbsp;&nbsp;
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
            <p className="hero-sub">Artisanal candles, handmade soaps &amp; botanical art — crafted in small batches with organic ingredients and a whole lot of love.</p>
            <div className="hero-ctas">
              <a href="#products" className="btn-primary">Shop Now ✨</a>
              <a href="#about" className="btn-outline">Our Story</a>
            </div>
            <div className="trust-badges">
              {[["🌿","100% Natural"],["♻️","Eco Packaging"],["💝","Handcrafted"]].map(([e,l])=>(
                <span key={l} className="trust-badge"><span>{e}</span>{l}</span>
              ))}
            </div>
          </div>
          <div className="hero-cards" aria-hidden="true">
            {heroItems.map((p,i)=>(
              <div key={p.id} className={`hero-card rot-${i%2===0?"l":"r"} ${i>=2?"hero-card-low":""}`}
                onClick={()=>addToCart(p)}>
                <div className="hero-card-illo">
                  <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:12}} loading="eager"/>
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
        {[["500+","Happy Customers"],["100%","Natural Ingredients"],["3–5 Days","Avg. Shipping"],["200+","5-Star Reviews"]].map(([n,l])=>(
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
          <p className="section-sub">Each item is made in small batches — because quality always matters more than quantity.</p>
          <div className="cat-tabs">
            {CATS.map(cat=>(
              <button key={cat} className={`cat-tab${activeCat===cat?" active":""}`} onClick={()=>setCat(cat)}>
                {CAT_LABEL[cat]}
              </button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map(p=>(
              <article key={p.id} className={`product-card${hovered===p.id?" lifted":""}`}
                onMouseEnter={()=>setHovered(p.id)} onMouseLeave={()=>setHovered(null)}>
                <div className="product-illo">
                  <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} loading="lazy"/>
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                  <button className="wish-btn"
                    onClick={()=>setWishlist(w=>w.includes(p.id)?w.filter(i=>i!==p.id):[...w,p.id])}
                    aria-label="Wishlist">
                    {wishlist.includes(p.id)?"❤️":"🤍"}
                  </button>
                </div>
                <div className="product-body">
                  <p className="product-cat">{p.cat==="soaps"?"Handmade Soap":"Soy Candle"}</p>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-scent">{p.scent}</p>
                  <div className="rating-row">
                    <StarRating rating={p.rating} size={13}/><span className="mid small">({p.reviews})</span>
                  </div>
                  <div className="price-row">
                    <span className="price">${p.price.toFixed(2)}</span>
                    <button className={`add-btn${hovered===p.id?" active":""}`} onClick={()=>addToCart(p)}>+ Cart</button>
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
              <img src={ABOUT_IMG} alt="Handcrafted candles" style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy"/>
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
            <p className="body-text mt-sm">Every candle and every soap bar is handmade — never mass produced. We source organic ingredients and use eco-friendly packaging because beauty shouldn't cost the earth.</p>
            <div className="about-pillars">
              {[["🌿","Organic\nIngredients"],["♻️","Zero Waste\nPackaging"],["💝","Small Batch\nHandmade"]].map(([e,l])=>(
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
              <div className="reviewer-avatar" style={{background:`linear-gradient(135deg,${REVIEWS[reviewIdx].color},#F9D5D3)`}}>
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
          <p className="body-text" style={{marginBottom:28}}>Get <strong>10% off</strong> your first order, early access to new arrivals &amp; cozy self-care tips.</p>
          {subscribed ? (
            <div className="subscribe-success">💝 Welcome to the Petal Club! Check your inbox!</div>
          ):(
            <form className="subscribe-form" onSubmit={e=>{e.preventDefault();email.includes("@")&&setSub(true);}}>
              <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} className="subscribe-input" required/>
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
          {[["Shop",["Candles","Soaps","Gift Sets","New Arrivals"]],["Help",["Shipping Info","Returns","FAQ","Contact Us"]],["Connect",["Instagram","Pinterest","TikTok","Newsletter"]]].map(([title,items])=>(
            <div key={title} className="footer-col">
              <h4 className="footer-col-title">{title}</h4>
              {items.map(item=><p key={item} className="footer-link">{item}</p>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2025 Petal &amp; Wick. All rights reserved.</p>
          <p>Made with 💝 · Natural &amp; Sustainable</p>
        </div>
      </footer>

    </div>
  );
}
