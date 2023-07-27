import { XMarkIcon } from "@heroicons/react/24/solid";
import { BaseComponent, FlexRow } from "../atoms";
import { BaseComponentProps } from "../atoms/BaseComponent";

interface FilterInput extends BaseComponentProps {
  filter: string;
  onChange: (filter: string) => void;
  onReset: () => void;
  inputTitle?: string;
  resetTitle?: string;
  inputPlaceholder?: string;
  skeleton?: boolean;
}

/** FilterInput
 * Simple search-like box for filters.
 * State should be handled outside the component.
 *
 * @param {(filter: string) => void} onChange Function for handling filter change
 * @param {() => void} onReset Function for resetting the filter
 * @param {string} filter The current filter
 * @param {boolean} skeleton (optional) Whether to return a skeleton variant
 * @param {string} inputTitle (optional) Title of input field
 * @param {string} inputPlaceholder (optional) Placeholder of input field
 * @param {string} resetTitle (optional) Title of reset button
 * @returns ReactNode
 *
 * @example
 *   const WrapperComponent = () => {
 *     const [filter, setFilter] = useState("");
 *     const resetFilter = () => setFilter("");
 *
 *     return <FilterInput filter={filter} onChange={setFilter} onReset={resetFilter} />
 *   }
 */
export default function FilterInput({
  filter,
  onChange,
  onReset,
  inputTitle = "",
  inputPlaceholder = "",
  resetTitle = "",
  className = "",
  skeleton = false,
  as = FlexRow,
  ...rest
}: FilterInput) {
  const innerClassNames = "rounded-full bg-gray-700 text-white";

  if (skeleton) {
    return (
      <BaseComponent
        as={as}
        className={`h-10 ${innerClassNames} ${className}`}
      />
    );
  }

  return (
    <BaseComponent
      className={`${innerClassNames} ${className}`}
      as={as}
      {...rest}
    >
      <input
        className={`flex grow bg-transparent p-2 pl-4 ${
          filter !== "" ? "bg-gray-600" : ""
        } rounded-full outline-none hover:bg-gray-400 focus:bg-white focus:text-black`}
        value={filter}
        onChange={(e) => onChange(e.target.value)}
        title={inputTitle}
        placeholder={inputPlaceholder}
      />
      {filter !== "" && (
        <button
          className="bold m-2 h-6 w-6 rounded-full bg-gray-600 p-1 text-white hover:bg-gray-400 hover:text-black focus:bg-gray-400 focus:text-black active:bg-gray-300 active:text-black"
          onClick={onReset}
          title={resetTitle}
        >
          <XMarkIcon />
        </button>
      )}
    </BaseComponent>
  );
}
