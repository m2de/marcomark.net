# Creating a new model, migration and graphql endpoint

- nest g resource {domain} {model}
  - nest g resource projects project
- project.entity.ts
  - Use same file for typeorm and graphql
  - Add typeorm decorators @Entity, @PrimaryGeneratedColumn, @Column
- start or build `yarn start:dev`
- generate migration
  - npx typeorm migration:generate -n ProjectTable -d src/migrations
- connect graphql to db
  - rename findAll query to plural `@Query(() => [Project], { name: 'projects' })`
  - import typeorm into project.module.ts
    - imports: [TypeOrmModule.forFeature([Project])],
  - inject repository into project.service.ts constructor
  - add repository actions to existing methods
  
## Unresolved questions

- TypeORM will query all fields regardless of what the GraphQL request asks for
  - https://docs.nestjs.com/graphql/resolvers#graphql-argument-decorators
  - @Context and @Info appear to be ways of accessing the parameters. Could then pass these through to the service and repository. Feels like a lot of overhead that I was expecting nestjs (typeorm) to take care of, being used to Eloquent.
  - Not looked into eager / lasy loading and n+1 queries yet
