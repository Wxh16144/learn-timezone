
import React from "react"
import CountriesSelect from "./components/CountriesSelect"
import { TZProvider } from "./context"
import { Card, Divider } from "antd"
import { useRoutes, useLocation } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'antd-style'

import routes from '~react-pages'
import Reference from "./components/Reference"

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${({ theme }) => theme.colorBgContainer};
    color: ${({ theme }) => theme.colorText};
  }
`

function App() {
  const [tz, setTz] = React.useState<string>(__TIMEZONE__);
  const { pathname } = useLocation()

  return (
    <ThemeProvider themeMode="auto">
      <GlobalStyle />
      <TZProvider value={tz}>
        <Card
          style={{ margin: 18 }}
          title={<CountriesSelect onTZChange={setTz} placement="bottomRight" />}
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
