const methodOverride = require("method-override"),
      LocalStrategy  = require("passport-local"),
      Session        = require("express-session"),
      flash          = require("connect-flash"),
      bodyParser     = require("body-parser"),
      mongoose       = require("mongoose"),
      passport       = require("passport"),
      express        = require("express"),
      app            = express();

const User = require("./models/user");

const indexRoutes   = require("./routes/index"),
      contactRoutes = require("./routes/contact"),
      projectRoutes = require("./routes/project");

const port = process.env.PORT || 8080

mongoose.connect("mongodb+srv://dbadmin:N0v3mb3r@cluster0-aqceu.mongodb.net/test?retryWrites=true", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

app.use(Session({
  secret: "This is a super secret string",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});


app.use("/", indexRoutes);
app.use("/contact", contactRoutes);
app.use("/projects", projectRoutes);


app.listen(port, function (){
  console.log("---Server Started---");
  console.log("---localhost:" + port + "---");
});