export interface SkillData {
    id: number;
    title: string;
    icon: string;
    primary: string;
    iconColor: string;
    rating: number;
    titleColor: string;
}

export interface BaseSkillData {
    id: number;
    title: string;
    icon: string;
    primary: string;
    iconColor: string;
    rating: number;
}

export const baseSkillItem: BaseSkillData[] = [
    {
        id: 0,
        title: "Android",
        icon: "android.svg",
        primary: "#3DDc84",
        iconColor: "#23A65D",
        rating: 70
    },
    {
        id: 1,
        title: "Material Design",
        icon: "material-design.svg",
        primary: "#6717F6",
        iconColor: "#3f1dcb",
        rating: 30
    },
    {
        id: 2,
        title: "Kotlin",
        icon: "language-kotlin.svg",
        primary: "#6779F6",
        iconColor: "#26418f",
        rating: 63
    },
    {
        id: 3,
        title: "Java",
        icon: "java.svg",
        primary: "#ED8B17",
        iconColor: "#c77800",
        rating: 60
    },
    {
        id: 4,
        title: "TypeScript",
        icon: "typescript.svg",
        primary: "#007ACC",
        iconColor: "#004ba0",
        rating: 19
    },
    {
        id: 5,
        title: "CSS3",
        icon: "css-3-logo.svg",
        primary: "#1B84C2",
        iconColor: "#004ba0",
        rating: 26
    },
    {
        id: 6,
        title: "HTML5",
        icon: "html5.svg",
        primary: "#f16529",
        iconColor: "#e44d26",
        rating: 24
    },
    {
        id: 7,
        title: "Overwatch",
        icon: "overwatch.svg",
        primary: "#f06414",
        iconColor: "#ed6516",
        rating: 48
    },
    {
        id: 8,
        title: "Blender",
        icon: "blender.svg",
        primary: "#E87C0D",
        iconColor: "#b4600a",
        rating: 20
    }
]
