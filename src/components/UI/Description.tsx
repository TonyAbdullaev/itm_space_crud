import React, {memo, useState} from 'react';
import {Typography} from "@mui/material";
import {ReadMoreBtn} from "../../assets/styles/app.styles";

interface IDescription {
    description: string;
}

const Description = ({description}: IDescription) => {
    const [isReadMore, setReadMore] = useState<boolean>(false)

    return (
        <Typography color="text.secondary">
            {
                description.length <= 150 ? description :
                isReadMore ? description : `${description.substring(0, 150)}...`
            }
            {
                description.length > 150 &&
                    <ReadMoreBtn
                        type="button"
                        onClick={() => setReadMore(prevState => !prevState)}>
                        {isReadMore ? "Read Less" : "Read More"}
                    </ReadMoreBtn>
            }
        </Typography>
    );
};

export default memo(Description);