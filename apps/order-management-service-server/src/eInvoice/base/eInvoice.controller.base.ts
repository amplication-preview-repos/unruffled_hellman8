/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { EInvoiceService } from "../eInvoice.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EInvoiceCreateInput } from "./EInvoiceCreateInput";
import { EInvoice } from "./EInvoice";
import { EInvoiceFindManyArgs } from "./EInvoiceFindManyArgs";
import { EInvoiceWhereUniqueInput } from "./EInvoiceWhereUniqueInput";
import { EInvoiceUpdateInput } from "./EInvoiceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EInvoiceControllerBase {
  constructor(
    protected readonly service: EInvoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EInvoice })
  @nestAccessControl.UseRoles({
    resource: "EInvoice",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEInvoice(
    @common.Body() data: EInvoiceCreateInput
  ): Promise<EInvoice> {
    return await this.service.createEInvoice({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        file: true,
        id: true,
        invoiceNumber: true,
        issueDate: true,

        order: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EInvoice] })
  @ApiNestedQuery(EInvoiceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EInvoice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eInvoices(@common.Req() request: Request): Promise<EInvoice[]> {
    const args = plainToClass(EInvoiceFindManyArgs, request.query);
    return this.service.eInvoices({
      ...args,
      select: {
        createdAt: true,
        file: true,
        id: true,
        invoiceNumber: true,
        issueDate: true,

        order: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EInvoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EInvoice",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async eInvoice(
    @common.Param() params: EInvoiceWhereUniqueInput
  ): Promise<EInvoice | null> {
    const result = await this.service.eInvoice({
      where: params,
      select: {
        createdAt: true,
        file: true,
        id: true,
        invoiceNumber: true,
        issueDate: true,

        order: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EInvoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EInvoice",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEInvoice(
    @common.Param() params: EInvoiceWhereUniqueInput,
    @common.Body() data: EInvoiceUpdateInput
  ): Promise<EInvoice | null> {
    try {
      return await this.service.updateEInvoice({
        where: params,
        data: {
          ...data,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          file: true,
          id: true,
          invoiceNumber: true,
          issueDate: true,

          order: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EInvoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EInvoice",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEInvoice(
    @common.Param() params: EInvoiceWhereUniqueInput
  ): Promise<EInvoice | null> {
    try {
      return await this.service.deleteEInvoice({
        where: params,
        select: {
          createdAt: true,
          file: true,
          id: true,
          invoiceNumber: true,
          issueDate: true,

          order: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/file")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: EInvoice,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadFile(
    @common.Param()
    params: EInvoiceWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<EInvoice> {
    return this.service.uploadFile(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/file")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadFile(
    @common.Param()
    params: EInvoiceWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadFile({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/file")
  @swagger.ApiOkResponse({
    type: EInvoice,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteFile(
    @common.Param()
    params: EInvoiceWhereUniqueInput
  ): Promise<EInvoice> {
    return this.service.deleteFile({
      where: params,
    });
  }
}