import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({item}) => {
    return (
        <Wrapper category={item.category}>

           <Link to={`/product/${item.id}`}>
                <div className="Product-image">
                    <img src={item.thumbnail} alt={item.title} />
                </div> 

                <div className="Product-info">
                    
                    <p className="info-title">TITLE: {item.title}</p>
                    <p className="info-description">DESCRIPTION: {item.description}</p>

                </div>
           </Link>

        </Wrapper>
    )
}

export default Product;

const Wrapper = styled.div`
    transition: all 1s;
    padding: 10px;
    border-radius: 10px 2px;
    border: 1px solid rgba(24, 34, 33, 0.493);


    &:hover {
        box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.452);
    }

    grid-column: ${({category}) => 
        category === "laptops" ? "span 2" : "span 1" 
    };

    @media (max-width: 600px) {
        grid-column: ${({category}) => 
            category === "laptops" ? "span 1" : "span 0" 
        };
    }

    .Product-image {
        overflow: hidden;
        height: 300px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 22px;
        padding: inherit;
        
        img {
            object-fit: cover;
            transition: all .3s ease-in-out;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            transform: scale(1);

            &:hover {
                transform: scale(1.1);
            }
        }

    }

    .Product-info {
        padding: 8px;

        .info-title {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #1A1F16;
        }

        .info-description {
            margin-top: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 1px;
            color: #60695C;
        }
    }
`