import type { Filter } from "./filter.js";
import type { CursorPagination, Pagination } from "./pagination.js";
import type { Sorting } from "./sorting.js";

export interface ExampleCriteria {
	readonly filters: Set<Filter>;
	readonly sorting?: Sorting;
	readonly pagination?: Pagination | CursorPagination;
}
