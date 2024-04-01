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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var csv_parse_1 = require("csv-parse");
var test_1 = require("@playwright/test");
var node_test_1 = require("node:test");
var cameraDataPath = path_1.default.join(__dirname, 'ex_camera.csv');
function readCameraData() {
    return __awaiter(this, void 0, void 0, function () {
        var csvData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.default.promises.readFile(cameraDataPath, 'utf-8')];
                case 1:
                    csvData = _a.sent();
                    return [2 /*return*/, (0, csv_parse_1.parse)(csvData, { columns: true, skip_empty_lines: true })];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error reading camera data:', error_1);
                    throw error_1; // Re-throw to propagate to test runner
                case 3: return [2 /*return*/];
            }
        });
    });
}
(0, node_test_1.describe)('Camera Tests', function () { return __awaiter(void 0, void 0, void 0, function () {
    var cameraData, _loop_1, _a, cameraData_1, cameraData_1_1, e_1_1;
    var _b, e_1, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, readCameraData()];
            case 1:
                cameraData = _e.sent();
                _e.label = 2;
            case 2:
                _e.trys.push([2, 7, 8, 13]);
                _loop_1 = function () {
                    _d = cameraData_1_1.value;
                    _a = false;
                    var record = _d;
                    (0, test_1.test)("Test Case: ".concat(record.no), function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                        return __generator(this, function (_c) {
                            console.log("Testing camera ".concat(record.no));
                            // Add your specific test assertions or actions here based on record data
                            (0, test_1.expect)(record.field1).toBe('expected value'); // Example assertion
                            return [2 /*return*/];
                        });
                    }); });
                };
                _a = true, cameraData_1 = __asyncValues(cameraData);
                _e.label = 3;
            case 3: return [4 /*yield*/, cameraData_1.next()];
            case 4:
                if (!(cameraData_1_1 = _e.sent(), _b = cameraData_1_1.done, !_b)) return [3 /*break*/, 6];
                _loop_1();
                _e.label = 5;
            case 5:
                _a = true;
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 13];
            case 7:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 8:
                _e.trys.push([8, , 11, 12]);
                if (!(!_a && !_b && (_c = cameraData_1.return))) return [3 /*break*/, 10];
                return [4 /*yield*/, _c.call(cameraData_1)];
            case 9:
                _e.sent();
                _e.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 12: return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}); });
