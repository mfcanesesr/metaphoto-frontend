import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const CardPhoto = ({ photos }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Grid container spacing={2}>
      {photos.map((photo, index) => (
        <Grid item key={photo.id} xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#7abdfa" }} aria-label="recipe">
                  P
                </Avatar>
              }
              title={`Photo ${photo.id}`}
            />
            <CardMedia
              component="img"
              height="194"
              image={photo.url}
            />
            <CardActions disableSpacing>
              <ExpandMore
                expand={expandedIndex === index}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedIndex === index}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>About the photo:</Typography>
                <Typography paragraph style={{ textAlign: 'left' }}>
  <strong>Title:</strong> {photo.title} <br />
  <strong>Album:</strong> {photo.albumTitle} <br />
  <strong>Author:</strong> {photo.user} <br />
  <strong>User:</strong> {photo.username} <br />
  <strong>Email:</strong> {photo.email} <br />
  <strong>Phone:</strong> {photo.phone} <br />
  <strong>Website:</strong> {photo.website}
</Typography>

              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPhoto;
