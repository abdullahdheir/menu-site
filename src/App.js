import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Category, Foods } from "./components/Data";
import DataList from "./components/DataList";
import FilterButtons from "./components/FilterButtons";
import NavBar from "./components/NavBar";
import TitlePage from "./components/TitlePage";
function App() {
  const [item, setItem] = useState(Foods);
  const filterByCategory = (category) => {
    const newArr = Foods.filter(f => f.category === category);
    if (newArr.length)
      setItem(newArr);
    else
      setItem(Foods)
  }
  const InputValue = useRef(null)

  const FilterBySearch = (category) => {
    const cat = Category.filter(cate => cate.name_ar.match(category) || cate.name_en.match(category));
    console.log(cat);
    const newArr = Foods.filter(f => f.name.match(category) || f.description.match(category) || (cat.length ? f.category === cat[0].id : ""));
    console.log(newArr);
    if (newArr.length)
      setItem(newArr);
    else
      setItem(0);
  }

  return (
    <div className="App">
      <NavBar inputValue={InputValue} filterBySearch={FilterBySearch} />
      <Container >
        <TitlePage />
        <FilterButtons inputValue={InputValue} filterByCategory={filterByCategory} />
        <DataList food={item} />
      </Container>
    </div>
  );
}

export default App;
