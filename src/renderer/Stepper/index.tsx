import React from 'react'
import { RouteComponentProps } from 'react-router'

type StepperProps = {
    
}
const Stepper =  ({ history }: StepperProps & RouteComponentProps)  => {
	return (
		<div>
			<button onClick={() => history.push('/')}>
                Back
			</button>
            
		</div>
	)
}

export default Stepper
