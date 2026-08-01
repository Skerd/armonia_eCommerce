# eCommerce Module

Shared types, schema definitions, and Zod validators for the Arpeggio eCommerce domain. This module is the contract between **maestro** (persistence and API routes) and **sinfonia** (admin panel and storefront UI).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Core is always included; add `eCommerce` to opt in.

## Scope

Full-featured commerce: catalog, inventory, pricing, orders, fulfillment, payments, returns, and supporting CMS/analytics entities.

## Directory layout

```
eCommerce/
├── api/eCommerce/private/<resource>/   # Per-resource DTOs, schema-defs, validators
└── helpers/static/
    ├── exceptions/   # Module-specific API error locales
    └── zod/          # Module-specific validation locales
```

## API domains

| Resource | Description |
|----------|-------------|
| `product` / `productVariant` / `productAttribute` | Catalog items, variants, and attributes |
| `category` / `collection` | Product organization and merchandising |
| `inventory` / `warehouse` | Stock levels and warehouse management |
| `cart` | Shopping cart |
| `productOrder` | Customer orders |
| `orderChannel` | Order channels |
| `fulfillment` | Fulfillment workflows |
| `escrowTransaction` | Escrow (see finance for payment transactions) |
| `pricingRule` / `discount` | Pricing and promotions |
| `taxZone` / `shippingZone` | Tax and shipping configuration |
| `customerGroup` / `customerGroupMember` / `customerAddress` | Customer segmentation and addresses |
| `returnRequest` | Returns and refunds |
| `cmsBlock` | Content blocks for storefront pages |
| `savedSearch` | Persisted customer searches |
| `analytics` | Commerce analytics payloads |

## File conventions

Each resource follows the Armonia pattern (see [core README](../../../README.md)):

- `*.dto.ts` — document/response types (often extend core `OwnershipData`, `DeletedData`, `Media`)
- `*.schema-def.ts` — declarative field map; drives validators and maestro create/update builders
- `create*.form.validator.ts` / `edit*.form.validator.ts` — thin wrappers around `buildCreateZodSchema` / `buildEditZodSchema`
- `*.form.type.ts` — inferred form types via `InferCreateForm` / `InferEditForm`

## Example import

```ts
import {ProductSchemaDef} from "armonia/src/modules/eCommerce/api/eCommerce/private/product/product.schema-def";
import {createProductFormSchema} from "armonia/src/modules/eCommerce/api/eCommerce/private/product/createProduct.form.validator";
import type {Product} from "armonia/src/modules/eCommerce/api/eCommerce/private/product/product.dto";
```

## Backend counterpart

Runtime logic, Mongoose schemas, and HTTP routes live in **maestro** under `maestro/modules/eCommerce/`. Database bootstrap registers models in `maestro/modules/eCommerce/database/moduleBootstrap.ts`.

## Frontend counterpart

UI routes, widgets, and panel contributions live in **sinfonia** under `sinfonia/src/modules/eCommerce/`.
