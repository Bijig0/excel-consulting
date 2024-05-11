import { Alert } from "react-bootstrap";

const ErrorAlert = () => {
  const variant = "error";
  return (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
};

export default ErrorAlert;
