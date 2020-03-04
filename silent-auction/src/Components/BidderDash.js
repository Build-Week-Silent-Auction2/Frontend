import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// Material UI Styles //
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

// Dashboard Component //
const BidderDash = props => {
  // Brings in styles //
  const classes = useStyles();
  // Material UI required state //
  const [expanded, setExpanded] = React.useState(false);
  // Material UI required handler //
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory();
  const signOut = () => {
    window.localStorage.removeItem("token");
  };
  //.get array with users items that have bids
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={() => history.push("/shop/")}>Go To Auctions</button>
    </div>
  );
};

export default BidderDash;
