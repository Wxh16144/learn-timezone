
import { useUpdate, useRafInterval } from 'ahooks'
import { Descriptions } from 'antd';
// import moment from 'moment';
import moment from 'moment-timezone';
import { useTZ } from '../context';

const formatTpl = 'yyyy-MM-DD HH:mm:ss';

function Reference() {
  const tz = useTZ();

  const update = useUpdate();
  useRafInterval(update, 1_000);

  const local = moment().format(formatTpl)
  const utc = moment.utc().format(formatTpl)
  const tzTime = moment.tz(tz).format(formatTpl)
  const diff = moment(tzTime, formatTpl).diff(moment(local, formatTpl), 'hours')

  return (
    <Descriptions
      column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
      items={[
        {
          key: 'Timezone',
          label: 'Local Time',
          children: local
        },
        {
          key: 'utc',
          label: 'UTC Time',
          children: utc
        },
        {
          key: 'now (tz)',
          label: 'Timezone Time',
          children: tzTime
        },
        {
          key: 'diff hour',
          label: 'Diff Hour',
          children: diff
        }
      ]}
    />
  )
}

export default Reference;