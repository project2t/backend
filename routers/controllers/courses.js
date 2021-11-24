const courseslearing = require("./../../DB/models/courses");




const getallcourses = (req, res) => {
    courseslearing
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


const postcoueses = (req, res) => {
  const {name,img,text, cousave} = req.body;
  const newcourse = new courseslearing  ({
  name:req.body.name,
  img:req.body.img,
  text:req.body.text,
  cousave:req.body.cousave
  });
  newcourse
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};



const deletecourses = (req, res) => {
  const { id } = req.params;

  courseslearing
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { getallcourses ,postcoueses,deletecourses};