import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

interface ChapterContentProps {
  chapter: string
  onBack: () => void
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, onBack }) => {
  const [activeTab, setActiveTab] = useState('key-concepts')

  const tabs = [
    { id: 'key-concepts', label: 'Key Concepts' },
    { id: 'examples', label: 'Examples' },
    { id: 'formulas', label: 'Formulas' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'flashcards', label: 'Flashcards' },
  ]

  const content = {
    'key-concepts': (
      <div>
        <h3 className="text-lg font-semibold mb-2">Key Concepts for {chapter}</h3>
        <ul className="list-disc pl-5">
          <li>Concept 1: Lorem ipsum dolor sit amet</li>
          <li>Concept 2: Consectetur adipiscing elit</li>
          <li>Concept 3: Sed do eiusmod tempor incididunt</li>
        </ul>
      </div>
    ),
    'examples': (
      <div>
        <h3 className="text-lg font-semibold mb-2">Examples for {chapter}</h3>
        <ol className="list-decimal pl-5">
          <li>Example 1: Ut enim ad minim veniam</li>
          <li>Example 2: Quis nostrud exercitation ullamco</li>
          <li>Example 3: Laboris nisi ut aliquip ex ea commodo consequat</li>
        </ol>
      </div>
    ),
    'formulas': (
      <div>
        <h3 className="text-lg font-semibold mb-2">Formulas for {chapter}</h3>
        <div className="space-y-2">
          <p>Formula 1: E = mc²</p>
          <p>Formula 2: a² + b² = c²</p>
          <p>Formula 3: F = ma</p>
        </div>
      </div>
    ),
    'quiz': (
      <div>
        <h3 className="text-lg font-semibold mb-2">Quiz for {chapter}</h3>
        <p>Quiz content goes here...</p>
      </div>
    ),
    'flashcards': (
      <div>
        <h3 className="text-lg font-semibold mb-2">Flashcards for {chapter}</h3>
        <p>Flashcard content goes here...</p>
      </div>
    ),
  }

  return (
    <div className="space-y-4">
      <button onClick={onBack} className="btn btn-secondary flex items-center">
        <ArrowLeft size={16} className="mr-2" /> Back
      </button>
      <h2 className="text-2xl font-bold">{chapter}</h2>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-tertiary p-4 rounded-md">
        {content[activeTab as keyof typeof content]}
      </div>
    </div>
  )
}

export default ChapterContent