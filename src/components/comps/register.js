import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import logo from "../../statics/logo.png";
import IconButton from "@material-ui/core/IconButton/IconButton";


function Submitform(event) {
      alert('hello');
  }
export default function Register(props) {
   const useStyles = makeStyles(styles);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={Submitform}>
                  <CardHeader color="info" className={classes.cardHeader} style={{
                    backgroundImage:`url(`+require("../../images/s2.jpg")+`)`, backgroundSize:'cover'}}>
                    <h3 style={{color:"white"}} >Register</h3>
                     <img src={logo} width={60} height={60}/>
                    <div className={classes.socialLine}>

                    </div>
                  </CardHeader>
                  <p  className={classes.divider} >Register </p>
                  <CardBody>

                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                          required:'true',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password1"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                               <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                     <CustomInput
                      labelText="Confirm Password"
                      id="password2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                               <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" color="success" size="lg">
                      Register
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>
  );
}
