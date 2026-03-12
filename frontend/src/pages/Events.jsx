import { useEffect, useState } from 'react'
import api from '../api/client'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    api.get('/api/v1/events/').then(r => setEvents(r.data)).catch(() => {})
  }, [])

  return (
    <main style={{ maxWidth: 700, margin: '60px auto', padding: '0 20px' }}>
      <h2>Événements 📅</h2>
      {events.length === 0 && <p style={{ color: '#888' }}>Aucun événement pour l'instant.</p>}
      {events.map(e => (
        <div key={e.id} style={{ background: '#f9f9f9', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #eee' }}>
          <h3 style={{ margin: '0 0 8px' }}>{e.title}</h3>
          <p style={{ color: '#666', margin: '0 0 8px' }}>{e.description}</p>
          <span style={{ color: '#34a853' }}>📅 {new Date(e.date).toLocaleDateString('fr-FR')}</span>
          <span style={{ marginLeft: 16, color: '#888' }}>📍 {e.city}</span>
        </div>
      ))}
    </main>
  )
}
