const { findAll, findOne, create, deleteId, update } = require("../model/annonceManager");

const getAll = async (req, res) => {
    try {
        const annonces = await findAll();
        res.json(annonces);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

const getOne = async (req, res) => {
    const annonceId = parseInt(req.params.id);
    console.log(annonceId);
    try {
        if (isNaN(annonceId)) {
            throw new Error("Invalid ID");
        }
        const [annonce] = await findOne(annonceId);
        res.json(annonce);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

const add = async (req, res) => {
    const annonces = req.body;
    try {
        const insertId = await create(annonces);
        res.status(200).json({ insertId });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const deleteAnnonce = async (req, res) => {
    const annonces = parseInt(req.params.id);
    try {
        const supprime = await deleteId(annonces);
        res.status(200).json({ supprime });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const updateAnnonce = async (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    try {
        const updatedAnnonce = await update(title, id);
        res.status(200).json(updatedAnnonce);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
module.exports = { getAll, getOne, add, deleteAnnonce, updateAnnonce };