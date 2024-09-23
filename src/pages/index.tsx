import React from "react";
import { Button, Card, Flex, Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';

const demos = import.meta.glob<{ default: React.ComponentType }>('./!(index).tsx');

function Index() {
  const renderDemos = Object.entries(demos)
    .map(([key, load]) => ({
      Component: React.lazy(load),
      key,
      path: key.replace('./', '').replace('.tsx', ''),
    }))

  const navigate = useNavigate();

  return (
    <React.Suspense fallback={<Skeleton active />}>
      <Flex vertical style={{ padding: 12 }} gap="middle">
        {
          renderDemos.map(({ Component, key, path }) => (
            <Card
              key={key}
              title={key}
              extra={
                <Button
                  type="link"
                  onClick={() => {
                    React.startTransition(() => {
                      navigate(path)
                    });
                  }}
                >
                  View
                </Button>
              }
            >
              <Component />
            </Card>
          ))
        }
      </Flex>
    </React.Suspense>
  );
}

export default Index;
