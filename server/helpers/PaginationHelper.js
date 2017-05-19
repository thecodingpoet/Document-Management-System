/**
 * Helper class for pagination
 */
class PaginationHelper {
  /**
   * @desc PaginateResult pagination information for database result
   * @param {Object} result object containing result from database
   * @param {Number} offset Number of result to skip
   * @param {Number} limit Number of result to return at a time
   * @returns {Object} the metadata of the result
   */
  static paginateResult(result, offset, limit) {
    const paginatedResult = {};
    paginatedResult.currentPage = Math.floor(offset / limit) + 1;
    paginatedResult.pageCount = Math.ceil(result.count / limit);
    paginatedResult.pageSize = Number(limit);
    paginatedResult.totalCount = result.count;

    return paginatedResult;
  }

}
export default PaginationHelper;
