// import { ipcRenderer } from 'electron/renderer'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import TutorialManager from 'TutorialManager'
import { TUTORIAL } from 'TutorialManager/TUTORIAL.type'

type HomeProps = {
   
}
const Home = ({ history }: HomeProps & RouteComponentProps) => {
	const tutorials = TutorialManager().local
	const [tutorial, setTutorial] = useState<TUTORIAL>()
	// const [startDirectory, setStartDirectory] = useState<string>()
    
	// useEffect(() => {
	// 	console.log(startDirectory)
	// },[startDirectory])
	return (
		<div style={{display:'flex', flexDirection:'column', padding:'2rem',alignItems:'center',justifyContent:'center', marginBottom:'15vh'}}>
			<h4>Please Choose a Tutorial to begin</h4>
			<select
				style={{ marginBottom: '2rem' ,fontSize:'1.5rem' , borderRadius:'1rem', padding:'0.5rem'}}
				onChange={e => setTutorial(tutorials.find((tutorial) => tutorial.name === e.target.value))} // because using shitty select that cant have object values
			>
				<option value={undefined}>None</option>
				{tutorials.map((tutorial) =>
					<option key={tutorial.name}>{tutorial.name}</option>
				)}
			</select>
		
			{/* <button onClick={() => ipcRenderer.send('choose-directory')}>
                Choose Starting Directory
			</button> */}
			
			<button disabled={!tutorial} onClick={() => history.push('/stepper',{tutorial})}>
                Continue
			</button>
		</div>
	)
}

export default Home
