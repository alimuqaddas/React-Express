var express = require("express")
var router = express.Router()
var ZoneController = require('../controllers/ZoneController')

var controllers = require('../controllers');

router.get('/',function(req,res,next){
    res.json({
        confirmation:'Fail',
        message:'PLease Determine the method to call controllers'
    })
    return
})

router.get('/:resource', function(req,res,next){

    var resource = req.params.resource
    var controller = controllers[resource]

    if(controller == null)
    {
        res.json({
            confirmaion:'fail',
            message:'This is not the Controller'
        })
        return
    }
    
    controller.find(req.query, function(err,results){
        if (err)
        {
            res.json({
                confirmaion:'fail',
                message: err
            })
            return
        }
        res.json({
            confirmaion:'success',
            results:results
        })
    })    
})

router.get('/:resource/:id', function(req,res,next){
    var resource = req.params.resource;
    var controller = controllers[resource];
    if(controller == null)
    {
        res.json({
            confirmaion:'fail',
            message:'This is not the Controller'
        })
        return
    }

    var id = req.params.id;
    controller.findById(id,function (err,result){
        if(err)
        {
            res.json({
                confirmaion:'fail',
                message:'Not Found'
            })
            return
        }
        res.json({
            confirmaion:'success',
            result:result
        })
    })
    
})
router.get('/:resource/delete/:id', function(req,res,next){
    var resource = req.params.resource;
    var controller = controllers[resource];
    if(controller == null)
    {
        res.json({
            confirmaion:'fail',
            message:'This is not the Controller'
        })
        return
    }

    var id = req.params.id;
    var method = req.params.method;
    controller.delete(id,function (err,result){
        if(err)
        {
            res.json({
                confirmaion:'fail',
                message:'Not Found'
            })
            return
        }
        res.json({
            confirmaion:'success',
            result:result
        })
    })
    
})

router.post('/:resource',function(req,res,next){

    var resource = req.params.resource
    var controller = controllers[resource]
    if(controller == null)
    {
        res.json({
            confirmaion:'fail',
            message:'This is not the Controller'
        })
        return
    }
    controller.create(req.body,function(err,result){
        if(err){
            res.json({
                confirmation:'fail',
                message:err
            })
            return
        }
        res.json({
            confirmaion:'Success',
            result:result
        })
    })
    
})

router.post('/:resource/update',function(req,res,next){
    
    var resource = req.params.resource
    var controller = controllers[resource]
    if(controller == null)
    {
        res.json({
            confirmaion:'fail',
            message:'This is not the Controller'
        })
        return
    }
    controller.update(req.id,req.body,function(err,result){
        if(err){
            res.json({
                confirmation:'fail',
                message:err
            })
            return
        }
        res.json({
            confirmaion:'Success',
            result:result
        })
    })
    
})

module.exports = router