'use client'

import { useState, useEffect } from 'react'
import { UserCircle, Building2, Loader2 } from 'lucide-react'
import PlatformHeader from '@/app/components/UI/platformHeader'

interface User {
  name: string
  company: string
}

const UserCard = ({ user }: { user: User }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 rounded-full p-3">
          <UserCircle className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">{user.name}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <Building2 className="h-4 w-4 mr-1" />
            <span className="text-sm text-gray-300">{user.company}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LoadingState = () => (
  <div className="flex justify-center items-center h-64">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
)

const ErrorState = ({ message }: { message: string }) => (
  <div className="text-center text-red-500 p-4">
    <p>{message}</p>
  </div>
)

const UserList = ({ users }: { users: User[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {users.map((user, index) => (
      <UserCard key={index} user={user} />
    ))}
  </div>
)

export default function Team() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://worlderk.onrender.com/user/getall')
        if (!response.ok) throw new Error('Failed to fetch users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
        setError('Failed to load users. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
      <PlatformHeader>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">User List</h2>
          {loading ? <LoadingState /> : 
           error ? <ErrorState message={error} /> : 
           <UserList users={users} />}
        </div>
      </PlatformHeader>
  )
}
