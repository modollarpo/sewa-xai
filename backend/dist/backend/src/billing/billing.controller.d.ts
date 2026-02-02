import { BillingService } from './billing.service';
interface InvoiceDto {
    id: string;
    organizationId: string;
    amount: number;
    status: 'pending' | 'paid' | 'overdue';
    issuedAt: string;
}
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    getInvoices(): never[];
    createInvoice(invoice: InvoiceDto): InvoiceDto;
}
export {};
