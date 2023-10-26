/**
 * This interface is used to define the structure of the error data.
 * @author Ashwin Kumar (n499160)
 */
export interface ErrorData {
  /**
   * This property defines the error code.
   * @type {string}
   */
  code: string;

  /**
   * This property defines the error message.
   * @type {string}
   */
  reason: string;

  /**
   * This property defines the error timestamp
   * @type {string}
   */
  timeStamp?: string;
}

/**
 * This interface is used to define the structure of the error data.
 */
export interface ErrorDataModel {
  /**
   * This property defines the key-value pair of the error data.
   * @type {string}
   */
  [key: string]: string;
}
