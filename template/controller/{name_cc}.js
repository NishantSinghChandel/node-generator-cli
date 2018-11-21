/* @summary: {{name_cc}} Controller */

const model{{name_pc}} = require('../models/{{name_cc}}');

// Create {{name_cc}}
let requestCreate{{name_pc}} = async function (req, res) {
	try {
		let {{name_cc}}Obj = await model{{name_pc}}.create{{name_pc}}();
		return res.json({result: {{name_cc}}Obj});
	} catch (err) {
		res.send(err);
	}
};

// Get {{name_cc}}List
let requestGet{{name_pc}}List = async function (req, res) {
	try {
		let {{name_cc}}List = await model{{name_pc}}.get{{name_pc}}List();
		return res.json({result: {{name_cc}}List});
	} catch (err) {
		res.send(err);
	}
};


// Get {{name_cc}} by id
let requestGet{{name_pc}}ById = async function (req, res) {
	try {
		let {{name_cc}}Obj = await model{{name_pc}}.get{{name_pc}}ById(req.params.id);
		return res.json({result: {{name_cc}}Obj});
	} catch (err) {
		res.send(err);
	}
};


// Update {{name_cc}} by id
let requestUpdate{{name_pc}}ById = async function (req, res) {
	try {
		let {{name_cc}}Obj = await model{{name_pc}}.update{{name_pc}}ById();
		return res.json({result: {{name_cc}}Obj});
	} catch (err) {
		res.send(err);
	}
};


// Delete {{name_cc}} by id
let requestDelete{{name_pc}}ById = async function (req, res) {
	try {
		let {{name_cc}}Obj = await model{{name_pc}}.delete{{name_pc}}ById(req.params.id);
		return res.json({result: {{name_cc}}Obj});
	} catch (err) {
		res.send(err);
	}
};

module.exports = {
  requestCreate{{name_pc}},
  requestGet{{name_pc}}List,
  requestGet{{name_pc}}ById,
  requestUpdate{{name_pc}}ById,
  requestDelete{{name_pc}}ById
};