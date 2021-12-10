/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Dashboard
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Add Finance
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={classes.block}>
                De Debube
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Report & Chart
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span style={{ color: "#fff" }}>
            {/* &copy; {1900 + new Date().getYear()}{" "} */} Powered by{" "}
            <a
              href="https://www.digisailor.com/"
              target="_blank"
              className={classes.a}
            >
              {" "}
              Digisailor{" "}
            </a>
            . All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}