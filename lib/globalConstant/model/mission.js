const rootPrefix = '../../..',
  basicHelper = require(rootPrefix + '/lib/basicHelper');

let invertedStatuses;

/**
 * Class for mission model constants.
 * @class MissionModelConstants
 */
class MissionModelConstants {
  /**
   * Non deleted status
   * @returns {string}
   */
  get createdStatus() {
    return 'CREATED';
  }

  /**
   * Deleted status
   * @returns {string}
   */
  get inProgressStatus() {
    return 'IN_PROGRESS';
  }

  /**
   * Deleted status
   * @returns {string}
   */
  get completedStatus() {
    return 'COMPLETED';
  }

  get failedStatus() {
    return 'FAILED';
  }

  /**
   * Get enum for status.
   * @returns {object}
   */
  get statuses() {
    const oThis = this;

    return {
      1: oThis.createdStatus,
      2: oThis.inProgressStatus,
      3: oThis.completedStatus,
      4: oThis.failedStatus
    };
  }

  /**
   * Get enum values from status.
   * @returns {object}
   */
  get invertedStatuses() {
    const oThis = this;

    invertedStatuses = invertedStatuses || basicHelper.invert(oThis.statuses);

    return invertedStatuses;
  }
}

module.exports = new MissionModelConstants();