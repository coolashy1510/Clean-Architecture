import { ErrorData } from './errorModel';
import technicalErrorConstants from './technicalErrorConstants';

/**
 * This class represents a technical error.
 * @author Ashwin Kumar (n499160)
 */
export class TechnicalError implements ErrorData {
  /**
   * Technical error code.
   * @type {string}
   */
  code: string;

  /**
   * Technical error description
   * @type {string}
   */
  reason: string;

  /**
   * Technical error status.
   * @type {number}
   */
  status: number;

  /**
   * Constructs a new TechnicalError.
   *
   * @param code - Technical error code.
   * @param status - Technical error status.
   */
  constructor(code: string, status: number) {
    const description = technicalErrorConstants[code];
    this.code = code;
    this.status = status;
    this.reason = description;
  }
}
