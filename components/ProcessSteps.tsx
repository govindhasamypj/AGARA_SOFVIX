interface Step {
  step: number
  title: string
  description?: string
}

interface ProcessStepsProps {
  steps: Step[]
  orientation?: 'horizontal' | 'vertical'
}

export default function ProcessSteps({ steps, orientation = 'vertical' }: ProcessStepsProps) {
  if (orientation === 'horizontal') {
    return (
      <div className="flex space-x-8">
        {steps.map((step) => (
          <div key={step.step} className="text-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4">{step.step}</div>
            <h3 className="font-semibold">{step.title}</h3>
            {step.description && <p className="text-gray-600">{step.description}</p>}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {steps.map((step) => (
        <div key={step.step} className="flex">
          <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">{step.step}</div>
          <div>
            <h3 className="font-semibold">{step.title}</h3>
            {step.description && <p className="text-gray-600">{step.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}