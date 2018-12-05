import * as React from "react"
import Box from "$components/Box"
import Heading from "$components/Heading"
import Text from "$components/Text"
import { Sidebar } from "../shared"

export const NotFound = () => (
  <Box>
    <Sidebar />
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      color="text"
    >
      <Heading fontSize={6} fontWeight={500}>
        Page Not Found
      </Heading>
      <Text>Check if you haven't changed the document route or deleted it!</Text>
    </Box>
  </Box>
)
