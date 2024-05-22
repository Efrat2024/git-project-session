const allowedOrigins = [
    'http://localhost:4444',
    'http://localhost:3000',
<<<<<<< HEAD
    'http://localhost:3001',
=======
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
]

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 