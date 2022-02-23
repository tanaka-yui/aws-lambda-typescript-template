import { ScheduledEvent, Context } from 'aws-lambda'
import main from './main'

export const handler = (event: ScheduledEvent, context: Context) => {
  main(event, context)
}
