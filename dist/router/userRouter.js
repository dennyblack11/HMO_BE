"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
// import { upload } from "../utils/multer";
const multer_1 = __importDefault(require("multer"));
const validator_1 = __importDefault(require("../utils/validator"));
const userValidator_1 = require("../utils/userValidator");
const upload = (0, multer_1.default)().single("avatar");
const router = (0, express_1.Router)();
router.route("/register-user").post((0, validator_1.default)(userValidator_1.registerValidator), userController_1.createUser);
router.route("/verify-user/:userID").get(userController_1.verifiedUser);
router.route("/sign-in-user").post(userController_1.signUser);
router.route("/reading-user-cookie").get(userController_1.readUserCookie);
router.route("/logout").delete(userController_1.logOutUser);
router.route("/read-user/:userID").get(userController_1.readUserDetails);
router.route("/choose-hospital/:userID").patch(userController_1.familyHospiatl);
router.route("/update-user-name/:userID").patch(userController_1.updateUserNames);
router.route("/update-user-location/:userID").patch(userController_1.updateUserLocation);
router.route("/update-user-phone/:userID").patch(userController_1.updateUserPhoneNumber);
router.route("/update-avatar/:userID").patch(upload, userController_1.updateUserAvatar);
router.route("/reset-token/").patch(userController_1.requestTokenReset);
exports.default = router;
