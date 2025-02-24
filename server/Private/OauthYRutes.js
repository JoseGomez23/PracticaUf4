import { fileURLToPath } from "url";
import path from "path";
import * as fs from 'fs';
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirname1 = path.resolve(__dirname, '../public');

// Estratègia Google OAuth 2.0
export function Oauth()
{
    const credencials = JSON.parse(fs.readFileSync(path.join(__dirname, "credencials.json")));

    const app = express();
    
    // Configurar sesió
    app.use(session({ secret: "secreto", resave: false, saveUninitialized: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(passport.initialize());
    app.use(passport.session());



    passport.use(
        new GoogleStrategy(
          {
            clientID: credencials.clientId,
            clientSecret: credencials.clientSecret,
            callbackURL: "http://localhost:8000/auth/google/callback",
          },
          (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
          }
        )
      );
      
      // Serialització i deserializació
      passport.serializeUser((user, done) => done(null, user));
      passport.deserializeUser((obj, done) => done(null, obj));
      
      // Pàgina principal
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname1, "index.html"));
      });
      
      // Rutes d'autenticació
      app.post("/login", passport.authenticate("local", { successRedirect: "/profile", failureRedirect: "/login" }));
      
      app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
      
      app.get(
        "/auth/google/callback",
        passport.authenticate("google", { failureRedirect: "/" }),
        (req, res) => res.redirect("/profile")
      );
      
      // Ruta protegida
      app.get("/profile", (req, res) => {
        if (!req.isAuthenticated()) return res.redirect("/");
      
          let dadesUser = JSON.stringify({ email: req.user._json.email });
          if(dadesUser.match(/{"email":"[^"]+@sapalomera\.cat"}/)){
      
              res.cookie('email', dadesUser, { maxAge: 900000 });
              res.redirect("http://localhost:8080/Joc");
          } else {
              res.send(`No tens permís per accedir a aquesta pàgina`);
          }
      });
      
      // Tancar sesió
      app.get("/logout", (req, res) => {
        req.logout(() => res.redirect("/"));
      });
      
      // Iniciar servidor
      app.listen(8000, () => console.log("Servidor en http://localhost:8000"));
}
