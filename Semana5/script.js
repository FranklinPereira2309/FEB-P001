// @ts-ignore
///<reference lib="es2015" />
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
function pegarDadosApi() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia?qtd=1")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.log("Erro na chamada da Api: ", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function pegarDadosTempo() {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, lat, lon, response, data, erro_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = 'dcb9330c595ad9c592bbc318dedc757b';
                    lat = -14.796580070830135;
                    lon = -39.17338240445384;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&units=metric&appid=").concat(apiKey))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 4:
                    erro_1 = _a.sent();
                    console.log("Erro na chamdada da Api: ", erro_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function exibirNoticias() {
    return __awaiter(this, void 0, void 0, function () {
        var data, containerLists, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pegarDadosApi()];
                case 1:
                    data = _a.sent();
                    containerLists = document.querySelector('.noticias');
                    for (i = 0; i < 1; i++) {
                        if (containerLists) {
                            containerLists.innerHTML += "<li>\n        <h6>".concat(data.items[i].titulo, "</h6>\n        <p>").concat(data.items[i].introducao, "</p>\n      </li>");
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function mostrarOtempo() {
    return __awaiter(this, void 0, void 0, function () {
        var temperatura, humidade, maxTemperatura, minTemperatura, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temperatura = document.querySelector('.temperatura');
                    humidade = document.querySelector('.humidade');
                    maxTemperatura = document.querySelector('.maxTemp');
                    minTemperatura = document.querySelector('.minTemp');
                    return [4 /*yield*/, pegarDadosTempo()];
                case 1:
                    data = _a.sent();
                    temperatura.innerText = parseInt(data.main.temp).toString();
                    humidade.innerText = data.main.humidity.toString();
                    maxTemperatura.innerText = parseInt(data.main.temp_max).toString();
                    minTemperatura.innerText = parseInt(data.main.temp_min).toString();
                    return [2 /*return*/];
            }
        });
    });
}
exibirNoticias();
mostrarOtempo();
