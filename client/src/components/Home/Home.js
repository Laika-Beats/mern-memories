import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "../../styles";

function Home({ currentId, setCurrentId, posts }) {
  const classes = useStyles();
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={8}>
            <Posts
              currentId={currentId}
              setCurrentId={setCurrentId}
              getPosts={getPosts}
              posts={posts}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
