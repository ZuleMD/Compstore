const express = require('express');
const { models } = require("mongoose");
const router = express.Router();
const Comp = require('../models/compModel')

router.get("/getallcomps", async (req, res) => {

    try {
        const comps = await Comp.find({})
        res.send(comps)
    } catch (error) {
        return res.status(400).json({ message: error });

    }


});

router.post("/addcomp", async (req, res) => {

    const comp = req.body.comp

    try {
        const newcomp = new Comp({
            nom: comp.nom,
            disp: "En stock",
            code: comp.code,
            prix: comp.prix,
            categorie: comp.categorie,
            image: comp.image,
            description: comp.description,

        })
        await newcomp.save()
        res.send('Nouveau produit ajouté avec succès')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


router.post("/getcompbyid", async (req, res) => {

    const compid = req.body.compid

    try {
        const comp = await Comp.findOne({ _id: compid })
        res.send(comp)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


router.post("/editcomp", async (req, res) => {

    const editedcomp = req.body.editedcomp

    try {


        const comp = await Comp.findOne({ _id: editedcomp._id })
        comp.nom = editedcomp.nom,
            comp.code = editedcomp.code,
            comp.prix = editedcomp.prix,
            comp.disp = editedcomp.disp,
            comp.description = editedcomp.description,
            comp.image = editedcomp.image,
            comp.categorie = editedcomp.categorie,


            await comp.save()
        res.send("Produit est mis à jour avec succès")

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/deletecomp", async (req, res) => {
    const compid = req.body.compid

    try {
        await Comp.findOneAndDelete({ _id: compid })
        res.send('Produit supprimé avec succès')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports = router;
