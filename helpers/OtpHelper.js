const Otp = require("../modals/Otp");

const sendOtpToUser = async (email, otp, type = 'mail') => {
    const otp_model = new Otp();
    await otp_model.set_all_opts_as_expire(email);
    const otp_insert_status = await otp_model.insert_new_otp(email, otp, type);

    return otp_insert_status;
}

const validateOtp = async (email, otp) => {
    const otp_model = new Otp();
    latest_otp = await otp_model.get_latest_otp_by_email(email);
    if(latest_otp.otp == otp) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    sendOtpToUser: sendOtpToUser,
    validateOtp: validateOtp
}