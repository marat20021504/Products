import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../components/Loader";


const ProductDetails = () => {

    const {id} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 5000)
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setData(res.data))
    }, [id])

    
    return (
        <Wrapper category={data.category}>
            {loading ? <LoadingSpinner /> : 
            
            <div className="detail">

                <header>
                    <img onClick={() => navigate(-1)} src="https://iconarchive.com/download/i86010/graphicloads/100-flat-2/arrow-back.ico" alt="back-icon" />
                </header>

                <div className="main">

                    <div className="Image-Container">
                        <div className="bigImage">
                            <img src={data.thumbnail } alt={data.title} />          
                        </div>
                        
                        <div className="images" >
                                { 
                                    data?.images?.map((img, id) => {
                                        return (
                                            <div>
                                                <img src={img} alt={data.brand} key={id} />
                                            </div>
                                        )
                                    }) 
                                }
                        </div>


                    </div>
                    
                    <div className="content">

                        <b>Title: {data.title}</b>
                        <p className='brand'>Brand: {data.brand}</p>

                        <p className='price'>Price: {data.price} $</p>
                        <p className='description'>Description: {data.description}</p>

                        <p className="rating">Rating: {data.rating}</p>
                        <p className="stock">Stock: {data.stock}</p>

                    </div>

                </div>

            </div>
            }
        </Wrapper>
    )
}

export default ProductDetails;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;

    header {
        margin-bottom: 20px;
        img {
			width: 30px;
			height: 30px;
            cursor: pointer;
        }
    }

    .main {
			display: flex;
			align-items: center;
			gap: 30px;

            @media (max-width: 600px) {
                width: 100%;
                flex-direction: column;
            }

            .Image-Container {
                display: flex;
                align-items: center;
                gap: 20px;
                flex-direction: column;

                .images {
                    display: flex;
                    gap: 20px;
                    
                    div {
                        padding: 8px;
                        border-radius: 5px 2px 5px 2px;
                        box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
                        height: 120px;
                        width: 120px;
                        object-fit: center;

                        object-fit: ${({category}) => 
                            category === "laptops" ? "contain" : "cover" 
                        };

                        height: ${({category}) => 
                            category === "laptops" ? "auto" : "120px" 
                        };

                        width: ${({category}) => 
                            category === "laptops" ? "150px" : "120px" 
                        };

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }


                    @media (max-width: 600px) {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                .bigImage {
                    width: 300px;
                    height: 302px;
                    object-fit: cover;
                    padding: 8px;
                    background-color: white;
                    margin-right: 32px;
                    border: 1px solid rgba(24,34,33,0.493);
                    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
                    border-radius: 13px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }

                    object-fit: ${({category}) => 
                        category === "laptops" ? "contain" : "cover" 
                    };

                    width: ${({category}) => 
                        category === "laptops" ? "auto" : "300px" 
                    };

                    @media (max-width: 600px) {
                        margin-right: 0;
                        width: 100%;
                    }
                  }

            }
            
            .content {
                p {
                    margin-top: 10px;
                    font-size: 18px;
                }

                b {
                    font-size: 30px;
                    letter-spacing: 1px;
                }
            }

      	}
`