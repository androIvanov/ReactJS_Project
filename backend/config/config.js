module.exports = {
    development: {
        port: 3000,
        databaseUrl: `mongodb+srv://exam:loler123@cluster0-bpei6.mongodb.net/exam?retryWrites=true&w=majority`
    },
    production: {}
}
// Make the URL use process.env