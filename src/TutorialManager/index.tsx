import MyFirstTutorial from './local/MyFirstTutorial'
import { TUTORIAL } from './TUTORIAL.type'

const TutorialManager = () => {
	const localTutorials: TUTORIAL[] = [MyFirstTutorial]
	
	return {
		local: localTutorials,
	}
}

export default TutorialManager
