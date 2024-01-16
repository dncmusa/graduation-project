import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "../styles/Card.module.css";

import { Button, CardActionArea, CardActions } from "@mui/material";
import { useGradContext } from "@/context";
import { useState } from "react";

export default function ProfileCard() {
  const { peopleData, toggleLng } = useGradContext();
  const [hoveredCardId, setHoveredCardId] = useState(null);
  return (
    <div className="cardContainer">
      <div className="cardsHeader">
      <h1>About The Project</h1>
      <p style={{marginTop: 30}}>
        Our website is a platform that highlights the students who have
        completed the front-end development bootcamp. This website features a
        gallery of students, along with their names and a brief description of
        their profile. Visitors can browse through the gallery and learn more
        about each student by clicking on the provided links.{" "}
      </p>
      </div>
      <div className={classes.container}>
        {peopleData.map((person) => (
          <div className={classes.cardContainer} key={person.id}>
            <Card
              sx={{ width: 400 }}
              className={classes.card}
              onMouseEnter={() => setHoveredCardId(person.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.cardImg}
                  component="img"
                  height="140"
                  image="/ba-favicon.png"
                  alt="green iguana"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    {person.fullName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={classes.cardDescription}
                  >
                    {toggleLng ? person.description.en : person.description.tr}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {hoveredCardId === person.id && (
                <CardActions className={classes.linksArea}>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.linkedin}>LinkedIn</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a target="_blank" href={person.github}>Github</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a target="_blank" href={person.medium}>Medium</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a target="_blank" href={person.codePen}>CodePen</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a target="_blank" href={person.codeSandBox}>CodeSandBox</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a target="_blank" href={person.portfolio}>Portfolio</a>
                  </Button>
                </CardActions>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
