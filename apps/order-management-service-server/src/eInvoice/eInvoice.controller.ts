import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EInvoiceService } from "./eInvoice.service";
import { EInvoiceControllerBase } from "./base/eInvoice.controller.base";

@swagger.ApiTags("eInvoices")
@common.Controller("eInvoices")
export class EInvoiceController extends EInvoiceControllerBase {
  constructor(
    protected readonly service: EInvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
