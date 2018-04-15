import { Book } from "../models/content";
import { Paragraph } from "../models/paragraph";

export const MOCK_BOOK : Book = {
    name: "Разработка шрифтовой гарнитуры",
    parts: [
        {
            name: "Введение",
            paragraphs: [
                { name: "Введение", source: "/1/1" }
            ]
        },
        {
            name: "Появление письма",
            paragraphs: [
                { name: "Первые рукописные шрифты", source: "/2/1" },
                { name: "Рождение книгопечатания", source: "/2/2" },
                { name: "Появление шрифтовых гарнитур", source: "/2/3" },
                { name: "Основные принципы, выработанные Клайвом Юлиусом Штайнмайером при создании однотонные печатных иллюстраций", source: "/2/4" }
            ]
        },
        {
            name: "Немного об истории развития книгопечатного дела на территории Российской Империи",
            paragraphs: [
                { name: "Книгопечатание при Екатерине II", source: "/3/1" },
            ]
        },
        {
            name: "Конец",
            paragraphs: [
                { name: "Завершение", source: "/3/1" },
                { name: "Конец", source: "/3/2" }
            ]
        }
    ]
};