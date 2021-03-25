import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Confirmation = () => {
  const classes = useStyles();

  return (
    <Alert severity="success">
      Order Placed Successfully! Check email to track order . Order ID -
      #4353dxp242
    </Alert>
  );
};

export default Confirmation;
