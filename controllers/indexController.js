
const indexController = {
    index: (req, res) => {
        
        res.render('index')
    },
    loguin: (req,res) => {
        res.render('home')
    }
}
module.exports = indexController

