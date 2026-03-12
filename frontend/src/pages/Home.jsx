import { useState, useEffect } from 'react'

const communities = [
  { name: "Randonneurs de Bruxelles", members: 234, tag: "Sport", color: "#C8F55A", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80" },
  { name: "Cinéphiles de Paris", members: 189, tag: "Culture", color: "#FF6B6B", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
  { name: "Book Club Montréal", members: 312, tag: "Lecture", color: "#69D2FF", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80" },
  { name: "Yoga & Méditation Lyon", members: 156, tag: "Bien-être", color: "#FFB347", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80" },
  { name: "Photographes Genève", members: 98, tag: "Art", color: "#C8F55A", img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&q=80" },
  { name: "Gamers Paris 15e", members: 445, tag: "Gaming", color: "#FF6B6B", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80" },
  { name: "Cuisiniers du Dimanche", members: 267, tag: "Gastronomie", color: "#69D2FF", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  { name: "Coworking Nomades", members: 134, tag: "Travail", color: "#FFB347", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" },
]

const taglines = ["Tu n'es pas seul(e).", "Trouve ta tribu.", "Connecte-toi vraiment.", "Ensemble, c'est tout."]

const heroImages = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
  "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1200&q=80",
]

export default function Home() {
  const [tagline, setTagline] = useState(0)
  const [heroImg, setHeroImg] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTagline(i => (i + 1) % taglines.length), 2800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setHeroImg(i => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', overflow: 'hidden' }}>

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative' }}>
        {heroImages.map((img, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: heroImg === i ? 0.12 : 0, transition: 'opacity 1.5s ease', pointerEvents: 'none' }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, var(--black) 80%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, padding: '6px 16px', marginBottom: 40, fontSize: 13, color: 'var(--muted)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            La plateforme qui rapproche les gens
          </div>

          <h1 className="fade-up-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 9vw, 100px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 24, maxWidth: 900 }}>
            L'endroit en ligne<br />
            <span style={{ background: 'linear-gradient(135deg, #C8F55A 0%, #a8e840 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>pour trouver</span><br />
            tes gens hors ligne
          </h1>

          <p className="fade-up-3" style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: 'var(--muted)', fontWeight: 300, fontStyle: 'italic', marginBottom: 48, minHeight: 36 }}>
            {taglines[tagline]}
          </p>

          <div className="fade-up-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/register" style={{ background: '#C8F55A', color: '#0D0D0D', padding: '16px 40px', borderRadius: 100, fontWeight: 700, fontSize: 16, display: 'inline-block', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.boxShadow = '0 8px 30px rgba(200,245,90,0.3)'; }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>
              Rejoindre la communauté
            </a>
            <a href="/login" style={{ background: 'transparent', color: '#F5F0E8', padding: '16px 40px', borderRadius: 100, fontWeight: 400, fontSize: 16, border: '1px solid #2A2A2A', display: 'inline-block', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.target.style.borderColor = '#F5F0E8'}
              onMouseLeave={e => e.target.style.borderColor = '#2A2A2A'}>
              Se connecter
            </a>
          </div>

          <div className="fade-up-4" style={{ display: 'flex', gap: 48, marginTop: 80, borderTop: '1px solid #2A2A2A', paddingTop: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['2 400+', 'Membres actifs'], ['180+', 'Groupes créés'], ['320+', 'Événements ce mois']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700 }}>{n}</div>
                <div style={{ fontSize: 13, color: '#888880', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gridTemplateRows: '300px 300px', gap: 12 }}>
          <div style={{ gridRow: '1 / 3', backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Des vraies rencontres</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Hors des écrans</div>
            </div>
          </div>
          <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#fff' }}>Des activités</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Près de chez toi</div>
            </div>
          </div>
          <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#fff' }}>Une communauté</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Qui te ressemble</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #2A2A2A', borderBottom: '1px solid #2A2A2A', padding: '18px 0', overflow: 'hidden', background: '#141414' }}>
        <div style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...communities, ...communities].map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#888880' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, display: 'inline-block' }} />
              {c.name}
            </span>
          ))}
        </div>
      </div>

      <section style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1 }}>
            Des communautés<br />qui te ressemblent
          </h2>
          <a href="/register" style={{ color: '#C8F55A', fontSize: 14, fontWeight: 500, borderBottom: '1px solid #C8F55A', paddingBottom: 2 }}>Voir tout →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {communities.map((c, i) => (
            <div key={i} style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: 16, overflow: 'hidden', transition: 'transform 0.2s, border-color 0.2s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = c.color + '66'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#2A2A2A'; }}>
              <div style={{ height: 160, backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,1) 0%, transparent 60%)' }} />
                <span style={{ position: 'absolute', top: 14, left: 14, background: c.color + '22', color: c.color, padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 500, backdropFilter: 'blur(10px)', border: `1px solid ${c.color}44` }}>
                  {c.tag}
                </span>
              </div>
              <div style={{ padding: '16px 20px 20px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#888880' }}>👥 {c.members} membres</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: '0 auto 80px', maxWidth: 1100, padding: '0 24px' }}>
        <div style={{ borderRadius: 24, padding: 'clamp(48px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden', backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.82)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
              Prêt(e) à rencontrer<br />des gens formidables ?
            </h2>
            <p style={{ color: '#888880', fontSize: 17, marginBottom: 40, fontWeight: 300 }}>Rejoins des milliers de personnes qui ont trouvé leur communauté.</p>
            <a href="/register" style={{ background: '#C8F55A', color: '#0D0D0D', padding: '18px 48px', borderRadius: 100, fontWeight: 700, fontSize: 17, display: 'inline-block', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.boxShadow = '0 8px 30px rgba(200,245,90,0.4)'; }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>
              C'est gratuit — Commencer
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}