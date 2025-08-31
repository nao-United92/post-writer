import { z } from 'zod';

export const postCreateSchema = z.object({
  title: z
    .string()
    .min(3, { message: '記事のタイトルは3文字以上で入力してください。' })
    .max(128, { message: '記事のタイトルは128文字以内で入力してください。' }),
  content: z.any().optional(),
});

export type postCreateSchemaType = z.infer<typeof postCreateSchema>;

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(3, { message: '記事のタイトルは3文字以上で入力してください。' })
    .max(128, { message: '記事のタイトルは128文字以内で入力してください。' })
    .optional(),
  content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;
