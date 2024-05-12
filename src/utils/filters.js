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
      let [min, max] = getFilterRange(filterValue);
      let rangeFilter = "";

      if (min !== Infinity) {
        rangeFilter = min <= dataItem[paramName.max];
      }
      if (max !== Infinity) {
        rangeFilter &&= dataItem[paramName.min] <= max;
      }

      conditions &&= rangeFilter;
    }
    // String filters
    else {
      let stringFilters = filterValue
        ?.map((filter) => filter.value)
        .includes(dataItem[paramName]);

      conditions &&= stringFilters;
    }
  }

  return conditions;
};

/**
 * Calculates the minimum and maximum values from a set of filters.
 * @param {Array<Object>} filters - An array of filter objects.
 * @returns {Array<number>} An array containing the minimum and maximum values.
 */
export const getFilterRange = (filters) => {
  let min = filters?.[0]?.value?.min ?? 0,
    max = filters?.[0]?.value?.max ?? 0;

  for (const filter of filters) {
    if (min < Number(filter?.value?.min)) {
      min = Number(filter?.value?.min) ?? min;
    }

    if (max < Number(filter?.value?.max)) {
      max = Number(filter?.value?.max) ?? max;
    }
  }
  max = max < min ? Infinity : max;
  return [min, max];
};
