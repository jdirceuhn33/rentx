import { Category } from '../models/Category'

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class ICategoriesRepository {
  create ({ name, description }: ICreateCategoryDTO): void;
  list (): Category[];
  findByName (name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO }
