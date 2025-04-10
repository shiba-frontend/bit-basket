import axios  from "axios";
import React, { useState, useEffect } from "react";


const URL = "https://bitbasket.itiffyconsultants.net/bitbasket/api/"

export default axios.create({
    baseURL:URL,
    headers: { 
        'Content-Type': 'multipart/form-data', 
        'Authorization': 'Bearer ',
    },
   
})