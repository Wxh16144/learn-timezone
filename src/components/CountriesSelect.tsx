/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader, Flex } from 'antd';
import useMergedState from 'rc-util/es/hooks/useMergedState'
import countriesDB from 'countries-db'

export interface CountriesSelectProps extends Pick<
  CascaderProps,
  'placeholder'
  | 'expandTrigger'
  | 'placement'
  | 'style'
  | 'className'
> {
  tz?: string;
  defaultTz?: string;
  onTZChange?: (tz: string) => void;
}

const LABEL = '__label__';
const VALUE = '__value__';
const CHILDREN = '__children__';

// 将 数据 通过 localeCompare 进行排序
const handleSortFactory = (key = LABEL) =>
  (a: any, b: any) => a[key].localeCompare(b[key], { sensitivity: 'base' });

class Countries {
  private countries: any;

  constructor() {
    this.countries = countriesDB.getAllCountries()
  }

  getAllCountries() {
    return this.countries
  }

  get options() {
    const handleSort = handleSortFactory(LABEL);

    return Object.entries(this.countries)
      .map(([code, country]: any) => {
        const { timezones, name } = country;
        const isLeaf = Array.isArray(timezones) && timezones.length === 1;
        return {
          ...country,
          [LABEL]: name,
          ...(
            isLeaf
              ? { [VALUE]: timezones[0] }
              : {
                [VALUE]: code,
                [CHILDREN]: country.timezones.map((tz: string) => ({
                  [LABEL]: tz,
                  [VALUE]: tz,
                })).sort(handleSort),
              }
          ),
        }
      }).sort(handleSort);
  }

  getCountryByCode(code: string) {
    return this.countries[code]
  }

  getCountriesByTimezone(tz?: string): any {
    if (!tz) return null;

    return Object.values(this.countries)
      .find((country: any) => country.timezones.includes(tz))
  }
}

function CountriesSelect(props: CountriesSelectProps) {
  const { tz, defaultTz, onTZChange, ...rest } = props;
  const [countries] = React.useState(() => new Countries());

  const [value, setValue] = useMergedState<any>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    {
      defaultValue: defaultTz,
      value: tz,
      onChange: v => {
        onTZChange?.(Array.isArray(v) ? v.pop() : v);
      },
      postState: (v) => {
        if (Array.isArray(v)) {
          return v;
        } else {
          return [
            countries.getCountriesByTimezone(v)?.id,
            v,
          ].filter(Boolean);
        }
      }
    }
  );

  const optionRender: CascaderProps['optionRender'] = (item) => (
    <Flex gap="small">
      {
        [item.emoji, item[LABEL]]
          .filter(Boolean)
          .map((v, i) => <span key={i}>{v}</span>)
      }
    </Flex>
  )

  const displayRender: CascaderProps['displayRender'] = (labels, selectedOptions) => {
    const _tz = Array.isArray(labels) ? labels.pop() : labels;
    const country = Array.isArray(selectedOptions) ? selectedOptions[0] : null;
    return (
      <Flex gap="small">
        {country?.emoji && <span>{country.emoji}</span>}
        <span>{_tz}</span>
      </Flex>
    )
  }

  return (
    <Cascader
      {...rest}
      value={value}
      options={countries.options}
      optionRender={optionRender}
      displayRender={displayRender}
      fieldNames={{ label: LABEL, value: VALUE, children: CHILDREN }}
      showSearch
      onChange={v => setValue(v)}
      placeholder="Select Timezone"
    />
  );
}

export default React.memo(CountriesSelect);
