import { atom } from "recoil";

export const contentState = atom({
    key: 'contentState',
    default: "**Let's write some markdown**"
})