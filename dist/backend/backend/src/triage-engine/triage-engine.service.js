"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriageEngineService = void 0;
const common_1 = require("@nestjs/common");
let TriageEngineService = class TriageEngineService {
    constructor() {
        this.worklist = [];
    }
    getWorklist() {
        return this.worklist.slice().sort((a, b) => {
            const priorityOrder = { critical: 0, urgent: 1, routine: 2 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            if (b.aiScore !== a.aiScore)
                return b.aiScore - a.aiScore;
            return a.uncertainty - b.uncertainty;
        });
    }
    addToWorklist(item) {
        this.worklist.push(item);
        return item;
    }
    updateStatus(scanId, status) {
        const item = this.worklist.find(i => i.scanId === scanId);
        if (item)
            item.status = status;
        return item;
    }
};
TriageEngineService = __decorate([
    (0, common_1.Injectable)()
], TriageEngineService);
exports.TriageEngineService = TriageEngineService;
//# sourceMappingURL=triage-engine.service.js.map