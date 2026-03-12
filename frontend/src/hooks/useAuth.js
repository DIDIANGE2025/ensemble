import { useState } from 'react'
import api from '../api/client'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const form = new FormData()
      form.append('username', email)
      form.append('password', password)
      const res = await api.post('/api/v1/users/login', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      localStorage.setItem('token', res.data.access_token)
      const me = await api.get('/api/v1/users/me')
      setUser(me.data)
      return true
    } catch (e) {
      setError(e.response?.data?.detail || 'Erreur de connexion')
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const register = async (data) => {
    setLoading(true)
    setError(null)
    try {
      await api.post('/api/v1/users/register', data)
      return true
    } catch (e) {
      setError(e.response?.data?.detail || 'Erreur lors de l\'inscription')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, error, login, logout, register }
}
