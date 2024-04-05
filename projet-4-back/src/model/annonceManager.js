const db = require("./db")


const findAll = async () => {
    try {
        const [annonces] = await db.query("select * from annonces");
        return annonces;
    } catch(error) {
        console.error(error);
    }
};

const findOne = async (id) => {
    try {
        const [annonce] = await db.query("select * from annonces where id = ?", [id]);
        return annonce;
    } catch(error) {
        console.error(error);
    }
};

const create = async (annonces) => {
    try {
        const [result] = await db.query(
            `INSERT INTO annonces(owner_id, title, date, location, limit_member, user_level, duration, member_id, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                annonces.owner_id,
                annonces.title,
                annonces.date,
                annonces.location,
                annonces.limit_member,
                annonces.user_level,
                annonces.duration,
                annonces.member_id,
                annonces.description,
            ]
        );
        return result;
    } catch(error) {
        console.error(error);
    }
};

const deleteId = async (id) => {
    try {
        const [result] = await db.query(
            `DELETE FROM annonces WHERE id = ?`,
      [id]
        );
        return result;
    } catch(error) {
        console.error(error);
    }
};

const update = async (title, id) => {
    try {
        const [result] = await db.query(
            `UPDATE annonces SET title = ? WHERE id = ?`,
            [title, id]
        );
        return result;
    } catch(error) {
        console.error(error);
    }
};




module.exports = { findAll, findOne, create, deleteId, update };