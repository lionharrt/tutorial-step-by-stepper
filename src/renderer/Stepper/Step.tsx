import React from 'react'
import { Step } from 'TutorialManager/TUTORIAL.type'

type StepProps = {
    number:number
    step:Step
}
const Step = ({number,step}:StepProps ) => {
	return (
		<div>
			<h4>Step number {number}</h4>
			{step.description && <div>{step.description}</div>}
			<button>Run</button>
		</div>
	)
}

export default Step
