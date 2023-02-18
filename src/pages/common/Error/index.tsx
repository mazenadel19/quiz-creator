import { Box, Stack, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return (
        <Stack alignItems={"center"}>You aren't authorized to see this</Stack>
      );
    }

    if (error.status === 404) {
      return <Stack alignItems={"center"}>This page doesn't exist!</Stack>;
    }

    if (error.status === 418) {
      return <Stack alignItems={"center"}>🫖</Stack>;
    }

    if (error.status === 503) {
      return <Stack alignItems={"center"}>Looks like our API is down</Stack>;
    }
  }

  return (
    <Stack spacing={3}>
      <Typography variant='h1' textAlign={"center"}>
        Oops!
      </Typography>
      {process.env.MODE !== "production" && (
        <Box component={"pre"} whiteSpace='pre-wrap' padding='1rem'>
          {JSON.stringify(error, null, 4).replace(/\\n/g, "\n")}
        </Box>
      )}
    </Stack>
  );
};

export default Error;
