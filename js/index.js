const Producto = document.querySelectorAll(`.Producto`)
const ProductoImg = document.querySelectorAll(`.Producto-img`)
const ProductoSpan = document.querySelectorAll(`.Producto-span`)
ProductoImg.forEach(( _ , i )=>{
  ProductoImg[i].addEventListener('mouseenter', ()=>{
    ProductoImg[i].classList.add('ProductoImgIsActive')
    ProductoSpan[i].classList.add('spanIsActive')
  })
})
ProductoImg.forEach(( _ , i )=>{
  ProductoImg[i].addEventListener('mouseleave', ()=>{
    ProductoImg[i].classList.remove('ProductoImgIsActive')
    ProductoSpan[i].classList.remove('spanIsActive')
  })
})
