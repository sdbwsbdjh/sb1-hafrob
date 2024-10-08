import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for math concepts..."
        className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="btn btn-primary">
        <Search size={20} />
      </button>
    </form>
  )
}

export default SearchBar