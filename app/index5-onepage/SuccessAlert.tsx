import { Alert } from "react-bootstrap";

const SuccessAlert = () => {
  const variant = "success";
  return (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
};

export default SuccessAlert;
