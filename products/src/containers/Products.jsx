import { useEffect } from "react";
import axios from "axios"
import styled from "styled-components"
import { useState } from "react";
import Product from "../components/Product";
import LoadingSpinner from "../components/Loader";

const Products = () => {
    const [product, SetProducts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    
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
            <input 
                type="text" 
                placeholder="Search..."
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />

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