import { useEffect, useState } from 'react'
import api from '../api/client'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    api.get('/api/v1/users/me').then(r => setUser(r.data)).catch(() => {})
  }, [])

  return (
    <main style={{ maxWidth: 700, margin: '60px auto', padding: '0 20px' }}>
      <h2>Tableau de bord 💙</h2>
      {user ? (
        <div style={{ background: '#f0f7ff', borderRadius: 12, padding: 24 }}>
          <p><strong>Bienvenue, {user.username} !</strong></p>
          <p>Ville : {user.city || 'Non renseignée'}</p>
          <p>Bio : {user.bio || 'Ajoute une bio pour te présenter'}</p>
        </div>
      ) : <p>Chargement...</p>}
      <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
        <a href="/groups" style={{ flex: 1, background: '#1a73e8', color: '#fff', padding: '20px', borderRadius: 12, textDecoration: 'none', textAlign: 'center' }}>
          👥 Mes groupes
        </a>
        <a href="/events" style={{ flex: 1, background: '#34a853', color: '#fff', padding: '20px', borderRadius: 12, textDecoration: 'none', textAlign: 'center' }}>
          📅 Événements
        </a>
      </div>
    </main>
  )
}
