import React from 'react'
import { CardDefault } from './ProductCard'


const CardSection = () => {
  return (
<div className="flex justify-center "> {/* Container with mx-auto and padding */}
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"> {/* Added justify-items-center for centering grid items */}
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
    <CardDefault />
  </div>
</div>

  )
}

export default CardSection
