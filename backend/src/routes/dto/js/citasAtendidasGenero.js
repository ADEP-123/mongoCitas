var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class citasAtendidasGeneroDTO {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "genero" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en el id del genero, tipo de dato esperado entero` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], citasAtendidasGeneroDTO.prototype, "usu_genero", void 0);