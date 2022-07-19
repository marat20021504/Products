import { useEffect } from "react";
import axios from "axios"
import styled from "styled-components"
import { useState } from "react";
import Product from "../components/Product";
import LoadingSpinner from "../components/Loader";
import Categories from "../components/Categories";

const Products = () => {
    const [product, SetProducts] = useState([], Categories)
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        })
        SetProducts(result)
    }
    
    useEffect(() => {
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 5000)
        axios.get('https://dummyjson.com/products')
            .then(res => SetProducts(res.data.products))
    }, []) 

    return (
        <Wrapper>

            <div className="form">
                <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                />
            </div>

            <div className="categories">
                    <button onClick={() => SetProducts(Categories)}>All</button>
                    <button onClick={() => filterResult('smartphones')}>Smartphones</button>
                    <button onClick={() => filterResult('laptops')}>Laptops</button>
                    <button onClick={() => filterResult('fragrances')}>Fragrances</button>
                    <button onClick={() => filterResult('skincare')}>Skincare</button>
                    <button onClick={() => filterResult('groceries')}>Groceries</button>
                    <button onClick={() => filterResult('home-decoration')}>Home-Decoration</button>
                </div>

            <div className="Container">
                { 
                    loading ? <LoadingSpinner /> :
                    product.filter((item) => {
                        if (search == '') {
                            return item
                        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                           return item
                        }
                    }).map((item, id) => {
                        return (
                            <Product key={id} item={item} />
                        )
                    })
                }
                
            </div>
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    input {
        width: 350px;
        height: 40px;
        padding: 8px 10px;
        box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
        border: none;
        border-radius: 10px;
        outline: none;
        overflow: hidden;
        display: block;
        margin: 20px auto;
    }

    .categories {
        text-align: center;

        button {
            margin: 10px;
            padding: 5px 15px;
            border: none;
            border-radius: 5px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 18px;
            color: #2872c7;
            border: 1px solid #2872c7;
            cursor: pointer;
            transition: all 0.5s;
            background-color: transparent;

            &:hover {
                background-color: #2872c7;
                color: white;
            }
        }

        .active{
            background-color: #2872c7;
            color: white;
        }
    }

    .Container {
        margin: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        grid-auto-flow: dense;

        @media (max-width: 600px) {
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        }
    }
`