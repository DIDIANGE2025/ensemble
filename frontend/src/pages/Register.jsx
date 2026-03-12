import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Register() {
  const [form, setForm] = useState({ email: '', username: '', password: '', city: '' })
  const { register, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ok = await register(form)
    if (ok) navigate('/login')
  }

  return (
    <main style={{ maxWidth: 400, margin: '80px auto', padding: '0 20px' }}>
      <h2>Créer un compte 💙</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {['email','username','password','city'].map(field => (
        <input key={field} placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
          type={field === 'password' ? 'password' : 'text'}
          value={form[field]} onChange={e => setForm({...form, [field]: e.target.value})}
          style={{ width: '100%', padding: 12, margin: '8px 0', borderRadius: 8, border: '1px solid #ddd' }} />
      ))}
      <button onClick={handleSubmit} disabled={loading}
        style={{ width: '100%', padding: 14, background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
        {loading ? 'Inscription...' : "S'inscrire"}
      </button>
    </main>
  )
}
