import { Aggregate } from '../../domain/entities/aggregate';

/**
 * Repository Gateway Interface
 *
 * @description
 * This interface defines the contract for persisting the aggregate to the Business service database,
 * making it available for other microservices to use.
 */
export interface iRepositoryGateway {
  /**
   * Persist Aggregate
   *
   * @param {Aggregate} aggregate - The aggregate to be persisted.
   * @returns {any} - The method should handle the persistence process and return the result accordingly.
   */
  persistAggregate(aggregate: Aggregate): any;
}
