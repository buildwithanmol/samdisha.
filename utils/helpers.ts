export const response = (success: boolean, message: string, data?: any) => {
    return { success, message, data }
}

export function url_converter(url: string) {
    return url.replace(/\s+/g, '-').toLowerCase();
};