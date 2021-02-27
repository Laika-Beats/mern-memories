import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "../../styles";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const posts = useSelector((state) => state.posts);

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

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
              dispatch={dispatch}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              postData={postData}
              setPostData={setPostData}
              dispatch={dispatch}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
