const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
//common
var userSignup = require("./routes/users/signup");
var userLogin = require("./routes/users/login");
var registerdata = require("./routes/users/registerdata");
//user
var profileRouter = require("./routes/OnlyUserRoutes/profile");
var familyRoute = require("./routes/Family/folder");
var familyInsideRoute = require("./routes/Family/folderInside");
// clinic
var EntryVaccineTakenRecord = require("./routes/Clinic/VaccineRecord");
var temp = require("./routes/temp");
var ClinicAppointmentRouter = require("./routes/Clinic/Appointment");
var ClinicAppointmentAcceptedRouter = require("./routes/Clinic/Accepted_Rejected_User");
var Clinic_vaccineRecord = require("./routes/Clinic/VaccineRecord");
//user

//Admin
var adminnewsRouter = require("./routes/Admin/News");
var adminalertRouter = require("./routes/Admin/Alert");

var config = require("config");
var cors = require("cors");
var path = require("path");
var logger = require("morgan");

//
const app = express();

const bodyParser = require("body-parser");
//
const authorizationtoken = require("./middleware/authtoken");

// app.use(logger('dev'));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger("dev"));

app.use(bodyParser.json());
app.use("/", userSignup);
app.use("/", userLogin);
app.use("/", registerdata);
app.use("/OnlyUserRoutes/profile", profileRouter);
app.use("/family", familyRoute);
app.use("/family/familyInside", familyInsideRoute);
//clinic
app.use(
  "/Clinic/UserVaccineTakenDataInset/entryTakenVaccine",
  EntryVaccineTakenRecord
);
app.use("/temp", temp);
app.use("/clinic/appointment", ClinicAppointmentRouter);
app.use(
  "/clinic/appointment/AcceptedRejected",
  ClinicAppointmentAcceptedRouter
);
app.use("/clinic/VaccineRecord", Clinic_vaccineRecord);

//admin
app.use("/admin/news", adminnewsRouter);
app.use("/admin/alert", adminalertRouter);

//
app.get("/", authorizationtoken, (req, res) => {
  // console.log(req.user);
  res.send(`this is home page", ${req.user}`);
});
// app.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.send("This is signUp page");
// })

mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(port, () => {
  `server is running in port ${port}`;
});
