import { useEffect , useState } from 'react'
import './App.css'
import axios from 'axios'
import NaveBar from './componenet/navebar'
import Card from './componenet/card'
//import { Route, Routes } from 'react-router-dom'
import SingalProductCard from './componenet/singalProductCard';


function App() {
    const [res, setres] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [ProductData, setProductData] = useState([]);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/")
      let data = response.data
      setres([...data])
    } catch (error) {
      alert("error: " , error.message)
    }

  }

  return (
    <>
      <NaveBar message={[...res]} onSearch={setFilteredData} />
      <div className="container"> 
      {
        (ProductData.length > 0 ? <SingalProductCard data={ProductData}/> : 
          
        (filteredData.length > 0 ? filteredData : res).map((item, index) => (
          <Card item={item} index={index} key={index} apiResponse= {[...res]} SearchProduct={setProductData} />
        ))
      
        )
      }
      
    </div>
    </>
  );

}

export default App
