import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

import NavBar from "../components/NavBar";

const ErrorBoundaryPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading size="3xl">Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorBoundaryPage;
