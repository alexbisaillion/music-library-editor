import { Container, CssBaseline } from "@material-ui/core";
import { FunctionComponent } from "react";

export const PageContainer: FunctionComponent = ({ children }) => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      {children}
    </Container>
  );
};