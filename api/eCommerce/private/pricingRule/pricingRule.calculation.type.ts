export type CartLineForPricing = {
    productId: string;
    variantId?: string;
    quantity: number;
    unitPrice: number;
    categoryId?: string;
    collectionIds?: string[];
};

export type PricingRuleLineAdjustment = {
    ruleId: string;
    ruleName: string;
    ruleType: string;
    originalUnitPrice: number;
    adjustedUnitPrice: number;
    lineTotalAdjustment: number;
};

export type PricingCalculationResult = {
    adjustedSubtotal: number;
    subtotalAdjustment: number;
    lineAdjustments: PricingRuleLineAdjustment[];
    appliedRuleIds: string[];
    adjustedLines: CartLineForPricing[];
};
