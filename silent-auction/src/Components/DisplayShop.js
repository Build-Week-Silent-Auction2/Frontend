import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../App.css";
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
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

// Styled Components Styles //
const CardWrapper = styled.div`
  /* border: 2px solid black; */
  width: auto;
  margin-bottom: 3%;
  margin-top: 3%;
  margin-right: 2%;
  margin-left: 2%;
  /* display: flex;
  justify-content: center; */
`;

// Material UI Styles //
const useStyles = makeStyles((theme) => ({
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

// Display Component //
const Display = (props) => {
  // Brings in styles //
  const classes = useStyles();
  // Material UI required state //
  const [expanded, setExpanded] = React.useState(false);
  // Material UI required handler //
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory();
  const location = useLocation();

  const grabItemDetails = (id, obj) => {
    history.push(`${location.pathname}/item/${id}`, obj);
  };

  return (
    <div>
      <CardWrapper>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {props.item_name[0]}
              </Avatar>
            }
            title={`${props.item_name} starting at $${props.price} USD`}
            subheader={props.item_end_time}
            title={`${props.item_name}`}
            subheader={`Starting at $${props.price} USD`}
          />
          <CardMedia className={classes.media} image={props.img_url} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Bidding Ends In: <b>{props.item_end_time}</b>
            </Typography>
          </CardContent>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              grabItemDetails(
                props.allData.id,
                props.allData,
                props.setGetTrigger
              )
            }
            className="eachCard"
          >
            View Item
          </Button>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default Display;
