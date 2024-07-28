import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EInvoiceResolverBase } from "./base/eInvoice.resolver.base";
import { EInvoice } from "./base/EInvoice";
import { EInvoiceService } from "./eInvoice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EInvoice)
export class EInvoiceResolver extends EInvoiceResolverBase {
  constructor(
    protected readonly service: EInvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
