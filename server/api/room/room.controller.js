const Room = require('./room.model');

exports.index = (req, res) => {
  Room.find((err, rooms) => {
    if (err) { return handleError(res, err); }
    return res.json(rooms);
  });
};

exports.show = (req, res) => {
  Room.findOne({ roomId: req.params.id }, (err, room) => {
    if (err) { return handleError(res, err); }
    if (!room) { return res.status(404).send('Not Found'); }
    return res.json(room);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
