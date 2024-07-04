import { FilterMenuProps } from "../types/filterTypes"
import { FilterButton, FilterWrapper } from "./ui/filterComponents"

function FilterMenu( props: FilterMenuProps) {

  const { setFilter, filter } = props
  return (
    <FilterWrapper>
      <FilterButton onClick={() => setFilter("all")} $isActived={filter === "all"}>
        All
      </FilterButton>
      <FilterButton onClick={() => setFilter("frontend")} $isActived={filter === "frontend"}>
        FrontEnd
      </FilterButton>
      <FilterButton onClick={() => setFilter("backend")} $isActived={filter === "backend"}>
        BackEnd
      </FilterButton>
      {/* <FilterButton onClick={() => setFilter("java-spring")} $isActived={filter === "java-spring"}>
        JavaSpring
      </FilterButton> */}
    </FilterWrapper>
  )
}

export default FilterMenu