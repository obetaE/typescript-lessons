"use client"
import React, { useState } from 'react'
import { useRef } from 'react';

const secondcommonusecase = () => {
    //If you have a complex state like this and you need to update every item insde, then you should really consider using usereducer. Cause if your form elements aren't the same type then this will be way harder to manage
    const [product,setProduct]=useState({
        titile:"",
        desc:"",
        price:0,
        category:"",
        tags:[],
        images: {
            sm: "",
            md: "",
            lg:"",
        },
        quantity:0,
    });

    const handlChange = (e) => {
        setProduct((prev) => ({...prev, [e.target.name] : e.target.value}))
    };

    const tagRef = useRef();

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");
        tags.forEach((tag) =>{
            setProduct((prev) => ({...prev, tags: [...prev.tags, tag] }))
        })
    }

  return (
    <div>
      form
    </div>
  )
}

export default secondcommonusecase
