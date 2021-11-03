import { Specification } from '../../models/Specification'
import { ISpecificationRepository, ICreateSpecificationDTO } from '../ISpecificationRepository'

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationsRepository

  public static getInstance (): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  private constructor () {
    this.specifications = []
  }

  create ({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      create_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName (name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name)

    return specification
  }
}

export { SpecificationsRepository }
