import React from "react";
import { Panel, Flex, Box, BackgroundImage, Text } from "rebass";

function DataSection({ dataKey, data }) {
  return (
    <Panel mb={4}>
      <Panel.Header
        bg="blue"
        color="white"
        css={{ textTransform: "capitalize" }}
      >
        {dataKey}
      </Panel.Header>
      <Flex mx={-3} flexWrap="wrap">
        {data.length > 0 ? (
          data.map(item => (
            <Box width={[1, 1 / 2]} p={3} key={item}>
              <BackgroundImage
                src={`https://starwars-visualguide.com/assets/img/${dataKey}/${
                  item.split("/")[5]
                }.jpg`}
              />
            </Box>
          ))
        ) : (
          <Box m={4}>
            <Text textAlign="center">{`No ${dataKey}`}</Text>
          </Box>
        )}
      </Flex>
    </Panel>
  );
}

export default DataSection;
