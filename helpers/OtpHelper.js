const Otp = require("../modals/Otp");

const sendOtpToUser = async (email, otp, type = 'mail') => {
    const otp_model = new Otp();
    const otp_insert_status = await otp_model.insert_new_otp(email, otp, type);

    return otp_insert_status;
}

module.exports = {
    sendOtpToUser: sendOtpToUser
}