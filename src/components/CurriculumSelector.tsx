import React from 'react'

interface CurriculumSelectorProps {
  onSelect: (curriculum: string) => void
}

const CurriculumSelector: React.FC<CurriculumSelectorProps> = ({ onSelect }) => {
  const curricula = ['CBSE', 'IB', 'IGCSE']

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold mb-4">Choose a Curriculum</h2>
      {curricula.map((curriculum) => (
        <button
          key={curriculum}
          onClick={() => onSelect(curriculum)}
          className="btn btn-primary w-48"
        >
          {curriculum}
        </button>
      ))}
    </div>
  )
}

export default CurriculumSelector