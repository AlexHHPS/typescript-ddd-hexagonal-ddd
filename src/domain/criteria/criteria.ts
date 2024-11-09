import type { Filter } from "./filter.js";
import type { CursorPagination, Pagination } from "./pagination.js";
import type { Sorting } from "./sorting.js";

/** Represents a query combining multiple filters.

Filters inside a group are combined with `AND`, different groups are combined with `OR` */
export interface CompositeCriteria {
	readonly filterGroups: Set<Set<Filter>>;
	readonly sorting?: Sorting;
	readonly pagination?: Pagination | CursorPagination;
}
