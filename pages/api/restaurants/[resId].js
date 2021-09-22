import Restaurant from '../../../models/restaurant';

export default function handler(req, res) {
    const {resId} = req.query;

    Restaurant.findById({_id: resId}, function(err, doc){
        if(err){
            res.status(404).json({err: err});
        }

        res.status(202).send(doc);
    })
}