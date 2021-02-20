const Prog = require('../models/prog');

exports.newProg = (req, res) => {
  console.log("[NEW PROGRAMMATION]");
  const body = req.body;
  const prog = new Prog({
    monday: body.monday,
    tuesday: body.tuesday,
    wednesday: body.wednesday,
    thursday: body.thursday,
    friday: body.friday,
    saturday: body.saturday,
    sunday: body.sunday,
  });

  prog.save()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.weekProg = (req, res) => {
  const query = Prog.where({ __v: 0 });
  query.findOne()
  .then(data => res.status(200).send({
    monday: data.monday,
    tuesday: data.tuesday,
    wednesday: data.wednesday,
    thursday: data.thursday,
    friday: data.friday,
    saturday: data.saturday,
    sunday: data.sunday
  }))
  .catch(err => res.status(500).send(err));
}

exports.deleteProg = (req, res) => {
  Prog.deleteMany({})
  .then(() => res.status(200).send({ message: "Data deleted"}))
  .catch(err => console.log(err));
}