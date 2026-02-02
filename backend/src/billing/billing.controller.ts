import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillingService } from './billing.service';

interface InvoiceDto {
  id: string;
  organizationId: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  issuedAt: string;
}

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('invoices')
  getInvoices() {
    // Placeholder: return empty array
    return [];
  }

  @Post('invoice')
  createInvoice(@Body() invoice: InvoiceDto) {
    // Placeholder: echo back
    return invoice;
  }
}
