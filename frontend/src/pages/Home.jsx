export default function Home() {
  return (
    <main style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#1a73e8' }}>Ensemble 💙</h1>
      <p style={{ fontSize: '1.3rem', color: '#444', maxWidth: '600px', margin: '20px auto' }}>
        Trouve des gens près de toi, rejoins des groupes, participe à des événements.
        Tu n'es pas seul(e).
      </p>
      <a href="/register" style={{ background: '#1a73e8', color: '#fff', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', fontSize: '1.1rem' }}>
        Rejoindre la communauté
      </a>
    </main>
  )
}
