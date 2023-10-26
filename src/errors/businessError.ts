import businessErrorConstants from './businessErrorConstants';
import { ErrorData } from './errorModel';

/**
 * This class represents a business error.
 * @author Ashwin Kumar (n499160)
 */
export class BusinessError implements ErrorData {
  /**
   * Business error code
   * @type {string}
   */
  code: string;

  /**
   * Business error description
   * @type {string}
   */
  reason: string;

  /**
   * Business error status
   * @type {number}
   */
  status: number;

  /**
   * Business error title.
   * @type {string}
   */
  title?: string;

  /**
   *  Constructs a new BusinessError.
   *
   * @param code - Business error code
   * @param status - Business error status
   */
  public constructor(code: string, status: number, title?: string) {
    const description = businessErrorConstants[code];
    this.code = code;
    this.status = status;
    this.reason = description;
    if (!description && title) {
      this.reason = title;
    }
  }
}
