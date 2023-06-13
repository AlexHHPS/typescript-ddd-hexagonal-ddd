

class UseCaseExample {
  constructor(private readonly repository: RepositoryExample) {}

  async execute(): Promise<void> {
    await this.repository.save()
  }
}