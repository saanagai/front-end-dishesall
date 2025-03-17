export type FoodCategoryType = {
  _id: string;
  categoryName: string;
  createdAt?: string;
  updatedAt?: string;
};

export type FoodType = {
  name: string;
  price: number;
  _id: string;
  image: string;
  ingredietnts: string;
  category: FoodCategoryType;
  createdAt?: string;
  updatedAt?: string;
};
