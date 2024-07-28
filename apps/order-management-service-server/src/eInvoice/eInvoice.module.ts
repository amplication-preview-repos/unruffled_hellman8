import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EInvoiceModuleBase } from "./base/eInvoice.module.base";
import { EInvoiceService } from "./eInvoice.service";
import { EInvoiceController } from "./eInvoice.controller";
import { EInvoiceResolver } from "./eInvoice.resolver";

@Module({
  imports: [EInvoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [EInvoiceController],
  providers: [EInvoiceService, EInvoiceResolver],
  exports: [EInvoiceService],
})
export class EInvoiceModule {}
