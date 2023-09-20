const mypageService = require('../services/mypageService');
const { catchAsync } = require('../utils/error');

const deleteBookingTicket = catchAsync(async(req, res)  => {
    const userId = req.user.id;
    const { paymentCode, productOptionId } = req.body;
    
    const deleteticketlist = await mypageService.deleteBookingTicket(
        userId,
        paymentCode,
        productOptionId
    );

    res.status(201).json({ message: "Successful cancel ticket" });
});

module.exports = {
    deleteBookingTicket
};