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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShopinvaderProvider = void 0;
var domain_functions_1 = require("domain-functions");
var zod_1 = require("zod");
var utils_1 = require("./utils");
// the implementation of the types of general purpose ecommerce-provider
function createShopinvaderProvider(_a) {
    var _this = this;
    var erp_url_base_url = _a.erp_url_base_url, website_unique_id = _a.website_unique_id, api_key = _a.api_key;
    var fetchOptions = function (_a) {
        var website_unique_id = _a.website_unique_id, api_key = _a.api_key, email = _a.email;
        return {
            method: 'GET',
            headers: {
                'API-KEY': api_key,
                'WEBSITE-UNIQUE-KEY': website_unique_id,
                'PARTNER-EMAIL': email,
            },
        };
    };
    return {
        getCart: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/cart' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
        getAddresses: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/addresses' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
        getCustomer: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/customer' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
        getPickings: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/stock_move' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
        getSales: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/sales' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
        getInvoices: function (email, schema) { return __awaiter(_this, void 0, void 0, function () {
            var url, fetch_options, parse_cart_data, parse_empty_cart, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = erp_url_base_url + '/invoices' + '/';
                        fetch_options = fetchOptions({
                            website_unique_id: website_unique_id,
                            api_key: api_key,
                            email: email,
                        });
                        parse_cart_data = (0, domain_functions_1.makeDomainFunction)(schema)(function (data) {
                            return data;
                        });
                        parse_empty_cart = (0, domain_functions_1.makeDomainFunction)(zod_1.z.object({}))(function (data) {
                            return data;
                        });
                        return [4 /*yield*/, (0, utils_1.fetch_endpoint)(email, url, fetch_options)];
                    case 1:
                        result = _a.sent();
                        if (!result.success) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, result.data.json()];
                    case 2:
                        data = _a.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.data)) {
                            return [2 /*return*/, parse_empty_cart(data)];
                        }
                        // console.log('data ---> ', data)
                        return [2 /*return*/, parse_cart_data(data)];
                }
            });
        }); },
    };
}
exports.createShopinvaderProvider = createShopinvaderProvider;
