import { useEffect, useState } from 'react'
import api from '../api/client'

export default function Groups() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    api.get('/api/v1/groups/').then(r => setGroups(r.data)).catch(() => {})
  }, [])

  const join = async (id) => {
    try {
      await api.post(`/api/v1/groups/${id}/join`)
      alert('Groupe rejoint 💙')
    } catch (e) {
      alert(e.response?.data?.detail || 'Erreur')
    }
  }

  return (
    <main style={{ maxWidth: 700, margin: '60px auto', padding: '0 20px' }}>
      <h2>Groupes 👥</h2>
      {groups.length === 0 && <p style={{ color: '#888' }}>Aucun groupe pour l'instant. Sois le premier à en créer un !</p>}
      {groups.map(g => (
        <div key={g.id} style={{ background: '#f9f9f9', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #eee' }}>
          <h3 style={{ margin: '0 0 8px' }}>{g.name}</h3>
          <p style={{ color: '#666', margin: '0 0 8px' }}>{g.description}</p>
          <span style={{ background: '#e8f0fe', color: '#1a73e8', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>{g.category}</span>
          <span style={{ marginLeft: 10, color: '#888', fontSize: 13 }}>📍 {g.city}</span>
          <button onClick={() => join(g.id)}
            style={{ display: 'block', marginTop: 12, padding: '8px 20px', background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            Rejoindre
          </button>
        </div>
      ))}
    </main>
  )
}
