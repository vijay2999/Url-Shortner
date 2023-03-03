const express=require("express")
const Controller=require('../controllers/urlController')
const router=express.Router()

//..................................PostApi...............................................//

router.post('/url/shorten',Controller.createUrl)

//..................................GetApi...............................................//

router.get('/:urlCode',Controller.getUrl)

//.............................Hit On Wrong Url.........................................//
router.all("/*", function(req, res){
    return res.status(404).send({status:false, message : "Provided route url is wrong"})
})



module.exports=router