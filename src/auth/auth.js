const jwt = require(`jsonwebtoken`);
const secret = `hola123`;
const User = require(`../model/user`)
let log = []
/*  JWT token creation */
    jwToken = (userToken, res) => {
        jwt.sign( {userToken}, secret,{expiresIn: `24h`}, (err, token) => { 
            res.json( token ) 
    }   )   };
    exports.signup = (req, res) => {
        const userToken = new User(req.body);
        User.create( userToken, (err, user) => { 
            ( err ) ? res.send(err) : jwToken(userToken, res)
    }   )   }
    exports.login = (req, res) =>{
        User.login( req.body.user, req.body.pass, (err, userToken) => {
            userToken[0] ? jwToken(userToken, res) : res.status(404).send(  {
                error: 404,
                message: `Usuario y/o contraseña incorrectos.`
            }   )
    }   )   }  
/*  JWT validation access */
    auth = (req, log) => {
        const bearer = req.headers[`authorization`]
        if(typeof bearer !== `undefined`) {
            const token   = bearer.split(` `)[1]; 
            const decoded = jwt.verify(token, secret);
            req.token     = token;
            req.decoded   = decoded;
                log.id_role = decoded.userToken[0].id_role || false;
                log.id    = decoded.userToken[0].id_user;
        } else {
            res.json(   {
                error: 403, 
                message: `Acceso no autorizado. Debes iniciar sesión.`
        }   ) 
    }   }
    exports.authAccess = (req, res, next) => {
        auth(req, log)
        log.id ? next() : res.json( {
            error: 404,
            message: `Acceso restringido, Autorizacion no valida.`
    }   )   }
    exports.authToken = (req, res, next) => {
        auth(req, log)
        log.admin == true || log.id == req.params.id ? next() : res.json(   {
            error:403,
            message: `Acceso restringido, sólo administradores y propietarios.`
    }   )   }
    exports.adminAuth = (req, res, next) => {
        auth(req, log)
        log.admin == true ? next() : res.json(  {
            error:403,
            message: `Acceso restringido. Sólo pueden ingresar administradores.`
    }   )   }