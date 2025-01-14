"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BoardService_1 = __importDefault(require("../service/BoardService"));
const boardRouter = express_1.default.Router();
// GET /api/boards
boardRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*const boardList: BoardData[] = await BoardServices.getBoardStatus();*/
        return res.status(200).json({
            status: 200,
            data: "hello",
        });
    }
    catch (error) {
        console.error("Error fetching board list:", error);
        return res.status(500).json({
            message: "조회 실패",
            status: 500,
        });
    }
}));
// GET /api/boards/specific?id=3
boardRouter.get("/specific", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({
            message: "ID가 필요합니다.",
            status: 400,
        });
    }
    try {
        const boardList = yield BoardService_1.default.getSpecificStatus(Number(id)); // 인스턴스화 없이 사용
        return res.status(200).json({
            status: 200,
            data: boardList,
        });
    }
    catch (error) {
        console.error("Error fetching specific board info:", error);
        return res.status(500).json({
            message: "게시판 상세내용 확인 실패",
            status: 500,
        });
    }
}));
exports.default = boardRouter;
