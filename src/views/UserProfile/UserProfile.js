import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import Store from "@material-ui/icons/Store";
import RadioButtons from "components/Radio/RadioButtons.js";

// import CardFooter from "components/Card/CardFooter.js";

// import avatar from "assets/img/faces/marc.jpg";

// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//   },
// };

// const useStyles = makeStyles(styles);

export default function UserProfile() {
  // const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader> */}
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    HirerName
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    name="user-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    NickName
                  </InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    MotherName
                  </InputLabel>
                  <CustomInput
                    // labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Religion
                  </InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Caste
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Date of Birth
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Mobile No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Alternative No
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Telephone Number
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Email Id
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>

              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#02063a" }}>About me</InputLabel>
                  <CustomInput
                    // labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer> */}
            </CardBody>
            {/* <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Permanent Address
      </InputLabel>
      {/* Grid Container 2 */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    HirerName
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    NickName
                  </InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    MotherName
                  </InputLabel>
                  <CustomInput
                    // labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Religion
                  </InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Caste
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Date of Birth
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Mobile No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Present Address
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    HirerName
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    NickName
                  </InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    MotherName
                  </InputLabel>
                  <CustomInput
                    // labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Religion
                  </InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Caste
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Date of Birth
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Mobile No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Permanent Address
      </InputLabel>

      {/* Grid Container 4 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    HirerName
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    NickName
                  </InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    MotherName
                  </InputLabel>
                  <CustomInput
                    // labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Religion
                  </InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Caste
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Date of Birth
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Mobile No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Alternative No
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Telephone Number
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Email Id
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Email Id
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Education Detail
      </InputLabel>

      {/* Grid Container 5 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Degree
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    School/College
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Place
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Pincode
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Pan Card
      </InputLabel>

      {/* Grid Container 6 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Mobile No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Alternative No
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Telephone Number
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Email Id
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <Button color="#02063a">Add Photo</Button>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Aadhar Card
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Aadhar No
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Name
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Fathers Name
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Date of Birth
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <Button color="#02063a">Add Photo</Button>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        House
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <RadioButtons />
                  {/* <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    MotherName
                  </InputLabel>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  /> */}
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Button label="Rental House" color="white" />
                  {/* <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Religion
                  </InputLabel>
                  <CustomInput
                    // labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  /> */}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Telephone Number
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Email Id
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Bank
      </InputLabel>

      {/* Grid Container 5 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Bank Name
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Account No
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    IFSC Code
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <Button color="#02063a">6 Month</Button>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Reference 1
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Name
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Taluka Office
                  </InputLabel>
                  <CustomInput
                    // labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="Username" style={{ color: "#02063a" }}>
                    Station
                  </InputLabel>
                  <CustomInput
                    // labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Fathers Name
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Work
                  </InputLabel>
                  <CustomInput
                    // labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Reference 2
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Name
                  </InputLabel>
                  <CustomInput
                    // labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // inputProps={{
                    //   disabled: true,
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Taluka Office
                  </InputLabel>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Station
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    FatherName
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <InputLabel htmlFor="username" style={{ color: "#02063a" }}>
                    Station
                  </InputLabel>
                  <CustomInput
                    // labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <InputLabel
        style={{
          color: "#fff",
          backgroundColor: "#02063a",
          fontSize: "17px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        Signature
      </InputLabel>

      {/* Grid Container 3 */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <CardBody color="success" stats Add icon>
                  <CardIcon color="success">
                    <Store />
                  </CardIcon>
                </CardBody>
                <input type="file" />
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
