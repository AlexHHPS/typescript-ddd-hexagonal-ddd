export interface Pagination {
	readonly page?: number;
	readonly size?: number;
}

export interface CursorPagination {
	readonly cursor?: string;
	readonly direction?: "before" | "after" | "around";
	readonly size?: number;
	readonly includeCursor?: boolean;
}
