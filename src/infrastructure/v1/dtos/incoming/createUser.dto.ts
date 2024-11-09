import { type Static, Type } from "@sinclair/typebox";

export const CreateUserDTOSchema = Type.Object(
	{
		name: Type.Readonly(Type.String()),
		created_at: Type.Readonly(Type.Date()),
		updated_at: Type.Readonly(Type.Date()),
	},
	{ additionalProperties: false },
);

export type CreateUserDTO = Static<typeof CreateUserDTOSchema>;
