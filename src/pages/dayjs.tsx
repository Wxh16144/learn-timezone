import React from 'react';
import dayjs from 'dayjs';

// dayjs plugin
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
// import dayjs.extend(duration)

import { useUpdate, useRafInterval } from 'ahooks'

import { useTZ } from '../context';
import { Descriptions } from 'antd';

const format = 'YYYY-MM-DD HH:mm:ss';

dayjs.extend(utc);
dayjs.extend(timezone);

function Demo() {
  const tz = useTZ();

  React.useEffect(() => dayjs.tz.setDefault(tz));

  const update = useUpdate();
  useRafInterval(update, 500);

  const local = dayjs().format(format);
  const utc = dayjs().utc().format(format);
  const tzTime = dayjs.tz().format(format);
  const diff = dayjs(tzTime, format).diff(dayjs(local, format), 'hour');

  return (
    <Descriptions
      title="Dayjs"
      column={1}
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

export default Demo;