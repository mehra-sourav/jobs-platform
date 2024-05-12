import { FILTER_QUERY_MAPPINGS } from "@/constants/filters";

/**
 * Checks if the passed data item satisfies the passed filter configuration
 * @param {Object} filterConfig - The filter configuration object.
 * @param {Object} dataItem - Job data
 * @returns {boolean} The result of the comparison
 */
export const doesItemSatisfyFilters = (filterConfig, dataItem) => {
  let conditions = true;
  const filterConfigEntries = Object.entries(filterConfig);

  for (const [filterName, filterValue] of filterConfigEntries) {
    let paramName = FILTER_QUERY_MAPPINGS[filterName];

    // Continue to next filter if current filter name is not in job data
    if (
      (typeof paramName === "object" &&
        Object.values(paramName).every((key) => !(key in dataItem))) ||
      (typeof paramName === "string" && !(paramName in dataItem))
    ) {
      continue;
    }

    // Range filters
    if (
      filterValue?.[0]?.value?.hasOwnProperty("min") ||
      filterValue?.[0]?.value?.hasOwnProperty("max")
    ) {
      let rangeFilter = filterValue?.some((filter) => {
        let [min, max] = getFilterRange(filter);
        let filterCondition = true;

        if (min !== Infinity) {
          filterCondition = min <= dataItem[paramName.max];
        }
        if (max !== Infinity) {
          filterCondition &&= dataItem[paramName.min] <= max;
        }

        return filterCondition;
      });

      conditions &&= rangeFilter;
    }
    // String filters
    else {
      let stringFilters;
      if (paramName === "location") {
        stringFilters = filterValue?.some((filter) =>
          filter.value === "in-office"
            ? !["remote", "hybrid"].includes(dataItem[paramName])
            : dataItem[paramName] === filter.value
        );
      } else {
        stringFilters = filterValue
          ?.map((filter) => filter.value)
          .includes(dataItem[paramName]);
      }

      conditions &&= stringFilters;
    }
  }

  return conditions;
};

/**
 * Calculates the minimum and maximum values from a set of filters.
 * @param {Array<Object>} filter - A filter object
 * @returns {Array<number>} An array containing the minimum and maximum values.
 */
export const getFilterRange = (filter) => {
  let min = filter?.value?.min ?? 0,
    max = filter?.value?.max ?? Infinity;

  max = max < min ? Infinity : max;
  return [min, max];
};
