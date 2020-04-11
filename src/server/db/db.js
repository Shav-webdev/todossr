const mongoose = require("mongoose");
const config = require("../utils/config");

const { dbURI } = config;

const uri = dbURI;

module.exports.db = (server) => {
    mongoose
        .connect(
            uri,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
            },
            () => server
        )
        .then(() => console.log("Mongo db started ..."))
        .catch((e) => console.log(e));
};
