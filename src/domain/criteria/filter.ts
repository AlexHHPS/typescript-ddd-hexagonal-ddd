import type { Operators } from "./operators.js";

export interface Filter {
	readonly field: string;
	readonly operator: Operators;
	readonly value: string | number | boolean | Date;
}
