import React, { memo, FC } from 'react';
import {IProductModel} from "../../../models/product.model";
import {CardActions, CardMedia, Typography} from "@mui/material";
import {SCard, SCardContent} from "../../../assets/styles/app.styles";
import {AiFillStar} from "react-icons/ai";
import Description from "../../UI/Description";


const ProductCard: FC<IProductModel> = ({id, title, rating, price, image, description, category}) => {
    return (
        <SCard>
            <CardMedia
                component="img"
                alt={title}
                style={{width: "140px", alignSelf: "center"}}
                image={image}
            />
            <SCardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography >
                    Category: {category}
                </Typography>
                <div style={{display: "flex", alignItems: "center"}}>
                    Rate: <AiFillStar style={{color: "red", marginLeft: "2px"}} />
                    {rating.rate} ({rating.count})
                </div>
                <Description description={description} />
            </SCardContent>
            <CardActions style={{width: "80px"}}>
                <Typography variant="h5" color="text.secondary">
                    ${price}
                </Typography>
            </CardActions>
        </SCard>
    )
};
export default memo(ProductCard);
