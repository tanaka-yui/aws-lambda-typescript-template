import { Context, ScheduledEvent } from 'aws-lambda'

const main = (event: ScheduledEvent, context: Context) => {
  console.log('hello world', event, context)
}

export default main
