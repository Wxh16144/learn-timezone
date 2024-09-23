
import { useUpdate, useRafInterval } from 'ahooks'
import { useTZ } from '../context';
import { Descriptions } from 'antd';
import { DateTime } from 'luxon';

const formatTpl = 'yyyy-MM-dd HH:mm:ss';

function Reference() {
  const tz = useTZ();

  const update = useUpdate();
  useRafInterval(update, 1_000);

  const local = DateTime.now().toFormat(formatTpl)
  const utc = DateTime.utc().toFormat(formatTpl)
  const tzTime = DateTime.now().setZone(tz).toFormat(formatTpl)
  const diff = DateTime.fromFormat(tzTime, formatTpl).diff(DateTime.fromFormat(local, formatTpl), 'hours').hours

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