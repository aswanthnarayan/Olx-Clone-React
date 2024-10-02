import {
    Card,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { CiHeart } from "react-icons/ci";

   
  export function CardDefault() {
    return (
      <Card className="w-64 border border-lime-100 rounded-sm">
          <img className="p-2"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
         <Typography variant="h5" color="blue-gray" className="pb-2 ml-2">
         ₹ 15000
        </Typography>
        <p className="pl-2 text-sm pb-2">Cycling Machine - spine machine</p>
        <div className="flex ">
            <p className="pl-2 text-sm">Boomi Reddy colony Bengaluru</p>
            <p className="pr-2 text-sm pb-2">sep 24</p>
        </div>
      </Card>
    );
  }