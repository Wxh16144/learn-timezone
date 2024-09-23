
import React from "react"
import CountriesSelect from "./components/CountriesSelect"
import { TZProvider } from "./context"
import { Card, Divider } from "antd"
import { useRoutes, useLocation } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'antd-style'
import { useEvent } from "rc-util"
import routes from '~react-pages'
import Reference from "./components/Reference"
import dayjs from "dayjs"

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${({ theme }) => theme.colorBgContainer};
    color: ${({ theme }) => theme.colorText};
  }
`

function App() {
  const [tz, updateTz] = React.useState<string>(__TIMEZONE__);
  const { pathname } = useLocation()

  const setTz = useEvent((newTz: string) => {
    updateTz(newTz)
    dayjs.tz.setDefault(newTz)
  })

  return (
    <ThemeProvider themeMode="auto">
      <GlobalStyle />
      <TZProvider value={tz}>
        <Card
          style={{ margin: 18 }}
          title={
            <CountriesSelect
              tz={tz}
              onTZChange={setTz}
              placement="bottomRight"
            />
          }
          extra={tz}
        >
          <Reference />
        </Card>
        <Divider>{pathname}</Divider>
        {useRoutes(routes)}
      </TZProvider>
    </ThemeProvider>
  )
}

export default App
