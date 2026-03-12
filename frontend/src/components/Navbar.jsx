import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav style={{
      background: '#fff', borderBottom: '1px solid #eee',
      padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <a href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1a73e8', textDecoration: 'none' }}>
        Ensemble 💙
      </a>
      <div style={{ display: 'flex', gap: 20 }}>
        {token ? (
          <>
            <a href="/dashboard" style={{ color: '#444', textDecoration: 'none' }}>Dashboard</a>
            <a href="/groups"    style={{ color: '#444', textDecoration: 'none' }}>Groupes</a>
            <a href="/events"    style={{ color: '#444', textDecoration: 'none' }}>Événements</a>
            <button onClick={logout} style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer' }}>
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <a href="/login"    style={{ color: '#444', textDecoration: 'none' }}>Connexion</a>
            <a href="/register" style={{ background: '#1a73e8', color: '#fff', padding: '6px 16px', borderRadius: 20, textDecoration: 'none' }}>
              S'inscrire
            </a>
          </>
        )}
      </div>
    </nav>
  )
}
