import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 345,
    maxHeight: 300,
    textAlign: 'left'
  },
  cardItem: {
    overflow: 'hidden',
    maxHeight: 300
  },
  cardActions: {
    maxHeight: 200
  }
});

export default function BlogList({data:blogs}) {
  const classes = useStyles();
  const history = useHistory();
  const deletehandler = async (id) => {
   await fetch('http://localhost:8000/posts/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <Grid container spacing={2}>
      {
        blogs.map(blog => (
          <Grid item md={4} lg={3} sm={6} xs={12} key={blog.id} >
            <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                  alt="Contemplative Reptile"
                  style={{maxHeight:'100px'}}
                    image="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80"
                    title="Contemplative Reptile"
                  />
                <CardContent className={classes.cardItem}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" noWrap>
                      {blog.body}
                    </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                  <ShareIcon />
                </Button>
                <Button size="small" color="primary">
                  <Link to={`/posts/${blog.id}`}>
                    Read More
                  </Link>
                </Button>
                {/* <Button onClick={() => deletehandler(blog.id)}>
                  <DeleteIcon color="error"/>
                </Button> */}
              </CardActions>
              </Card>
            </Grid>
        ))
      }
    </Grid>
  );
}
