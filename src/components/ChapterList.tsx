import React from 'react'

interface ChapterListProps {
  curriculum: string
  onSelect: (chapter: string) => void
}

const ChapterList: React.FC<ChapterListProps> = ({ curriculum, onSelect }) => {
  const chapters = [
    'Numbers and Algebra',
    'Geometry and Measurement',
    'Statistics and Probability',
    'Ratios and Proportions',
    'Fractions and Decimals',
    'Patterns and Functions'
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h2 className="text-xl font-semibold mb-4 col-span-full">{curriculum} 6th Grade Chapters</h2>
      {chapters.map((chapter) => (
        <button
          key={chapter}
          onClick={() => onSelect(chapter)}
          className="btn btn-primary"
        >
          {chapter}
        </button>
      ))}
    </div>
  )
}

export default ChapterList