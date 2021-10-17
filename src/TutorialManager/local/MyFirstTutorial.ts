import { TUTORIAL } from '../TUTORIAL.type'

const MyFirstTutorial: TUTORIAL = {
	name:'My First Tutorial',
	init: {
		dependencies: [],
		command:''
	},
	steps: [
		{
			title: 'Initialize CRA App',
			command:'npx create-react-app my-app'
		}
	]
}
export default  MyFirstTutorial