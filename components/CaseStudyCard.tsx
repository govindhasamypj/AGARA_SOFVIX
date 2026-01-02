interface CaseStudyCardProps {
  problem: string
  solution: string
  outcome: string
}

export default function CaseStudyCard({ problem, solution, outcome }: CaseStudyCardProps) {
  return (
    <div className="border border-gray-200 p-6">
      <h3 className="text-xl font-semibold mb-2">Problem</h3>
      <p className="mb-4">{problem}</p>
      <h3 className="text-xl font-semibold mb-2">Solution</h3>
      <p className="mb-4">{solution}</p>
      <h3 className="text-xl font-semibold mb-2">Outcome</h3>
      <p>{outcome}</p>
    </div>
  )
}