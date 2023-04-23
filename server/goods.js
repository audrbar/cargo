const { query } = require('./mysql');

const createGood = ({ title, weight, flammable, perishable }) => {
    const sql = `
        INSERT INTO goods ( title, weight, flammable, perishable )
        VALUES (?, ?, ?, ?)
    `;
    return query(sql, [title, weight, flammable, perishable]);
}
const getGoods = () => query(`SELECT * FROM goods`);
const getGoodById = (id) => query(`SELECT * FROM goods WHERE id = ?`, [id]);
const deleteGood = (id) => query(`DELETE FROM goods WHERE id = ?`, [id]);

module.exports = { createGood, getGoods, getGoodById, deleteGood };