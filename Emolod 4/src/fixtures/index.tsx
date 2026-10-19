import type { Massage } from '../types';
import type { BlogContainer } from '../types';

let massages: Massage[] = [
    {
        id: 1,
        time: new Date(2026, 9, 8, 10, 22),
        author: "Alex Khodakovskyi",
        text: "Мене сьогодні не буде",
        isOwner: false,
    },
    {
        id: 2,
        time: new Date(2026, 9, 8, 15, 8),
        author: "Саша",
        text: "Вітаю товариство. Нагадую що о 18:00 у нас заняття.",
        isOwner: true,
    },
    {
        id: 3,
        time: new Date(2026, 9, 9, 15, 8),
        author: "Ruban T",
        text: "Буде заняття у звязку зі світлом?",
        isOwner: false,
    },
    {
        id: 4,
        time: new Date(2026, 9, 9, 15, 8),
        author: "Саша",
        text: "Так",
        isOwner: true,
    },
    {
        id: 5,
        time: new Date(2026, 9, 9, 15, 8),
        author: "Саша",
        text: "як завжди о 18",
        isOwner: true,
    },
];

let ReactLabs_25_04_2025 : BlogContainer = {
    title: "React Labs: View Transitions, Activity, and more",
    publicationDate: new Date(2025, 4, 25),
    description: "In React Labs posts, we write about projects in active research and development. In this post, we’re sharing two new experimental features that are ready to try today, and sharing other areas we’re working on now …",
    fullArticleLink: "https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more"
};

export { massages, ReactLabs_25_04_2025 };
