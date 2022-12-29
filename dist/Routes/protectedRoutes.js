"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const collection_controller = require('../Controllers/collectionController');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const user_controller = require('../Controllers/userController');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const friend_controller = require('../Controllers/friendController');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const item_controller = require('../Controllers/itemController');
router.post('/collections/post', collection_controller.post_collection);
router.post('/items/post', item_controller.post_item);
router.post('/friends/sendFriendRequest', friend_controller.send_friend_request);
router.post('/friends/acceptFriendRequest', friend_controller.accept_friend_request);
router.post('/friends/rejectFriendRequest', friend_controller.reject_friend_request);
module.exports = router;
