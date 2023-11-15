import { Aggregate } from '../../domain/entities/aggregate';
import { iRepositoryGateway } from '../../use-cases/interfaces/iRepositoryGateway';

/**
 * RepositoryGateway Class
 * Implements the iRepositoryGateway interface to persist Aggregates to the Business Service Database.
 *
 * @class
 * @implements {iRepositoryGateway}
 * @author
 */
export class RepositoryGateway implements iRepositoryGateway {
  /**
   * Persists the provided aggregate to the Business Service Database.
   *
   * @param {Aggregate} aggregate - The aggregate to be persisted.
   */
  persistAggregate(aggregate: Aggregate) {
    // Implementation details for persisting the aggregate to the Business Service Database
    // Include any SDK code or logic necessary for storing the aggregate data
  }
}
