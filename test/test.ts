import main from '../src/main'

main(
  {
    id: 'test',
    version: '0',
    account: '000000000000',
    time: '2020-01-01T00:00:00Z',
    region: 'ap-northeast-1',
    resources: ['test'],
    source: 'aws.event',
    'detail-type': 'Scheduled Event',
    detail: {},
  },
  {} as any
)
