import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

const SinglePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  return (
   <main>
 <div>
 <img className="img_singlepage" src={imageUrl} alt={data.name} />
 <h2 className='font_singlepage'>About {data.name.toUpperCase()}</h2>
 <h3 className='font_singlepage'>By {data.author.toUpperCase()}</h3>
  <p className='desc'>Description will be here</p>
  <button className='button_singlepage' onClick={() => navigate(-1)}>Go back</button>
  </div>
  </main>
);
};

export default SinglePage;
