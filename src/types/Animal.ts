export type Animal = {
    id: number;
    name: string;
    description: string;
    isFed?: boolean;
    lastFedAt?: string;
  };
  
  export type FeedAnimalData = {
    isFed: boolean;
    lastFedAt: string;
  };