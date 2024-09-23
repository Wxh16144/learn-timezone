import { format, differenceInHours, } from "date-fns";
import { UTCDate } from "@date-fns/utc";
import { TZDate } from "@date-fns/tz";
import { useUpdate, useRafInterval } from 'ahooks'
import { useTZ } from '../context';
import { Descriptions } from 'antd';

const formatTpl = 'yyyy-MM-dd HH:mm:ss';

function Reference() {
  const tz = useTZ();

  const update = useUpdate();
  useRafInterval(update, 1_000);

  const local = format(new Date(), formatTpl)
  const utc = format(new UTCDate(), formatTpl)
  const tzTime = format(new TZDate(new Date(), tz), formatTpl)
  const diff = differenceInHours(tzTime, local)

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