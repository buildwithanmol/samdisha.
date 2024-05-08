import { z } from "zod";

export const blogValidation = z.object({
    title: z.string().min(1),
    og: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        tags: z.array(z.string()).min(1)
    }),
    subTitle: z.string().min(1),
    tableOfContents: z.array(z.object({
        title: z.string().min(1),
        link: z.string().min(1)
    })),
    content: z.string().min(1),
    category: z.string().min(1)
})

export const blogUpdateValidation = z.object({
    title: z.string().min(1).optional(),
    og: z.object({
        title: z.string().min(1).optional(),
        description: z.string().min(1).optional(),
        tags: z.array(z.string()).min(1).optional()
    }).optional(),
    subTitle: z.string().min(1).optional(),
    tableOfContents: z.array(z.object({
        title: z.string().min(1).optional(),
        link: z.string().min(1).optional()
    })).optional(),
    content: z.string().min(1).optional(),
    category: z.string().min(1).optional()
})

export const imageValidation = z.object({
    url: z.string().url().min(1),
    alt: z.string().min(1)
})

export const contactValidation = z.object({
    email: z.string().email().min(1),
    name: z.string().min(1),
    query: z.string().min(1)
})

export const adminValidation = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1)
})