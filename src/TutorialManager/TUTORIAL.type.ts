export type TUTORIAL = {
  name:string
  init: {
    dependencies:string[],
    command:string
  }
  steps: Step[]
}

export type Step = {
  title:string,
  description?: string,
  command:string
}
