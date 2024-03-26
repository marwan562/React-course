export type Animal = "bird"| "cat"| "dog"| "rabbit"| "reptile"

export interface Pet {
    id: number;
    name: string;
    animal: Animal;
    breed: string;
    city: string;
    description: string;
    images: string[];
}