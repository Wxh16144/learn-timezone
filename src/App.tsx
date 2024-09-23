
import React from "react"
import CountriesSelect from "./components/CountriesSelect"
import { TZProvider } from "./context"
import { Form } from "antd"
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

function App() {
  const [tz, setTz] = React.useState<string>(__TIMEZONE__);

  return (
    <>
      <Form
        style={{
          width: '100%',
          position: 'fixed',
          insetBlockEnd: 0,
          insetInlineStart: 0
        }}
      >
        <Form.Item label="Timezone">
          <CountriesSelect
            onTZChange={setTz}
            placement="topLeft"
          />
        </Form.Item>
      </Form>
      <TZProvider value={tz}>
        <code
          style={{
            fontStyle: 'italic',
            fontSize: '0.8em',
          }}
        >
          timezone: {tz}
        </code>
        {useRoutes(routes)}
      </TZProvider>

    </>
  )
}

export default App
