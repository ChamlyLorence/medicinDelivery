const router = require('express').Router();
let MedicinOrder = require('../models/medicinorder.model');
const cors = require('cors')
router.use(cors());

router.route('/').get((req, res) => {
  MedicinOrder.find()
    .then(medicinorders => res.json(medicinorders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userID = req.body.userID;
  const orderName = req.body.orderName;
  const address = req.body.address;
  const discription = req.body.discription;
  const paymentType = req.body.paymentType

  const newMedicinOrder = new MedicinOrder({
    userID,
    orderName,
    address,
    discription,
    paymentType,
  });
console.log(newMedicinOrder)
  MedicinOrder.create(newMedicinOrder)
  .then(() => res.json('Medicin Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  MedicinOrder.find({userID:req.params.id})
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
console.log(req.params.id)
  MedicinOrder.findByIdAndDelete(req.params.id)
    .then(() => res.json('Medicin Order deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  MedicinOrder.findById(req.params.id)
    .then(medicinorder => {
      medicinorder.username = req.body.username;
      medicinorder.address = req.body.address;
      medicinorder.discription = Number(req.body.discriptions);

      medicinorder.save()
        .then(() => res.json('Medicin Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
