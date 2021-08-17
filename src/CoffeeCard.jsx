import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import {CardMedia} from "@material-ui/core";

const CoffeeCard = (props) => {
  const {avatarUrl, title, price, description, imageUrl} = props;

  return (
    <Card style={{marginTop: "25px", height: "400px", overflow: "auto"}}>
      <CardHeader
        style={{color: "blue", textTransform: "uppercase"}}
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        component="img"
        style={{height: "200px", width: "100%", objectFit: "contain"}}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color: "purple"}} size="small">
          BUY NOW
        </Button>
        <Button style={{color: "purple"}} size="small">
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
