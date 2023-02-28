const express = require("express");

const router = express.Router();
const Details = require("./Module/contacts");

router.post("/v1/contacts", async (req, res) => {
    try{
        let user = await Details.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            Phone: req.body.Phone
          });
          res.status(200).json({
            user
        });
    }
    catch(e){
        res.status(500).json({
            status: `Missing Required Field ${e}`,
            message: e.message
        })
        }
    })

router.get("/v1/contacts", async (req, res) => {
      try{
        let user = await Details.find(req.body.id);
        res.status(200).send({
            user
        })
      }
      catch(e){
        console.log(e);
      }
      });
    
    
      router.get("/v1/contacts/:id", async (req, res) => {
        try {
            // Code to update the document
            console.log(req.body)
            const user = await Details.findOne({_id: req.params.id}, req.body);
    
            res.status(200).json({
                status: "Sucess",
                user
            })
    
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: e.message
            })
        }
    });
    

      router.put("/v1/contacts/:id", async (req, res) => {
        try {
            // Code to update the document
            console.log(req.body)
            const user = await Details.updateOne({_id: req.params.id}, req.body);
    
            res.status(200).json({
                status: "Sucess",
                user
            })
    
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: e.message
            })
        }
    });
    
    router.delete("/v1/contacts/:id", async (req, res) => {
        try {
            // Code to update the document
            const user = await Details.deleteOne({_id : req.params.id});
    
            res.status(200).json({
                status: "Sucess",
                user
            })
    
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: e.message
            })
        }
    });

    router.patch("/v1/contacts/:id", async (req, res) => {
        try {
            // Code to update the document
            console.log(req.body)
            const user = await Details.findOne({_id: req.params.id}, req.body);
            if(!user){
                res.status(200).json({
                    status: "No User found",
                    user
                })
            }
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: e.message
            })
        }
    });
    
    

  module.exports = router;