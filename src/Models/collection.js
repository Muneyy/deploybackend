"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const groupSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    tags: [{
            type: String,
            enums: [
                "k-pop",
                "j-pop",
                "p-pop",
                "soloist",
                "boy-group",
                "girl-group",
            ],
        }],
    image_url: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });
groupSchema
    .virtual('url')
    .get(function () {
    return `/collections/${this._id}`;
});
const Group = mongoose_1.default.model('Group', groupSchema);
exports.default = Group;
