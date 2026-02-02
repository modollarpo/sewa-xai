import { UserService } from './user.service';
import { AuditService } from '../audit/audit.service';
export declare class AdminController {
    private readonly userService;
    private readonly auditService;
    constructor(userService: UserService, auditService: AuditService);
    getPricingPlans(): Promise<{
        name: string;
        price: number;
        currency: string;
        scansIncluded: number;
        extraScanPrice: number;
        implementationFee: number;
        description: string;
    }[]>;
    listSubscriptions(): Promise<{
        id: string;
        hospital: string;
        plan: string;
        active: boolean;
        usage: number;
    }[]>;
    getUsage(): Promise<{
        hospital: string;
        scans: number;
        month: string;
    }[]>;
    getInvoices(): Promise<{
        id: string;
        hospital: string;
        amount: number;
        currency: string;
        date: string;
        status: string;
    }[]>;
    forcePasswordReset(id: string): Promise<{
        message: string;
    }>;
    listUsers(): Promise<import("./user.entity").User[]>;
    updateUserRole(id: string, body: {
        role: string;
    }): Promise<{
        message: string;
    }>;
    deactivateUser(id: string): Promise<{
        message: string;
    }>;
    reactivateUser(id: string): Promise<{
        message: string;
    }>;
    private hospitals;
    listHospitals(): Promise<{
        id: string;
        name: string;
        departments: string[];
    }[]>;
    createHospital(body: {
        name: string;
        departments?: string[];
    }): Promise<{
        id: string;
        name: string;
        departments: string[];
    }>;
    updateHospital(id: string, body: {
        name?: string;
        departments?: string[];
    }): Promise<{
        id: string;
        name: string;
        departments: string[];
    }>;
    deleteHospital(id: string): Promise<{
        message: string;
    }>;
}
