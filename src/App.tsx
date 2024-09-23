
import dayjsExport from "./shared/dayjs"

const DemoDayjs = () => (
  <pre>
    <code>
      {JSON.stringify(dayjsExport, null, 2)}
    </code>
  </pre>
)


function App() {

  return (
    <>
      <DemoDayjs />
      hello world
    </>
  )
}

export default App
