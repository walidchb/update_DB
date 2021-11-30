const express = require("express");
const app = express();

// const server = require("http").Server(app);
// const { v4: uuidv4 } = require("uuid");
const student = require("./models/student_schema");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("HomePage", { homeId: req.params.HomePage });
});

app.get("/new-meeting", (req, res) => {
  res.render("NewMeet", { newMeetId: req.params.NewMeet });
});

//

app.get("/sign-in", (req, res) => {
  res.render("Sign-in", { signInId: req.params["Sign-in"] });
});

app.get("/sign-up", (req, res) => {
  student
    .find()
    .then((result) => {
      res.render("Sign-up", { arrData: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.get("/share_screen", (req, res) => {
//   res.render("Share", { Shareid: req.params["Share"] });
// });

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

app.post("/new-meeting", (req, res) => {
  const Student = new student(req.body);

  Student.save()
    .then((result) => {
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(req.body);
});

const PORT = process.env.PORT || 3030;
// mongoose
const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://walidchb:Maman123@cluster0.epbd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   )
//   .then(async (result) => {
//     app.listen(PORT, () => {
//       console.log(`Example app listning at http://localhost:${PORT}`);
//     });
//   })

//   .catch((err) => {
//     console.log(err);
//   });

const connectDB = require("./db/connect");
const { resolveInclude } = require("ejs");

const URL =
  "mongodb+srv://walidchb:Maman123@cluster0.epbd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 3030;
const startApp = async () => {
  try {
    await connectDB(URL);
    app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

startApp();

// io.on("connection", (socket) => {
//   socket.on("join-room", (roomId, userId, userName) => {
//     socket.join(roomId);
//     socket.to(roomId).broadcast.emit("user-connected", userId);
//     socket.on("message", (message) => {
//       io.to(roomId).emit("createMessage", message, userName);
//     });
//   });
// });

// const URL =
//   "mongodb+srv://zineddine_walid:mongodb1209@cluster0.o2k2b.mongodb.net/Meeeteor?retryWrites=true&w=majority";

// const startApp = async () => {
//   try {
//     await connectDB(URL);
//     app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// startApp();

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });
// const { ExpressPeerServer } = require("peer");
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
// });

// //MONGO DB

// require("dotenv").config(); //to read .env files

// app.use("/peerjs", peerServer);

// const express = require("express");
// const app = express();
// const server = require("http").Server(app);
// const { v4: uuidv4 } = require("uuid");
// app.set("view engine", "ejs");
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });
// const { ExpressPeerServer } = require("peer");
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
// });

// //MONGO DB
// const connectDB = require("./db/connect");
// require("dotenv").config(); //to read .env files

// app.use("/peerjs", peerServer);
// app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.render("HomePage", { homeId: req.params.HomePage });
// });

// app.get("/sign-in", (req, res) => {
//   res.render("Sign-in", { signInId: req.params["Sign-in"] });
// });

// app.get("/sign-up", (req, res) => {
//   res.render("Sign-up", { signUpId: req.params["Sign-up "] });
// });

// app.get("/new-meeting", (req, res) => {
//   res.render("NewMeet", { newMeetId: req.params.NewMeet });
// });

// // app.get("/share_screen", (req, res) => {
// //   res.render("Share", { Shareid: req.params["Share"] });
// // });

// app.get("/:room", (req, res) => {
//   res.render("room", { roomId: req.params.room });
// });

// io.on("connection", (socket) => {
//   socket.on("join-room", (roomId, userId, userName) => {
//     socket.join(roomId);
//     socket.to(roomId).broadcast.emit("user-connected", userId);
//     socket.on("message", (message) => {
//       io.to(roomId).emit("createMessage", message, userName);
//     });
//   });
// });

//app.get("/ajouter", (req, res) => {
//   res.render("ajouter_student", { ajouterId: req.params["ajouter_student"] });
// });

// app.get("/modifier", (req, res) => {
//   res.render("modifier_student", {
//     modifierId: req.params["modifier_student"],
//   });
// });

// app.get("/suprimer", (req, res) => {
//   res.render("suprimer_student", {
//     suprimerId: req.params["suprimer_student"],
//   });
// });
