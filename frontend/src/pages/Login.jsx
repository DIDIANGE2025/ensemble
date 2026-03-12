import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ok = await login(email, password)
    if (ok) navigate('/dashboard')
  }

  return (
    <main style={{ maxWidth: 400, margin: '80px auto', padding: '0 20px' }}>
      <h2>Connexion 💙</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: 12, margin: '8px 0', borderRadius: 8, border: '1px solid #ddd' }} />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 12, margin: '8px 0', borderRadius: 8, border: '1px solid #ddd' }} />
        <button onClick={handleSubmit} disabled={loading}
          style={{ width: '100%', padding: 14, background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: '1rem' }}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: 20 }}>
        Pas encore de compte ? <a href="/register">S'inscrire</a>
      </p>
    </main>
  )
}
