import { useTZ } from "../context";

function Index() {
  const tz = useTZ();

  return (
    <>
      <h1 >Hello, Vite!</h1>
      <code >src/pages/index.tsx</code>
      <p >Timezone: {tz}</p>
    </>
  );
}

export default Index;
