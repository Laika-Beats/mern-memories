import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({ setCurrentId, currentId, getPosts, posts, dispatch }) {
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12}>
          <Post
            post={post}
            currentId={currentId}
            setCurrentId={setCurrentId}
            getPosts={getPosts}
            posts={posts}
            dispatch={dispatch}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
