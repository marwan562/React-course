export type Animal = "bird"| "cat"| "dog"| "rabbit"| "reptile"

export interface Pet {
    id: number;
    name: string;
    animal: Animal;
    breed: string;
    city: string;
    description: string;
    state:string
    images: string[];
}

export interface PetsAPIResponse {
    numberOfResults: number;
    startIndex:      number;
    endIndex:        number;
    hasNext:         boolean;
    pets:            Pet[];
}

export interface SearchParamsType {
    location: string;
    animal:Animal;
    breed:string;
}

export interface BreedsAPIResponse {
    animal: string;
    breeds: string[];
}
